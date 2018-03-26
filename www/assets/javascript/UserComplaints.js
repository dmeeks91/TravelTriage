//Global Variables
var bsIndexArray = ["General Feeling","Head","Eye","Ear","Nose","Mouth","Neck/Throat","Shoulder","Chest","Back","Arm","Elbow","Wrist","Hand","Fingers","Stomach","Hip","Leg","Knee","Foot","Toes"],
    symIndexArray = [
        {name: 'Bleeding', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']},
        {name: 'Chills', bSArr:['General Feeling']},
        {name: 'Coughing', bSArr:['General Feeling','Mouth','Neck/Throat','Chest','Back']},
        {name: 'Digestive Problems', bSArr:['General Feeling','Stomach']},
        {name: 'Dizzy', bSArr:['General Feeling','Head']},
        {name: 'Dry', bSArr:['General Feeling','Eye','Ear','Nose','Mouth','Neck/Throat','Chest']},
        {name: 'Fever', bSArr:['General Feeling','Head']},
        {name: 'Light-headed', bSArr:['General Feeling','Head']},
        {name: 'Nausea/Vomiting', bSArr:['General Feeling','Stomach']},
        {name: 'Numbness/Tingling', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']},
        {name: 'Pain', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']},
        {name: 'Short of Breath', bSArr:['General Feeling','Neck/Throat','Chest','Back']},
        {name: 'Sick', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']},
        {name: 'Sleepy', bSArr:['General Feeling']},
        {name: 'Sweaty', bSArr:['General Feeling']},
        {name: 'Thirsty', bSArr:['General Feeling','Mouth','Neck/Throat']},
        {name: 'Tired', bSArr:['General Feeling']},
        {name: 'Trouble Breathing', bSArr:['General Feeling','Chest']},
        {name: 'Trouble Hearing', bSArr:['General Feeling','Ear']},
        {name: 'Trouble Seeing', bSArr:['General Feeling','Eye']},
        {name: 'Trouble Sleeping', bSArr:['General Feeling']},
        {name: 'Trouble Smelling', bSArr:['General Feeling','Nose']},
        {name: 'Trouble Speaking', bSArr:['General Feeling','Head','Mouth']},
        {name: 'Trouble Walking', bSArr:['General Feeling','Back','Stomach','Hip','Leg','Knee','Foot','Toes']},
        {name: 'Urinary Problems', bSArr:['General Feeling','Stomach']},
        {name: 'Weak', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']}
    ],
    bodySystems = [
        //An array of all Body Systems to be used to populate DDL
        //Dynamically populated with fillBS function
    ],
    symptoms = [
        //An array of all symptoms to be used to populate DDL ... depends on selected BS
        //Dynamically populated with fillSympt function      
    ],
    maxAppend = 1 //variable used to keep symptom smart-select from appending more than once

    //UserComplaint Object this will house all the properties and methods concerning the userComplaint
var usrComplaint = {        
    //Function to dynamically populate bodySystems Array
    fillBS:function() {
        var self = this,
            obj;

        //loop through bsIndexArray to build bodySystem Objects and push said objects to bodySystems[]
        $.each(bsIndexArray, function(key, value){
            obj = { Name: value, ID: key }; //bodySystem objTemplate
            bodySystems.push(obj);
            $('.bodysystems').append(`<option value=${key}>${value}</option>`); 
        });  
    },
    //Function to dynamically populate symptoms Array
    fillSympt: function() {
        var obj,
            thisBSArr,
            bsIndx;
            
        $.each(symIndexArray, function(key, value) {
            thisBSArr = [];

            for(var i=0; i< value.bSArr.length; i++)
            {
                bsIndx = bsIndexArray.indexOf(value.bSArr[i]);
                if (bsIndx != -1)
                {
                    thisBSArr.push(bsIndx);
                    //console.log(thisBSArr)                        
                }
                else
                {
                    //If a Body System is not in the bsIndexArray it will not get added to the symptom obj
                    console.log(`${value.bSArr[i]} is not an existing body system`)
                 }            
            }

            obj = {
                     Name: value.name,
                     ID: key,
                     BSArr: thisBSArr
                 }//symptom objTemplate

            symptoms.push(obj);        
        });

         //console.log('Symptoms Array:');
         //console.log(symptoms);
    },
    //Function to check if an object already exists in an array
    isInArray: function(arr, obj)
    {
         /* At this point I think this function is a nice to have. for the time being just make sure that 
         neither of the global index arrays have duplicate values manually I can forsee duplicates causing issues */
    },
    location: "",
    setLocation: function() {
        console.log(app.form.convertFormToData('#myForm'));
    }
}
    
    //Functions to be called when page loads
    usrComplaint.setup();
  
    usrComplaint.symptSelect(); // Change this to respond to user selection   