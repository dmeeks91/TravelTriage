var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

$('#submit').on('click', function () {
  event.preventDefault();
  var twoLetterCode = [];
    $$('select[name="languages"] option:checked').each(function () {
      twoLetterCode.push(this.value);
    });        
  translatedBS = [];
  $$('select[name="bodysystems"] option:checked').each(function () {
  translatedBS.push(this.text);
  });      
  var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  + translatedBS + "&lang=" + "en" + "-" + twoLetterCode + "&format=plain"
    $.ajax({
    url: yandex,
    method: "GET"
    }).then(function(translated) {
    $("#results").html(translated.text)
    });           
});

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

