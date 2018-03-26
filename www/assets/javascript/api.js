
//Summary of trsl8.callAPI()
  //1) Push non-blank bodySystem and symptom data to oldValsArray.
  //3) Call trnsSection
        //makes an ajax call to the yandex API with the stringified version of oldsVals array
  //4) Call updateBSObj
        //updates current bodySystem object with translated text by looping through keysArray,
        //and replacing 2nd index position of bodySystem[key] with the corresponding translated text 
        //stored in the newValsArray.
  //5) Call creatTable
        //adds a new card with a table translating the users complaint to the DOM

var trsl8 = {
    createTable: function (bSObj, indx) {
      var card = `<div class="data-table data-table-init card">
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
        
      $("#transDisplay").append(card);
      if (indx === (bodySystems.length -1))
      {
          app.preloader.hide();
          $('.page-content').show();
          testCoord();
      }
    },
    callAPI: function(bSID, bSObj) {      
      var self = this, 
          keysArray = [], 
          oldValsArray = [], 
          newValsArray = [];

          //add this bodySystem to the keysArray
          keysArray.push({type: 'bS', indx: `${bSID}`});
          oldValsArray.push(bSObj.bodySystem[0]);

          //loop through symptoms and add keys/values of rated symptoms
          $.each(bSObj.symptoms,function(sID, sObj) {
              if (sObj.rate[0] != "NR")
                {
                  keysArray.push({type: 'name', indx: `${sID}`});
                  oldValsArray.push(sObj.name[0]);
              
                  keysArray.push({type: 'rate', indx: `${sID}`});
                  oldValsArray.push(sObj.rate[0]);

                  if (sObj.comment[0].length > 0)
                  {//only translate comment if it exists
                    keysArray.push({type: 'comment', indx: `${sID}`});
                    oldValsArray.push(sObj.comment[0]);
                  }                      
                }
          });

          //Translate current bS THEN update the global bodySystems Object THEN createTable 
          self.trsl8Section(bSObj,{key: keysArray, old: oldValsArray, new: newValsArray}).then(function(trsl8) {
            self.updateBSObj(trsl8.bSObj, trsl8.arrays.key, trsl8.arrays.new).then(function (data) {
              self.createTable(data, bSID);
            })
          });
      

    },
    trsl8Section: function(obj, data) {
      var self = this,
          yandex = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012`;
          yandex += `&text=${JSON.stringify(data.old).replace(/","/g,'"∞"')}&lang=en-${user.language}&format=plain`;

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
                  var tData = translated.text[0].replace(/∞/g,",").replace(/,,/g,",");
                  try
                  {
                    data.new = JSON.parse(tData);
                  }
                  catch(e)
                  {
                    data.new = tData.replace("[","").replace("]","").split(",")
                    console.log(`May have issues with rendering of (${obj.bodySystem}) due to the following error: ${e}`);
                  }
                  resolve({bSObj:obj, arrays: data});
                });
            });
    },
    updateBSObj: function(thisBS, keysArray, valArray) {
      var self = this,
          sympIndx = -1,
          thisType = "";
      return new Promise(
        function(resolve, reject) {
          if (valArray.length != keysArray.length)
          {
            console.log(`Error: Unable to translate user input for body system ${thisBS.bodySystem[0]}`);
          }
          else
          {
            $.each(keysArray, function(index, keyObj) {
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
            console.log(`Success: Translated bSObj (${thisBS.bodySystem[0]})`);
            resolve(thisBS);
          }
        }
      )
    }
  }
      




