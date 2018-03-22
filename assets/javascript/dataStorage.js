var myApp = new Framework7(); 
var $$ = Dom7; 

$$("#submit").on("click",function(){ 
    // event.preventDefault(); 
 
    localStorage.clear()

        
       var storedData = app.form.storeFormData("myForm"); 
       
       if(storedData) { 
          localStorage.setItem(JSON.stringify("data",storedData)); 
        //   $("#myForm").text(localStorage.getItem("data"))
          console.log(localStorage);
       
          //   var lang= app.form.convertToData("#language-select"); 
        //   localStorage.setItem("language", lang); 
           
       } else { 
          alert("There is no stored data for this form. Please try to change any field.") 
       } 

       var complaints = $("#addComplaint").val();
       localStorage.setItem("complaints",complaints);
       console.log(complaints);
    }); 

 
 
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
 
 

     
 
     
// }); 
 
 
