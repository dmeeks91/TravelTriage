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

    //Setup Object
    var setup = {
        //Function to populate bodySystems Array
        fillBS:function() {
            var obj;
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
        //Function to initiate setup. At this point it is only setting up the global variables
        init: function(){
            this.fillBS();
            this.fillSympt();
        }   
    }

    //Functions to be called when page loads
    setup.init();
});