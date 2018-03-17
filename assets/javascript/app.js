var $$ = Dom7;



var map;
var infowindow;


function initMap(lat, lng) {
  var pyrmont = {lat: lat, lng: lng};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['hospital']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
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

$('#plus').on('click', function () {
 var addsymp = `<li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label" id="item-title">&#8226;</div>
                    <div class="item-input-wrap">
                      <input type="text" class="symptoms">
                      <span class="input-clear-button"></span>
                    </div>
                  </div>
                </li>`
  $('#add-more').append(addsymp)

})

var symptomArray = [];

$('#submit').on('click', function () {
  event.preventDefault();

  

$("input.symptoms[type=text]").each(function() {
      symptomArray.push($(this).val())
  });
  console.log(symptomArray)

  var selectLang = [];
  $$('select[name="languages"] option:checked').each(function () {
     selectLang.push(this.value);
  });

  var detect = "https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
   + symptomArray.join(" ") + '"'
  $.ajax({
    url: detect,
    method: "GET"
  }).then(function(langdet) {
    console.log(langdet.lang)
  var yandex = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180315T074722Z.24f814dba1dc1456.f7b63ba7e42f3a418e49b4c076e0902d50b35012&text="
  + symptomArray + "&lang=" + langdet.lang + "-" + selectLang + "&format=plain"
  
  $.ajax({
  url: yandex,
  method: "GET"
  }).then(function(translated) {
  console.log(translated);
  var translatedArray = [];
  translatedArray.push(translated.text[0].split(","))
console.log(translatedArray)

for (var key in translatedArray) {
  console.log(key, translatedArray);
  $("#translated").append(`<li>
  ${key, translatedArray[key]}</li>`)

}


  //  var translatedDisp = `
  //   <div class="card">
  //   <div class="card-header"></div>
  //   <div class="card-content no-hairlines">
  //      <div class="card-content-inner">
  //      </div>
  //   </div>
  //   <div class="card-footer"></div>
  //   </div> 
  //   </div>`
  

    var userlocation = $("input.location[type=text]").val()
    var googleCoord = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userlocation + "&key=AIzaSyCnghntSOf7EteeY_c8Ngej65kyVoktDp0"

    $.ajax({
      url: googleCoord,
      method: "GET"
    }).then(function(responseG) {
      var lat = responseG.results[0].geometry.location.lat
      var lng = responseG.results[0].geometry.location.lng
      console.log(lat)
      console.log(lng) 
    console.log(userlocation)
    console.log(googleCoord)



  
    $(".begone").html(" ")
    // $("#translated").append(translatedDisp)
    initMap(lat, lng);
    
})
});
})
})
