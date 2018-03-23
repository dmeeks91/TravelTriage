var myApp = new Framework7();
var $$ = Dom7;


$$("#submit").on("click",function(event){

       var storedData = app.form.getFormData('#my-form');
       if(storedData) {
          localStorage.setItem(JSON.stringify("data",storedData));
       } else {
          alert('Yet there is no stored data for this form. Please try to change any field')
       }
    });

    // $$('.delete-storage-data').on('click', function() {
    //    var storedData = myApp.formDeleteData('myform');
    //    alert('Form data is deleted')
    // });

    // $$('.save-storage-data').on('click', function() {
    //    var storedData = myApp.formStoreData('myform', {
    //       'name': 'William Smith',
    //       'email': 'williamsmith@tutorialspoint.com',
    //       'gender': 'male',
    //       'switch': ['yes'],
    //    });
    //    alert('Form data is replaced, refresh the browser to reflect the changes')
    // });



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



