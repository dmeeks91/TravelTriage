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
    languages = [
        {name: 'Azerbaijan', value: 'az'}, {name: 'Albanian', value: 'sq'}, {name: 'Amharic', value: 'am'}, 
        {name: 'English', value: 'en'}, {name: 'Arabic', value: 'ar'}, {name: 'Armenian', value: 'hy'}, 
        {name: 'Afrikaans', value: 'af'}, {name: 'Basque', value: 'eu'}, {name: 'Bashkir', value: 'ba'}, 
        {name: 'Belarusian', value: 'be'}, {name: 'Bengali', value: 'bn'}, {name: 'Burmese', value: 'my'}, 
        {name: 'Bulgarian', value: 'bg'}, {name: 'Bosnian', value: 'bs'}, {name: 'Catalan', value: 'ca'}, 
        {name: 'Cebuano', value: 'ceb'}, {name: 'Chinese', value: 'zh'}, {name: 'Croatian', value: 'hr'}, 
        {name: 'Czech', value: 'cs'}, {name: 'Danish', value: 'da'}, {name: 'Dutch', value: 'nl'}, 
        {name: 'Estonian', value: 'et'}, {name: 'Esperanto', value: 'eo'}, {name: 'English', value: 'en'}, 
        {name: 'Finnish', value: 'fi'}, {name: 'French', value: 'fr'}, {name: 'Galician', value: 'gl'}, 
        {name: 'Georgian', value: 'ka'}, {name: 'German', value: 'de'}, {name: 'Greek', value: 'el'}, 
        {name: 'Gujarati', value: 'gu'}, {name: 'Haitian (Creole)', value: 'ht'}, {name: 'Hebrew', value: 'he'}, 
        {name: 'Hill Mari', value: 'mrj'}, {name: 'Hindi', value: 'hi'}, {name: 'Hungarian', value: 'hu'}, 
        {name: 'Icelandic', value: 'is'}, {name: 'Indonesian', value: 'id'}, {name: 'Irish', value: 'ga'},
        {name: 'Italian', value: 'it'}, {name: 'Japanese', value: 'ja'}, {name: 'Javanese', value: 'jv'}, 
        {name: 'Kannada', value: 'kn'}, {name: 'Kazakh', value: 'kk'}, {name: 'Khmer', value: 'km'}, 
        {name: 'Korean', value: 'ko'}, {name: 'Kyrgyz', value: 'ky'}, {name: 'Laotian', value: 'lo'}, 
        {name: 'Latin', value: 'la'}, {name: 'Latvian', value: 'lv'}, {name: 'Lithuanian', value: 'lt'}, 
        {name: 'Luxembourgish', value: 'lb'}, {name: 'Malagasy', value: 'mg'}, {name: 'Malay', value: 'ms'}, 
        {name: 'Malayalam', value: 'mi'}, {name: 'Maltese', value: 'mt'}, {name: 'Macedonian', value: 'mk'}, 
        {name: 'Maori', value: 'ml'}, {name: 'Marathi', value: 'mr'}, {name: 'Mari', value: 'mhr'},
        {name: 'Mongolian', value: 'mn'}, {name: 'Nepali', value: 'ne'}, {name: 'Norwegian', value: 'no'},
        {name: 'Papiamento', value: 'pap'}, {name: 'Persian', value: 'fa'}, {name: 'Polish', value: 'pl'},
        {name: 'Portuguese', value: 'pt'}, {name: 'Punjabi', value: 'pa'}, {name: 'Romanian', value: 'ro'},
        {name: 'Russian', value: 'ru'}, {name: 'Scottish', value: 'gd'}, {name: 'Serbian', value: 'sr'},
        {name: 'Sinhala', value: 'si'}, {name: 'Slovakian', value: 'sk'}, {name: 'Slovenian', value: 'sl'},
        {name: 'Spanish', value: 'es'}, {name: 'Swahili', value: 'sw'}, {name: 'Swedish', value: 'sv'},
        {name: 'Sundanese', value: 'su'}, {name: 'Tagalog', value: 'tl'}, {name: 'Tajik', value: 'tg'},
        {name: 'Tamil', value: 'sl'}, {name: 'Tatar', value: 'tt'}, {name: 'Telugu', value: 'te'},
        {name: 'Thai', value: 'th'}, {name: 'Turkish', value: 'tr'}, {name: 'Udmurt', value: 'udm'},
        {name: 'Ukrainian', value: 'uk'}, {name: 'Urdu', value: 'ur'}, {name: 'Uzbek', value: 'uz'},
        {name: 'Vietnamese', value: 'vi'}, {name: 'Welsh', value: 'cy'}, {name: 'Xhosa', value: 'xh'},
        {name: 'Yiddish', value: 'yi'}, 
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
                    }  
                        self.createSAcrdn(index);
                        //self.createSSS(index, 0);
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