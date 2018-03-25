
var formBS = [];
var keyArray =[];
var dataArray = [];
var tableData = [];

// $('#bSBtn').on('click', function () { //function that translates when submit is clicked
  // event.preventDefault();
  // var twoLetterCode = [];
  //   $$('select[name="languages"] option:checked').each(function () {
  //     twoLetterCode.push(this.value);
  //   });     

    
      // var selectedIndex = app.form.convertToData('#myForm')
      // console.log(selectedIndex)

      // $.each(bodySystems, function(key){       
      //   console.log(bodySystems[key].bodySystem)
      //   formBS.push(bodySystems[key].bodySystem)
      // })
      function translateResults () {
      var formData = app.form.convertToData("#myForm");
      keyArray =[];
      dataArray = [];
      tableData = [];
      $.each(formData, function(key, value) {
        //formData[key] = JSON.stringify(value);
        if(value.length >0)
        {
          keyArray.push(key);
          dataArray.push(value);
        }
      })
      //console.log(formData);
      //var stringObject = JSON.stringify(bodySystems[0].symptoms[0]);
            
  // var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  // + JSON.stringify(dataArray) + "&lang=" + "en" + "-" + user.language + "&format=plain"
  //   $.ajax({
  //   url: yandex,
  //   method: "GET"
  //   }).then(function(translated) {
  //   console.log(translated)
  //   });  
    
    var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  +JSON.stringify(dataArray) + "&lang=" + "en" + "-" + user.language + "&format=plain"
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

// Create Translation Table
var testTrans = ['Thanks for seeing me today','Here is my problem list','Body System','Symptom','Severity','Head','Dizzy','Moderate','Head','Light-Headed','Mild/Moderate'];
var headArr = testTrans.slice(0, 5);
var symArr = testTrans.slice(5, testTrans.length);
var groupSize = 3;
var groups = symArr.map( function(e,i){ 
  return i%groupSize===0 ? symArr.slice(i,i+groupSize) : null; 
})
.filter(function(e){ return e; });

var htmlStart = `<div class="data-table data-table-init card">
  <div class="card-header">
    ${headArr[0]}<br>
    ${headArr[1]}
  </div>
  <div class="card-content">
    <table>
      <thead>
        <tr>
          <th class="label-cell">${headArr[2]}</th>
          <th class="label-cell">${headArr[3]}</th>
          <th class="label-cell">${headArr[4]}</th>
        </tr>
      </thead> 
      <tbody>`;

var htmlTable="";
  $.each(groups, function(key, value) {
  htmlTable += `<tr>
            <td class="label-cell">${value[0]}</td>
            <td class="label-cell">${value[1]}</td>
            <td class="label-cell">${value[2]}</td>
          </tr>`;
  });

var htmlEnd = `</tbody>
    </table>
  </div>
</div>`;

$("#transDisplay").html(htmlStart + htmlTable + htmlEnd);

