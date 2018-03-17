$(document).ready(function(){
    //Global Variables
    var bsIndexArray = ['arm', 'leg'],
        symIndexArray = [
            {name: 'broken', bSArr:['leg', 'arm']},
            {name:'sprain', bSArr:['arm','foot']}
        ],
        bodySystems = [
            //An array of all Body Systems to be used to populate DDL
            //Dynamically populated with fillBS function
        ],
        symptoms = [
            //An array of all symptoms to be used to populate DDL ... depends on selected BS
            //Dynamically populated with fillSympt function      
        ];

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
            });

            console.log('Body Systems Array:');
            console.log(bodySystems);
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

            console.log('Symptoms Array:');
            console.log(symptoms);
        },
        //Function to check if an object already exists in an array
        isInArray: function(arr, obj)
        {
            /* At this point I think this function is a nice to have. for the time being just make sure that 
            neither of the global index arrays have duplicate values manually I can forsee duplicates causing issues */
        },
        //Function to initiate setup. At this point it is only setting up the global variables
        setup: function(){
            this.fillBS();
            this.fillSympt();
        }   
    }

    //Functions to be called when page loads
    usrComplaint.setup();
});