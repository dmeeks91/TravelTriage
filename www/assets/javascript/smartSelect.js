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
        {name: 'Nausea, Vomiting', bSArr:['General Feeling','Stomach']},
        {name: 'Numbness, Tingling', bSArr:['General Feeling','Head','Eye','Ear','Nose','Mouth','Neck/Throat','Shoulder','Chest','Back','Arm','Elbow','Wrist','Hand','Fingers','Stomach','Hip','Leg','Knee','Foot','Toes']},
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
    lngSSExists = false,
    user = {
        name:"",
        location:"",
        language:"",
    }
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
                                        <a href="#" class="item-link smart-select notSlctd" id="${thisBS.aTagID}">
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
                openIn: 'popover',
                closeOnSelect: true,
                el: `#${thisBS.aTagID}`,
                on: {
                    close: function () {
                        var addRemove = (this.$selectEl[0].value != "NA") ? "removeClass" : "addClass";
                        $(`#${thisBS.aTagID}`)[addRemove]('notSlctd');    
                    },
                    closed: function () {
                        if (this.$selectEl[0].value != "NA")
                        {
                            thisBS.bodySystem = this.valueEl.innerText
                            thisBS.symptoms = [];
                            self.createSAcrdn(index);
                        }    
                    }
                }
            });
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
                                            href="/ratePage/${thisBS.bodySystem}/${obj.name.toUpperCase()}/${thisBS.slctID}_s${sIndx}/${thisBS.slctID}_s${sIndx}_Cmt/">                                        
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

        }, 
        //Create language Smart Select
        createLngSS: function() {
            if (lngSSExists) return;
            var options = `<option value="NA" selected>Select local language</option>`;
            $.each(languages, function(key, lngObj){
                options += `<option value="${lngObj.value}">${lngObj.name}</option>`;
            });

            var html = `<a href="#" class="item-link smart-select" id="lngSS">
                            <select name="Language">
                                ${options}
                            </select>
                            <div class="item-content">
                                <div class="item-inner lngInput notSlctd">
                                    <div class="item-title item-label">Local Language</div>
                                </div>
                            </div>
                        </a>`; 

            $('#lngSSHolder').append(html);
            lngSSExists = true;
            app.smartSelect.create({
                closeOnSelect: true,
                searchbar: true,
                el: `#lngSS`,
                on: {
                    close: function () {
                        var addRemove = (this.$selectEl[0].value != "NA") ? "removeClass" : "addClass";
                        $('.lngInput')[addRemove]('notSlctd');    
                    }
                }
            });
        },        
        setUser: function() {
            var form = app.form.convertToData('#myInfo');
            user.name = form.Name;
            user.location = form.Location;
            user.language = form.Language;
        },
       
    }

    
    


//Create a body system smart select on page load
//usrComplaint.createBSSS();
/* usrComplaint.createLngSS(); */