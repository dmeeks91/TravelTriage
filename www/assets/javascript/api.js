
//Summary of trsl8.callAPI()
  //1) Call clearTrackingArrays
        //Clear tracking arrays used with translate API. 
        //These arrays store only non-blank values. 
        //This step is necessary b/c during testing we got errors upon sending to many blank strings to the API.
  //2) Push non-blank bodySystem and symptom data to oldVals array.
  //3) Call trnsSection
        //makes an ajax call to the yandex API with the stringified version of oldVals array
  //4) Call updateBSObj
        //updates current bodySystem object with translated text by looping through keys array,
        //and replacing 2nd index position of bodySystem[key] with the corresponding translated text 
        //stored in the newVals array.
  //5) Call creatTable
        //adds a new card to the DOm with the table summary in it

var trsl8 = {
    keys: [],  
    oldVals: [],
    newVals: [],
    createTable: function (bSObj) {
      var card="";
        //$.each(bodySystems, function(key, bSObj) {
          card += `<div class="data-table data-table-init card">
                    <div class="card-header">
                      <div class="label-cell bsHead">${bSObj.bodySystem[1]} (${bSObj.bodySystem[0]})</div>
                    </div>
                    <div class="card-content">
                      <table>
                        <thead>    
                          <tr>
                            <th class="label-cell">Symptom</th>
                            <th class="label-cell">Severity</th>
                            <th class="label-cell">Comment</th>
                          </tr>
                        </thead> 
                        <tbody>`;

            $.each(bSObj.symptoms, function(key, sObj) {
                if (sObj.rate[0] != "NR")
                {//only add row if symptom was rated.
                  card += `<tr>
                            <td class="label-cell">${sObj.name[1]}<br>
                              <div class="symptOld">${sObj.name[0]}</div>
                            </td>
                            <td class="label-cell">${sObj.rate[1]}<br>
                              <div class="symptOld">${sObj.rate[0]}</div>
                            </td>
                            <td class="label-cell">${sObj.comment[1]}<br>
                              <div class="symptOld">${sObj.comment[0]}</div>
                            </td>
                          </tr>`;
                }
              });     

               card += `</tbody>
                      </table>
                    </div>
                  </div>`  
        //});
    
      $("#transDisplay").append(card);
    },
    clearTrackingArrays: function() {
      this.keys = [];
      this.oldVals = [];
      this.newVals = [];
    },
    callAPI: function() {      
      var self = this,
          msg  = [];
      //wrapped in promise because we want to ensure that all of the users complaints are updated 
      //before creating the a summary table and appending it to the DOM 
      return new Promise ( function(resolve, reject) {
        //loop through bodySystems and translate seperately. 
        $.each(bodySystems, function(bSID, bSObj) {          
            self.clearTrackingArrays();

            //add this bodySystem to the keysArray
            self.keys.push({type: 'bS', indx: `${bSID}`});
            self.oldVals.push(bSObj.bodySystem[0]);

              //loop through symptoms and add keys/values of rated symptoms
              $.each(bSObj.symptoms,function(sID, sObj) {
                  if (sObj.rate[0] != "NR")
                    {
                      self.keys.push({type: 'name', indx: `${sID}`});
                      self.oldVals.push(sObj.name[0]);
                  
                      self.keys.push({type: 'rate', indx: `${sID}`});
                      self.oldVals.push(sObj.rate[0]);

                      if (sObj.comment[0].length > 0)
                      {//only translate comment if it exists
                        self.keys.push({type: 'comment', indx: `${sID}`});
                        self.oldVals.push(sObj.comment[0]);
                      }                      
                    }
              });

            //Translate current bS THEN update the bodySystems Object THEN createTable 
            self.trsl8Section().then(function(trnsVals) {
              //self.newVals = trnsVals;
              self.updateBSObj(bSID, self.keys, trnsVals).then(function (data) {
                self.createTable(data);
              })
            });
        });

        //send the status message back to the page
        resolve(msg);
      })
      

    },
    trsl8Section: function() {
      var self = this,
          yandex = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012`;
          //data = JSON.stringify(self.oldVals).replace(/","/g,'"∞"');
          yandex += `&text=${JSON.stringify(self.oldVals).replace(/","/g,'"∞"')}&lang=en-${user.language}&format=plain`;

          console.log(`url: ${yandex}`);
          //created promise because this step is Async and want to make sure it's complete before calling next step
          return new Promise (
            function(resolve, reject)
            {
              $.ajax({
                url: yandex,
                method: "GET"
              }).then(function(translated) {
                  //some languages use character other than "," causes error with JSON.parse
                  //got around this by replacing "," with "∞" before and after calling the API
                  try
                  {
                    var data = translated.text[0].replace(/∞/g,",");  
                    if (typeof data === 'string')
                    {
                      resolve(JSON.parse(data));
                    }                      
                    else
                    {
                      resolve(data);
                    }
                  }
                  catch(e)
                  {
                    reject(`Error: ${e}`);
                  }
                    
                });
            });
    },
    updateBSObj: function(bSID, keyArray, valArray) {
      var self = this,
          thisBS = bodySystems[bSID]
          sympIndx = -1,
          thisType = "";
      return new Promise(
        function(resolve, reject) {
          if (valArray.length != keyArray.length)
          {
            console.log({Error: `Unable to translate user input for body system ${thisBS.bodySystem[1]}`});
          }
          else
          {
            $.each(keyArray, function(index, keyObj) {
              thisType = keyObj.type;
              if (thisType === 'bS')
              { //Update bodySystems[bSID].bodySystem newVal(2nd position in array)
                thisBS.bodySystem[1] = valArray[index];
              }
              else
              {//Update bodySystems[bSID].symptoms[sympIndx][name or rate or comment] newVal(2nd position in array)
                sympIndx = keyObj.indx;
                if (valArray[index].length > 0)
                {
                  thisBS.symptoms[sympIndx][thisType][1] = valArray[index];
                }
              }
            })
            //resolve({Success: `Translated bSObj (${thisBS.bodySystem[0]})`});
            resolve(thisBS);
          }
        }
      )
    }
  }
      




