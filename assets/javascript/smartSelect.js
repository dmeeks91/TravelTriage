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
    ],
    symptoms = [
        //An array of all symptoms to be used to populate DDL ... depends on selected BS
        //Dynamically populated with fillSympt function      
    ],
    smartSelects = {},
    //UserComplaint Object this will house all the properties and methods concerning the userComplaint
    usrComplaint = {        
    //Function to dynamically populate bodySystems Array
    fillBS:function() {
        var self = this,
            obj;

        //loop through bsIndexArray to build bodySystem Objects and push said objects to bodySystems[]
        $.each(bsIndexArray, function(key, value){
            obj = { Name: value, ID: key }; //bodySystem objTemplate
            bodySystems.push(obj);            
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
                }
                else
                {
                    //If a Body System is not in the bsIndexArray it will not get added to the symptom obj
                    console.log(`${value.bSArr[i]} is not an existing body system`)
                 }            
            }

            obj = {
                     sName: value.name,
                     sId: key,
                     bSArr: thisBSArr
                 }//symptom objTemplate

            symptoms.push(obj);        
        });

         //console.log('Symptoms Array:');
         //console.log(symptoms);
    },
    //Function to initiate setup. At this point it is only setting up the global variables
    setup: function(){
        /* this.fillBS(); */
        this.fillSympt();
    }, 
    //Create Body System Smart 
    createBSSS: function(){
        //hide FAB
        $('#addComplaint').hide();  

        var index = bodySystems.length;

        //push object to bodySystems[]
        bodySystems.push({
            aTagID: `bSSS_${index}`,
            slctID: `bS_${index}`,
            divID: `bSSS_${index}_symptHolder`
        })

        var thisBS = bodySystems[index],
            self = this,
            options = `<option value="NA" selected>Select a Body System</option>`;
        $.each(bsIndexArray, function(key, value){
            options += `<option value=${key}>${value}</option>`;
        });
        var html = `<div class="card bSCard">
                        <div class="card-content">  
                            <a href="#" class="item-link smart-select" id="${thisBS.aTagID}">
                                <select name="${thisBS.slctID}" id="${thisBS.slctID}">
                                    ${options}
                                </select>
                                <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Body System</div>
                                    <div class="item-after"></div>
                                </div>
                                </div>
                            </a>
                        </div>
                        <div class="list accordion-list" id="${thisBS.divID}"></div>
                    </div>`; 

        $('#bSHolder').append(html);   
        
        app.smartSelect.create({
            closeOnSelect: true,
            el: `#${thisBS.aTagID}`,
            on: {
                closed: function () {
                    if (this.$selectEl[0].value != "NA")
                    {
                        thisBS.slctVal = this.valueEl.innerText
                        self.createSAcrdn(index);
                        //self.createSSS(index, 0);
                    }    
                }
            }
        })
    },    

    //Create Symptom Smart Select I remembered we decided to go with the accordion after already wrote this
    //It isn't being called at the moment 
    //To see it in action uncomment the line in the onClose callback in the createBSSS method
    createSSS: function(bSIndx, sIndx){
        var self = this,
            thisBS = bodySystems[bSIndx],            
            options = `<option value="NA" selected>Select a Symptom</option>`;
        $.each(symIndexArray, function(key, obj){
            if (obj.bSArr.indexOf(thisBS.slctVal) != -1)
            {
                options += `<option value=${key}>${obj.name}</option>`;
            }            
        });
        var html = `<ul>
                        <li>
                            <a href="#" class="item-link smart-select" id="${thisBS.aTagID}_s${sIndx}">
                                <select name="${thisBS.slctID}_s${sIndx}" id="${thisBS.slctID}_s${sIndx}">
                                    ${options}
                                </select>
                                <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title">Symptom</div>
                                    <div class="item-after"></div>
                                </div>
                                </div>
                            </a>
                        </li>
                    </ul>`;        
        $(`#${thisBS.divID}`).append(html);
        thisBS.sSS.push(`${thisBS.slctID}_s${sIndx}`);
    },

    //Create Symptom Accordian
    createSAcrdn: function(bSIndx){
        var sItems = "",
            self = this,
            thisBS = bodySystems[bSIndx];
            $.each(symIndexArray, function(key, obj){
                if (obj.bSArr.indexOf(thisBS.slctVal) != -1)
                {
                    sItems += `<div class="card">
                                    <a class="item-link item-content" href="#">
                                        <div class="card-content ">
                                            <div class="card-content-inner">                                                
                                                ${obj.name}
                                            </div>
                                        </div>
                                    </a>
                                </div>`
                }            
            });            
        var html = `<div class="accordion-item">
                        <a href="#" class="item-content item-link">
                            <div class="item-inner">
                            <div class="item-title">Symptoms</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">
                            ${sItems}
                        </div>
                    </div>`;

        $(`#${thisBS.divID}`).html(html);
        $('#addComplaint').show();

    } 

    //Still need to write code for rate page
 }
    
 $('#addComplaint').on('click', function(){
    usrComplaint.createBSSS();
 })

//Functions to be called when page loads
usrComplaint.setup();
usrComplaint.createBSSS();