var myApp = new Framework7();
var $$ = Dom7;
var lang= app.form.convertToData("#language-select");

$$("#submit").on("click",function(event){

       var storedData = app.form.getFormData('#my-form');
       if(storedData) {
          localStorage.setItem(JSON.stringify("data",storedData));
          var lang= app.form.convertToData("#language-select");
          localStorage.setItem("language", lang);
          
       } else {
          alert('Yet there is no stored data for this form. Please try to change any field')
       }
    });

        //     $$('.form-to-json').on('click', function() {  
        //     var formData = myApp.formToJSON('#my-form');  
        //     alert(JSON.stringify(formData));  
        //  });  


    // event.preventDefault();

    // localStorage.clear();

    // var userData = app.form.convertToData("#my-form");
    // console.log(userData);
    // var lang= app.form.convertToData("#language-select");
    // // // var location =app.form.convertToData ("#location");
    // // var formData= JSON.stringify(userData,lang);
    // // console.log(formData);

    // // var itemInput = $$('input.symptoms.input-with-value').val();
    // // var userData = JSON.stringify(itemInput,lang);
    // // localStorage.setItem("user",lang);
    // // console.log(localStorage);
    
    // // // console.log(localStorage);

    

    
// });



