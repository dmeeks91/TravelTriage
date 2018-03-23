
var formBS = [];

$('#submit').on('click', function () { //function that translates when submit is clicked
  event.preventDefault();
  var twoLetterCode = [];
    $$('select[name="languages"] option:checked').each(function () {
      twoLetterCode.push(this.value);
    });     

    
      var selectedIndex = app.form.convertToData('#myForm')
      console.log(selectedIndex)
      for(var propt in selectedIndex){
        formBS.push(bsIndexArray[selectedIndex[propt]])
        console.log(formBS)
    } 
      var test = selectedIndex
        
  var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  + formBS + "&lang=" + "en" + "-" + "es" + "&format=plain"
    $.ajax({
    url: yandex,
    method: "GET"
    }).then(function(translated) {
    $("#results").html(translated.text)
    console.log(translated)
    });           
});

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

