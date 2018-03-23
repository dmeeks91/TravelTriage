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
    //UserComplaint Object this will house all the properties and methods concerning the userComplaint
    usrComplaint = {
        //Create Body System Smart Select
        createBSSS: function(){
            //hide FAB
            $('#addComplaint').hide();  

            var index = bodySystems.length;

            //push object to bodySystems[]
            bodySystems.push({
                aTagID: `bSAcrdn_${index}`,
                slctID: `bS${index}`,
                divID: `bS${index}_symptHolder`,
                symptoms: []
            })

            var thisBS = bodySystems[index],
                self = this,
                options = `<option value="NA" selected>Select a Body System</option>`;
            $.each(bsIndexArray, function(key, value){
                options += `<option value="${value.replace(' ', '_')}">${value}</option>`;
            });
            var html = `<div class="bSCard">
                            <div class="list no-hairlines no-hairlines-between">
                                <ul>
                                    <li>
                                        <a href="#" class="item-link smart-select" id="${thisBS.aTagID}">
                                            <select name="${thisBS.slctID}" id="${thisBS.slctID}">
                                                ${options}
                                            </select>
                                            <div class="item-content">
                                                <div class="item-inner bSInner">
                                                    <div class="item-title">Body System</div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="list accordion-list" id="${thisBS.divID}"></div>
                                    </li>                                      
                                <ul>
                            </div>
                        </div>`; 

            $('#bSHolder').append(html);   
            
            app.smartSelect.create({
                closeOnSelect: true,
                el: `#${thisBS.aTagID}`,
                on: {
                    closed: function () {
                        if (this.$selectEl[0].value != "NA")
                        {
                            thisBS.bodySystem = this.valueEl.innerText
                            thisBS.symptoms = [];
                            self.createSAcrdn(index);
                        }    
                    }
                }
            })
        },
        //Create Symptom Accordian
        createSAcrdn: function(bSIndx){
            var sItems = "",
                self = this,
                thisBS = bodySystems[bSIndx];
                sIndx = thisBS.symptoms.length;
                $.each(symIndexArray, function(key, obj){
                    if (obj.bSArr.indexOf(thisBS.bodySystem) != -1)
                    {
                        sItems += `<div class="card">
                                        <input class="text sInput" name="${thisBS.slctID}_s${sIndx}"> 
                                        <input class="text sInput" name="${thisBS.slctID}_s${sIndx}_Cmt">  
                                        <a class="item-link item-content" 
                                            href="/rate/${thisBS.slctID}_s${sIndx}/${obj.name}">                                        
                                            <div class="card-content">
                                                <div class="item-inner"> 
                                                    <div class="item-title">                                               
                                                        ${obj.name}
                                                    </div>
                                                    <div class="item-after">
                                                        <span name="s${sIndx}" class="badge notRated">NR</span>    
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </a>
                                    </div>`
                        thisBS.symptoms.push({elID:`${thisBS.slctID}_s${sIndx}`,rate:"", comment:""});
                        sIndx = thisBS.symptoms.length;
                    }            
                });            
            var html = `<div class="accordion-item indent">
                            <a href="#" class="item-content item-link">
                                <div class="item-inner">
                                <div class="item-title">Symptoms</div>
                                </div>
                            </a>
                            <div class="accordion-item-content center">
                                ${sItems}
                            </div>
                        </div>`;

            $(`#${thisBS.divID}`).html(html);
            $('.sInput').hide();
            $('#addComplaint').show();

        } 
    }
    
 $('#addComplaint').on('click', function(){
    usrComplaint.createBSSS();
 })

//Create a body system smart select on page load
usrComplaint.createBSSS();