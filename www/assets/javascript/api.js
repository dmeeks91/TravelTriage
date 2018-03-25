
var formBS = [];
var keyArray =[];
var dataArray = [];
var tableData = [];
      
function translateResults () {
    var formData = app.form.convertToData("#myForm");
    keyArray =[];
    dataArray = [];
    tableData = [];
    $.each(formData, function(key, value) {
      if(value.length >0)
      {
        keyArray.push(key);
        dataArray.push(value);
      }
    })
    
    var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  + JSON.stringify(dataArray) + "&lang=" + "en" + "-" + user.language + "&format=plain"
    $.ajax({
    url: yandex,
    method: "GET"
    }).then(function(translated) {
        translatedArray = JSON.parse(translated.text[0]);
        for (var i = 0; i < dataArray.length; i++)
        {
            tableData.push({type: 'BodySystem', orig: dataArray[i], new: translatedArray[i]});
        }
        console.log(tableData);
    });
};

// Dummy data for translated output
// Need to add symptom, severity, and comment into translation 
var testOutput = {
  0: {
      bodySystem: ["Head", "Cabeza"],
      symptom: {
          0: { 
            name: ["Dizzy", "Mareado"],
            rate: ["Mild", "Templado"],
            comment: ["I fell when walking", "Me caí al caminar"]
          },
          1: {
            name: ["Pain", "Dolor"],
            rate: ["Moderate", "Moderar"],
            comment: ["", ""]
          }
      }   
  },
  1: {
    bodySystem: ["Knee", "Rodilla"],
    symptom: {
        0: { 
          name: ["Pain", "Dolor"],
          rate: ["Severe", "Grave"],
          comment: ["", ""]
        }
    }   
}
}

function transOutput() {
  var card="";
  var currKey = "";
    $.each(testOutput, function(key, value) {
      card += `
      <div class="data-table data-table-init card">
        <div class="card-header">
          <div class="label-cell bsHead">${testOutput[key].bodySystem[1]} (${testOutput[key].bodySystem[0]})</div>
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
                <tbody>
      `;
      currKey = key;
          $.each(testOutput[currKey].symptom, function(key, value) {
            card += `
                  <tr>
                      <td class="label-cell">${testOutput[currKey].symptom[key].name[1]}<br>
                          <div class="symptOld">${testOutput[currKey].symptom[key].name[0]}</div>
                      </td>
                      <td class="label-cell">${testOutput[currKey].symptom[key].rate[1]}<br>
                          <div class="symptOld">${testOutput[currKey].symptom[key].rate[0]}</div>
                      </td>
                      <td class="label-cell">${testOutput[currKey].symptom[key].comment[1]}<br>
                          <div class="symptOld">${testOutput[currKey].symptom[key].comment[0]}</div>
                      </td>
                  </tr>
            `;
          });
      card += `
                </tbody>
            </table>
        </div>
      </div>
      `  
    });
  $("#transDisplay").append(card);
};

