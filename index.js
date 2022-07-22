
        const modulelist = [];
        let maxid = 0;
        const idlist=[]
       

        document.addEventListener("DOMContentLoaded", checkcookies);

        function clearpage(){
            console.log("clearing page");
            modulelist.splice(0, modulelist.length);
            console.log(modulelist);
            let renderedhtml = rendermodules(savemode=false);
            $("#modulebody").html(renderedhtml);
            document.cookie = "";
        }

        
        function checkcookies(){
            console.log(`Current cookies: ${document.cookie}`);
            if(document.cookie!=undefined && document.cookie!=""){

                console.log("cookies found");
                console.log(document.cookie);

            let cookies = document.cookie.split(";");
            // We get the value from the modulelist cookie
            let modulelistcookie = cookies.find(element => element.includes("modulelist"));
            let modulelistcookievalue = modulelistcookie.split("=")[1];
            // if the value in not null, we parse it , else we return an empty array

            if(modulelistcookievalue != ""){
                modulelisttmp = JSON.parse(modulelistcookievalue);
                for (let i = 0; i < modulelisttmp.length; i++) {
                    modulelist.push(modulelisttmp[i]);
                }
            }

            let renderedhtml = rendermodules(savemode=false);

            $("#modulebody").html(renderedhtml);

            }else{

                addpage();


            }

            


        }
        

        function addpage(){

            maxid++;
            idlist.push(maxid);

            modulelist.push({
                        "id" : maxid,
                        "type_module": "newpage"
                    });

            
            let renderedhtml = rendermodules();

            $("#modulebody").html(renderedhtml);


        }


        function moduleswitch(module , id){
            switch (module) {

                case "titre":
                    return {
                        "id" : id,
                        "type_module": "titre",
                        "contenu": ""

                    };

                case "texte":
                    return {
                        "id" : id,
                        "type_module": "texte",
                        "contenu": ""
                    };

                    
                    break;

                case "image":
                    return {
                        "id" : id,
                        "type_module": "image",
                        "url": "",
                        "echelle": ""

                    };

                
                
                    break;

                case "video":
                    return {
                        "id" : id,
                        "type_module": "video",
                        "url": "",
                        "echelle": ""
                    };

                    
                
                    break;


                case "question_mot":
                    return {
                        "id" : id,
                        "type_module": "question_mot",
                        "question": "",
                        "reponse_type": ""
                    };
                    break;

                case "question_ouverte":
                    return {
                        "id" : id,
                        "type_module": "question_ouverte",
                        "question": "",
                        "nombre_lignes": 1,
                        "reponse_type": ""
                    };
                    break;

                case "texte_a_trous":
                    return {
                        "id" : id,
                        "type_module": "texte_a_trous",
                        "question": "",
                        "reponse_type": []
                    };
                    break;

                case "QCU":
                    return {
                        "id" : id,
                        "type_module": "QCU",
                        "question": "",
                        "propositions": [],
                        "reponse_type": ""
                    };
                    break;

                case "QCM":
                    return {
                        "id" : id,
                        "type_module": "QCM",
                        "question": "",
                        "propositions": [],
                        "reponse_type": []
                    };

                    break;

                case "QCM_images":
                    return {
                        "id" : id,
                        "type_module": "QCM_images",
                        "question": "",
                        "propositions": [],
                        "reponse_type": []
                       }

                    break;

                case "infobox":
                    return {
                        "id" : id,
                        "type_module": "infobox",
                        "contenu": ""
                    }

                    break;

                case "carrousel":
                    return {
                        "id" : id,
                        "type_module": "carrousel",
                        "liste_url": [],
                        "echelle": 0.6
                    }

                    break; 
                           
                           


                case "colonnes_a_remplir":
                    return {
                        "id" : id,
                        "type_module": "colonnes_a_remplir",
                        "question": "",
                        "colonnes": [],
                        "nombre_lignes": 5
                    };
                    break;

                case "dessin":

                    return {
                        "id" : id,
                        "type_module": "dessin",
                        "question": "",
                        "image_arriere_plan": "",
                        "echelle": 1,
                        "reponse_type": ""
                    };
                    break;

                case "prise_photo":

                    return {
                        "id" : id,
                        "type_module": "prise_photo",
                        "contenu": "",
                        "nombre_max_images": 5

                    };
                    break;

                case "prise_video":
                        
                    return {
                            "id" : id,
                            "type_module": "prise_video",
                            "contenu": ""
                        };
                        break;


                case "calculatrice":
                    return {
                        "id" : id,
                        "type_module": "calculatrice"
                    };
                    break;

                case "chronometre":

                    return {
                        "id" : id,
                        "type_module": "chronometre"
                    };
                    break;
                
                case "sondage":
                    return {
                        "id" : id,
                        "type_module": "sondage",
                        "question": "",
                        "propositions": []
                    };
                    break;

                case "resultat_sondage":
                    return {
                        "id" : id,
                        "type_module": "resultat_sondage"
                    };
                    break;

                case "synthese":
                    return {
                        "id" : id,
                        "type_module": "synthese",
                        "question": "",
                        "nombre_lignes": 1
                    };
                    break;

                case "resume_atelier":
                    return {
                        "id" : id,
                        "type_module": "resume_atelier"
                    };
                    break;

                case "question_magnetometre":
                    return {
                        "id" : id,
                        "type_module": "question_magnetometre",
                        "question": "",
                        "reponse_type": ""
                    };
                    break;

                case "question_deplacement":
                    return {
                        "id" : id,
                        "type_module": "question_deplacement",
                        "question": "",
                        "reponse_type": ""
                    };
                    break;

                case "question_gyroscope":
                    return {
                        "id" : id,
                        "type_module": "question_gyroscope",
                        "question": "",
                        "reponse_type": ""
                    };
                    break;

                case "question_accelerometre":
                    return {
                        "id" : id,
                        "type_module": "question_accelerometre",
                        "question": "",
                        "reponse_type": ""
                    };
                    break;

                case "glisser_deposer_cible":
                    return {
                        "id" : id,
                        "type_module": "glisser_deposer_cible",
                        "question": "place les éléments dans les cases",
                        "image_arriere_plan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2O7X6TvRBcplG5XIFq1F8VuUeBUZQ6q-Xw&usqp=CAU",
                        "echelle": 0.6,
                        "cibles": [ "(30,20)", "(60, 80)" ],
                        "objets": [
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(100,0)",
                        "echelle": 0.6,
                        }
                        ]
                       };
                    break;

                case "glisser_deposer_zone":
                    return {
                        "id" : id,
                        "type_module": "glisser_deposer_zone",
                        "question": "place les éléments dans les zones",
                        "image_arriere_plan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2O7X6TvRBcplG5XIFq1F8VuUeBUZQ6q-Xw&usqp=CAU",
                        "echelle": 0.6,
                        "zones": [ "(90%,100%)", "(10%, 100%)" ],
                        "objets": [
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(100,0)",
                        "echelle": 0.6
                        }
                        ]
                    };




                case "newpage":
                    return {
                        "id" : id,
                        "type_module": "newpage"
                    };
                    break;
                
                default:
                    return "nope";
                    break;


            }


        }



        
        // add a module to the modulelist
        function addmodule() {

            let module = $("#modulechoice").val();

            maxid++;
            idlist.push(maxid);

            let moduleres = moduleswitch(module, maxid);

            if (moduleres != "nope") {
                modulelist.push(moduleres);
            }

            let renderedhtml = rendermodules();

            $("#modulebody").html(renderedhtml);
            
        }

        function removeblock(id){
            let index = modulelist.findIndex(x => x.id == id);
            modulelist.splice(index, 1);
            let renderedhtml = rendermodules();
            $("#modulebody").html(renderedhtml);
        }

        function addtext(id, text){
            let textarea = $("."+id+"zone");
            textarea.val(textarea.val()+text);

        }


        function rendermodules(savemode = true){

            let modulehtml = "";
            let pages = 1;

            modulelist.forEach(element => {

                // For each module we add the matching html to the modulehtml variable

                switch (element.type_module) {

                    case "texte":

                        if(savemode){

                        // We firstly save the value of the textarea already displayed in the module
                        let textarea = $("."+element.id+"zone");
                        element.contenu = textarea.val();

                        }

                        if(element.contenu == undefined){
                            element.contenu = "";
                        }


                        modulehtml += `<div class="module">
                                        <div class="module_header">
                                            <h3>Texte</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                  
                                        <div class="module_content">
                                            <div class="form-group">
            
                                                <textarea class="form-control ${element.id}zone" id="text" rows="3">${element.contenu.replace(/\"/g,"\'\'")}</textarea>
                                                <div class="selectionbar">
                                                    
                                                        
                                                            <button class="formatingbutton" onclick="addtext('${element.id}','** bold **')">𝙗</button>
                                                            <button class="formatingbutton nextbut" onclick="addtext('${element.id}','_ italic _')">𝘪</button>
                                                            <button class="formatingbutton nextbut" onclick="addtext('${element.id}','•')">•</button>
                                                        
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>
                            
                                    </div>

                                    </div>`;

                    
                        break;

                    case "infobox":

                        if(savemode){

                        // We firstly save the value of the textarea already displayed in the module
                        let textarea = $("."+element.id+"zone");
                        element.contenu = textarea.val();

                        }

                        if(element.contenu == undefined){
                            element.contenu = "";
                        }

                        modulehtml += `<div class="module">
                                        <div class="module_header">
                                            <h3>Infobox</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>

                                        <div class="module_content">

                                            <div class="form-group">    
                                                <textarea class="form-control ${element.id}zone" id="text" rows="3">${element.contenu.replace(/\"/g,"\'\'")}</textarea>

                                                <div class="selectionbar">

                                                    <button class="formatingbutton" onclick="addtext('${element.id}','** bold **')">𝙗</button>

                                                    <button class="formatingbutton nextbut" onclick="addtext('${element.id}','_ italic _')">𝘪</button>

                                                    <button class="formatingbutton nextbut" onclick="addtext('${element.id}','•')">•</button>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>

                                    </div>

                                    </div>`;

                        break;

                    case "titre":

                        if(savemode){

                        // We firstly save the value of the textarea already displayed in the module
                        let textarea = $("."+element.id+"zone");
                        element.contenu = textarea.val();

                        }

                        if(element.contenu == undefined){
                            element.contenu = "";
                        }

                        modulehtml += `<div class="module">
                                        <div class="module_header">
                                            <h3>Titre</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>

                                        </div>


                                        <div class="module_content">

                                            <div class="form-group">

                                                <textarea class="form-control ${element.id}zone" id="text" rows="1">${element.contenu.replace(/\"/g,"\'\'")}</textarea>

                                                <div class="selectionbar">

                                                    <button class="formatingbutton" onclick="addtext('${element.id}','** bold **')">𝙗</button>

                                                    <button class="formatingbutton nextbut" onclick="addtext('${element.id}','_ italic _')">𝘪</button>

                                                    <button class="formatingbutton nextbut" onclick="addtext('${element.id}','•')">•</button>

                                                </div>

                                            </div>

                                        </div>

                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>

                                        <tr></table>


                                    </div>

                                    </div>`;


                        break;


                        





                        


                    case "image":

                        if(savemode){

                        let image = $("."+element.id+"zone");
                        let echelleimage = $("."+element.id+"echelle");
                        element.url = image.val();
                        element.echelle = parseFloat(echelleimage.val());
                        let toinsert = "";

                        }

                        // if echelle is undefined we set it to 1
                        if(element.echelle == undefined){
                            element.echelle = 1;
                        }

                        if(element.url == undefined){
                            element.url = "";
                        }

                        if (isValidHttpUrl(element.url) && element.echelle > 0) {
                            toinsert = `<img src="${element.url}" style="width: ${element.echelle * 100}%">`;
                        }else{
                            toinsert = `image non valide (ou echelle nul)`;
                        }


                        modulehtml += `<div class="module">
                                        <div class="module_header">
                                            <h3>Image</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                                            <div class="form-group">
                                                <label for="image">Image</label>
                                                <input type="text" value="${element.url}" class="form-control ${element.id}zone" id="image" placeholder="Lien de l'image">
                                                Echelle de 1 = taille standard
                                                <input type="text "value="${element.echelle}" class="form-control ${element.id}echelle" id="echelle" placeholder="Echelle de l'image">
                                            </div>
                                            <div class="${element.id}image">
                                                ${toinsert}
                                            </div>
                                        </div>

                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>
                            
                                    </div>
                                    </div>`;

                        

                        
                     
                        break;

                    case "video":

                        if(savemode){

                        let video = $("."+element.id+"zone");
                        let echellevideo = $("."+element.id+"echelle");
                        element.url = video.val();
                        element.echelle = parseFloat(echellevideo.val());

                        }

                        // if echelle is undefined we set it to 1
                        if(element.echelle == undefined){
                            element.echelle = 1;
                        }

                        if(element.url == undefined){
                            element.url = "";
                        }

                        let toinsertvideo = "";


                        if (isValidHttpUrl(element.url) && element.echelle > 0) {
                            toinsertvideo = `<video width="${element.echelle * 100}" controls>
                                        <source src="${element.url}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>`;
                        }else{
                            toinsertvideo = `video non valide (ou echelle nul)`;
                        }


                        modulehtml += `<div class="module">
                                        <div class="module_header">
                                            <h3>Video</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                                            <div class="form-group">
                                                <label for="video">Video</label>
                                                <input type="text" class="form-control ${element.id}zone" value="${element.url}" id="video" placeholder="Lien de la video">
                                                <input type="text "value="${element.echelle}" class="form-control ${element.id}echelle" id="echelle" placeholder="Echelle de la video">
                                            </div>

                                            <div class="${element.id}video">
                                                ${toinsertvideo}
                                            </div>

                                        </div>

                                        <div class="reposition">
                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>
                            
                                    </div>
                                    </div>`;

                               
                        break;

                    

                    case "question_mot":

                        if(savemode){
                        let questionmot = $("."+element.id+"question");
                        let reponsemot = $("."+element.id+"reponse");
                        element.question = questionmot.val();
                        element.reponse_type = reponsemot.val();
                        }

                        if(element.reponse_type == undefined){
                            element.reponse_type = "";
                        }

                        if(element.question == undefined){
                            element.question = "";
                        }

                        modulehtml += `<div class="module question_mot">
                            <div class="module_header">
                                            <h3>Question mot</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                            </div>
                            <div class="module_content">
                        <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                        <div class="reponse">
                        <input type="text" class="form-control ${element.id}reponse" id="reponse" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type">
                        </div>
                        </div>

                        <div class="reposition">

                        <table><tr>
                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                        <tr></table>
            
                    </div>
                        </div>`;

                       
                        break;

                    case "question_ouverte":

                        if(savemode){

                        let questionouverte = $("."+element.id+"questionouverte");
                        let nb_ligne = $("."+element.id+"nbligne");
                        let reponse_type = $("."+element.id+"zone");
                        element.question = questionouverte.val();
                        element.nombre_lignes = parseFloat(nb_ligne.val());
                        element.reponse_type = reponse_type.val();

                        }

                        if(element.question == undefined){
                            element.question = "";
                        }

                        if(element.reponse_type == undefined){
                            element.reponse_type = "";
                        }


                        modulehtml += `<div class="module question_ouverte">

                            <div class="module_header">
                                            <h3>Question ouverte</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                            </div>

                            <div class="module_content">

                        <div class="question">
                        <input type="text" class="form-control ${element.id}questionouverte" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question ouverte">
                        </div>
                        <input type="number" class="${element.id}nbligne" value="${element.nombre_lignes}" name="quantity" min="1">
                        
                        <div class="reponsetype">
                        <textarea class="reponse_ouverte ${element.id}zone" placeholder="réponse type">${element.reponse_type.replace(/\"/g,"\'\'")}</textarea>
                        </div>
                        </div>

                        <div class="reposition">

                        <table><tr>
                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                        <tr></table>
            
                    </div>

                        </div>`;

                       
                        break;

                    case "texte_a_trous":

                        if(savemode){
                            let textatrous = $("."+element.id+"question");
                            let reponsetype = $("."+element.id+"propositions");
                            element.question = textatrous.val();
                            try{
                            element.reponse_type = reponsetype.val().split(";");
                            }catch(e){
                                element.reponse_type = [];
                            }
                        }

                        //if propositions is undefined, set it to an empty array
                        if(element.reponse_type == undefined){
                            element.reponse_type = [];
                        }

                        if(element.question == undefined){
                            element.question = "";
                        }

                        if(element.reponse_type == undefined){
                            element.reponse_type = "";
                        }

                 
                    

                        modulehtml += `<div class="module texte_a_trous">

                            <div class="module_header">
                                            <h3>Texte à trous</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>

                                        <div class="module_content">

                        <div class="question">
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace('"',"\'\'")}" placeholder="texte a trous : %s <- pour les trous">
                        </div>
                        <div class="reponsetype">
                            Chaque réponse doit être séparée par un point-virgule ";"
                            <input type="text" class="form-control ${element.id}propositions" id="proposition" value="${element.reponse_type.join(";").replace(/\"/g,"\'\'")}" placeholder="Propositions">
                        </div>
                        </div>

                        <div class="reposition">

                        <table><tr>
                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                        <tr></table>
                    </div>

                        </div>`;

                      
                        break;

                    case "QCU":
                        if(savemode){
                            let questioncu = $("."+element.id+"question");
                            let propositionscu = $("."+element.id+"propositions");
                            let reponsetypecu = $("."+element.id+"reponse_type");
                            element.question = questioncu.val();
                            try{
                            element.propositions = propositionscu.val().split(";");
                            }catch(e){
                            element.propositions = [];
                            }
                            element.reponse_type = reponsetypecu.val();
                    }

                    if(element.question == undefined){
                            element.question = "";
                        }

                    if(element.propositions == undefined){
                            element.propositions = [];
                        }

                    if(element.reponse_type == undefined){
                            element.reponse_type = "";
                        }
                  

                        modulehtml += `<div class="module QCU">

                            <div class="module_header">
                                            <h3>QCU</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                            </div>

                            <div class="module_content">


                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Propositions (";" comme séparateur)
                            <input class="form-control ${element.id}propositions" id="proposition" value="${element.propositions.join(";").replace(/\"/g,"\'\'")}" placeholder="Propositions"></textarea>
                            Réponse Type (1 seule réponse)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type">
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                
                        </div>
                    
                        </div>`;

                        
                        break;

                    case "QCM":

                        if(savemode){

                        let questioncm = $("."+element.id+"question");
                        let propositionscm = $("."+element.id+"propositions");
                        let reponsetypecm = $("."+element.id+"reponse_type");
                        element.question = questioncm.val();
                        try{
                            element.propositions = propositionscm.val().split(";");
                        }catch(e){
                                element.propositions = [];
                        }
                        try{
                        element.reponse_type = reponsetypecm.val().split(";");
                        }catch(e){
                            console.log("Warning: spliting undefined reponse_type QCM");
                            element.reponse_type = [];
                        }
                        }
                    

                    if(element.reponse_type == undefined){
                        element.reponse_type = [];
                    }

                    if(element.propositions == undefined){
                        element.propositions = [];
                    }

                    

                    if(element.question == undefined){
                        element.question = "";
                    }

            


                

                        modulehtml += `<div class="module QCM">

                            <div class="module_header">
                                            <h3>QCM</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                            </div>
                            <div class="module_content">

                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Propositions (";" comme séparateur)
                            <input class="form-control ${element.id}propositions" id="proposition" value="${element.propositions.join(";").replace(/\"/g,"\'\'")}" placeholder="Propositions"></textarea>
                            Réponse Type (";" comme séparateur)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.join(";").replace(/\"/g,"\'\'")}" placeholder="Réponse type">
                            </div>


                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                
                        </div>

                        </div>`;

                        
                        break;

                        case "QCM_images":

                            if(savemode){
    
                            let questioncm = $("."+element.id+"question");
                            let propositionscm = $("."+element.id+"propositions");
                            let reponsetypecm = $("."+element.id+"reponse_type");
                            element.question = questioncm.val();
                            try{
                                element.propositions = propositionscm.val().split(";");
                            }catch(e){
                                    element.propositions = [];
                            }
                            try{
                            element.reponse_type = reponsetypecm.val().split(";");
                            }catch(e){
                                console.log("Warning: spliting undefined reponse_type QCM");
                                element.reponse_type = [];
                            }
                            }
                        
    
                        if(element.reponse_type == undefined){
                            element.reponse_type = [];
                        }
    
                        if(element.propositions == undefined){
                            element.propositions = [];
                        }
    
                        
    
                        if(element.question == undefined){
                            element.question = "";
                        }
    
                
    
    
                    
    
                            modulehtml += `<div class="module QCM Images">
    
                                <div class="module_header">
                                                <h3>QCM</h3>
                                                <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                </div>
                                <div class="module_content">
    
                                Question
                                <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                                Propositions (";" comme séparateur)
                                <input class="form-control ${element.id}propositions" id="proposition" value="${element.propositions.join(";").replace(/\"/g,"\'\'")}" placeholder="urls images (separé par ;)"></textarea>
                                Réponse Type (";" comme séparateur)
                                <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.join(";").replace(/\"/g,"\'\'")}" placeholder="Réponse type (urls ;)">
                                </div>
    
    
                                <div class="reposition">
    
                                <table><tr>
                                <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                <tr></table>
                    
                            </div>
    
                            </div>`;
    
                            
                            break;

                        case "carrousel":


                            if(savemode){

                            let echelle = $("."+element.id+"echelle");
                            element.liste_url = urls.val().split(";");

                            }

                            if(element.liste_url == undefined){

                                element.liste_url = [];

                            }

                            if(element.echelle == undefined){

                                element.echelle = 0.6;

                            }

                            modulehtml += `<div class="module carrousel">


                                <div class="module_header">

                                                <h3>Carrousel</h3>

                                                <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>

                                </div>

                                <div class="module_content">

                                Liste des images (urls séparées par ;)

                                <input class="form-control ${element.id}urls" id="urls" value="${element.liste_url.join(";").replace(/\"/g,"\'\'")}" placeholder="urls images (separées par ;)">

                                Echelle (0.6 par défaut)

                                <input type="text" class="form-control ${element.id}echelle" id="echelle" value="${element.echelle}" placeholder="Echelle">

                                </div>

                                <div class="reposition">

                                <table><tr>

                                <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>

                                <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>

                                <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>

                                <tr></table>

                            </div>


                            </div>`;

                
                        break;


                    case "colonnes_a_remplir":
                    if(savemode){
                        let questioncol = $("."+element.id+"question");
                        let colonnes = $("."+element.id+"colonne");
                        let nblignes = $("."+element.id+"nbligne");
                        element.question = questioncol.val();
                        try{
                            element.colonnes = colonnes.val().split(";");
                        }catch(e){
                            element.colonnes = [];
                        }
                        element.nombre_lignes = parseFloat(nblignes.val());
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }

                    if(element.nombre_lignes == undefined){
                        element.nombre_lignes = 1;
                    }

                    if(element.colonnes == undefined){
                        element.colonnes = [];
                    }
                        

                        modulehtml += `<div class="module colonnes_a_remplir">

                            <div class="module_header">
                                            <h3>Colonnes à remplir</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>

                            <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Colonnes (";" comme séparateur)
                            <input class="form-control ${element.id}colonne" id="colonnes" value="${element.colonnes.join(";").replace(/\"/g,"\'\'")}" placeholder="Colonnes">
                            Nombre de lignes
                            <input type="number" class="${element.id}nbligne" value="${element.nombre_lignes}" name="quantity" min="1">
                            </div>

                            <div class="reposition">
                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                
                        </div>

                        
                        </div>`;

                       
                        break;

                    case "dessin":
                    if(savemode){
                        let questiondessin = $("."+element.id+"question");
                        let urlfond = $("."+element.id+"url");
                        let reponsetypedessin = $("."+element.id+"reponse_type");
                        let echelledessin = $("."+element.id+"echelle");
                        element.question = questiondessin.val();
                        element.image_arriere_plan = urlfond.val();
                        element.reponse_type = reponsetypedessin.val();
                        element.echelle = echelledessin.val()/100;
                    }

                    let backimage = "";
                    //if the picture is valid , and the scale set , we draw it
                    if(isValidHttpUrl(element.image_arriere_plan) && element.echelle != 0){
                        backimage = `<img src="${element.image_arriere_plan}" style="width:${element.echelle*100}%;">`;
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }

                    if(element.image_arriere_plan == undefined){
                        element.image_arriere_plan = "https://api.planet.ad1838.ovh/media/thumbnail/blank.webp";
                    }

                    if(element.image_arriere_plan == ""){
                        try{
                            // We delete the image_arriere_plan if it's empty
                            delete element.image_arriere_plan;

                        }catch(e){
                            element.image_arriere_plan = "https://api.planet.ad1838.ovh/media/thumbnail/blank.webp";
                        }
                    }

                    if(element.reponse_type == undefined){
                        element.reponse_type = "";
                    }



                        modulehtml += `<div class="module dessin">

                            <div class="module_header">
                                            <h3>Dessin</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                            </div>
                            <div class="module_content">

                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Url image de fond
                            <input type="text" class="form-control ${element.id}url" id="url" value="${element.url}" placeholder="Url image de fond">
                            echelle de la figure (en %)
                            <input type="number" class="${element.id}echelle" value="${element.echelle*100}" name="quantity" min="1">
                            réponse type (1 seule réponse) (url)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type}" placeholder="Réponse type (URL)">
                            ${backimage}
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                    
                    </div>



                        </div>`;

                      
                        break;

                    /*
                                    case "prise_photo":

                    return {
                        "id" : id,
                        "type_module": "prise_de_photo",
                        "contenu": "",
                        "nombre_max_images": 5

                    };
                    break;
                    */
                    
                    case "prise_photo":
                    if(savemode){
                        let questionphoto = $("."+element.id+"zone");
                        element.contenu = questionphoto.val();
                        element.nombre_max_images = $("."+element.id+"nombre_max_images").val();


                    }

                    if(element.contenu == undefined){
                        element.contenu = "";

                    }

                        modulehtml += `<div class="module prise_photo">

                            <div class="module_header">
                                            <h3>Prise de photo</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>

                            <div class="module_content">
                            Texte de la prise de photo
                            <input type="text" class="form-control ${element.id}zone" id="prisephoto" value="${element.contenu.replace(/\"/g,"\'\'")}" placeholder="Remarque">

                            <input type="number" class="${element.id}nombre_max_images" value="${element.nombre_max_images}" name="quantity" min="1">
                            
                      
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                    
                    </div>
                        </div>`;

                       
                        break;

                    case "prise_video":
                    if(savemode){
                        let questionvideo = $("."+element.id+"zone");
                        element.contenu = questionvideo.val();
                    }

                    if(element.contenu == undefined){
                        element.contenu = "";

                    }

                        modulehtml += `<div class="module prise_video">

                            <div class="module_header">
                                            <h3>Prise vidéo</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                            
                            <div class="module_content">

                                Texte de la prise de vidéo
                                <input type="text" class="form-control ${element.id}zone" id="prisevideo" value="${element.contenu.replace(/\"/g,"\'\'")}" placeholder="Remarque">


                                
                            </div>

                            <div class="reposition">
                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                    
                    </div>

           
                        </div>`;

                        
                        break;

                    case "question_magnetometre":
                    if(savemode){
                        let questionmagnetometre = $("."+element.id+"question");
                        let reponsetypemagnetometre = $("."+element.id+"reponse_type");
                        element.question = questionmagnetometre.val();
                        element.reponse_type = reponsetypemagnetometre.val();
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }
                    if(element.reponse_type == undefined){
                        element.reponse_type = "";
                    }

                        modulehtml += `<div class="module question_magnetometre">
                            <div class="module_header">
                                            <h3>Question magnetomètre</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Réponse type (1 seule réponse) (url)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type (URL)">
                            </div>

                            <div class="reposition">
                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            
                            </div>

                        </div>`;
                       
                        break;

                    case "question_deplacement":
                    if(savemode){
                        let questiondeplacement = $("."+element.id+"question");
                        let reponsetypedeplacement = $("."+element.id+"reponse_type");
                        element.question = questiondeplacement.val();
                        element.reponse_type = reponsetypedeplacement.val();
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }

                    if(element.reponse_type == undefined){
                        element.reponse_type = "";
                    }

                        modulehtml += `<div class="module question_deplacement">
                            <div class="module_header">
                                            <h3>Question déplacement</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Réponse type (1 seule réponse) (url)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type (URL)">
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            </div>

                        </div>`;
                       
                        break;
                    
                    case "question_gyroscope":
                    if(savemode){
                        let questiongyroscope = $("."+element.id+"question");
                        let reponsetypegyroscope = $("."+element.id+"reponse_type");
                        element.question = questiongyroscope.val();
                        element.reponse_type = reponsetypegyroscope.val();
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }

                    if(element.reponse_type == undefined){
                        element.reponse_type = "";
                    }

                        modulehtml += `<div class="module question_gyroscope">
                            <div class="module_header">
                                            <h3>Question gyroscope</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Réponse type (1 seule réponse) (url)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type (URL)">
                            </div>

                            <div class="reposition">
                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            
                            </div>
                        </div>`;
                       
                        break;

                    case "question_accelerometre":
                    if(savemode){
                        let questionaccelerometre = $("."+element.id+"question");
                        let reponsetypeaccelerometre = $("."+element.id+"reponse_type");
                        element.question = questionaccelerometre.val();
                        element.reponse_type = reponsetypeaccelerometre.val();
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }
                    if(element.reponse_type == undefined){
                        element.reponse_type = "";
                    }
                        modulehtml += `<div class="module question_accelerometre">
                            <div class="module_header">
                                            <h3>Question acceleromètre</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                            Réponse type (1 seule réponse) (url)
                            <input type="text" class="form-control ${element.id}reponse_type" id="reponse_type" value="${element.reponse_type.replace(/\"/g,"\'\'")}" placeholder="Réponse type (URL)">
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            
                            </div>
                        </div>`;
                       
                        break;


                    /*

                    {
                        "id" : id,
                        "type_module": "glisser_deposer_cible",
                        "question": "place les éléments dans les cases",
                        "image_arriere_plan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2O7X6TvRBcplG5XIFq1F8VuUeBUZQ6q-Xw&usqp=CAU",
                        "echelle": 0.6,
                        "cibles": [ "(30,20)", "(60, 80)" ],
                        "objets": [
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(0,0)",
                        "echelle": 0.6
                        },
                        {
                        "image": "exemple.png",
                        "position_initiale": "(100,0)",
                        "echelle": 0.6,
                        }
                        ]
                       }

                    */

                    case "glisser_deposer_cible":
                        // question, image_arriere_plan, echelle, objets (liste)
                        if(savemode){
                            let questionglisserdeposercible = $("."+element.id+"question");
                            let imagearriereplanglisserdeposercible = $("."+element.id+"image_arriere_plan");
                            let echelleglisserdeposercible = $("."+element.id+"echelle");
                            let objetsglisserdeposercible = $("."+element.id+"objets");
                            element.question = questionglisserdeposercible.val();
                            element.image_arriere_plan = imagearriereplanglisserdeposercible.val();
                            element.echelle = parseFloat(echelleglisserdeposercible.val());
                            // We convert the json into a dictionary
                            try{
                            element.objets = JSON.parse(objetsglisserdeposercible.val());
                            }catch(e){
                                element.objets = [];
                            }
                           
                        }

                        if(element.question == undefined){
                            element.question = "";
                        }

                        if(element.image_arriere_plan == undefined){
                            element.image_arriere_plan = "";
                        }

                        if(element.image_arriere_plan == ""){
                            try{
                                // We delete the image_arriere_plan if it's empty
                                delete element.image_arriere_plan;

                            }catch(e){
                                element.image_arriere_plan = "https://api.planet.ad1838.ovh/media/thumbnail/blank.webp";
                            }
                        }

                        if(element.echelle == undefined){
                            element.echelle = 1;
                        }
                        modulehtml += `<div class="module glisser_deposer_cible">
                            <div class="module_header">
                                            <h3>Glisser déposer cible</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question}" placeholder="Question">
                            Image arrière plan
                            <input type="text" class="form-control ${element.id}image_arriere_plan" id="image_arriere_plan" value="${element.image_arriere_plan}" placeholder="Image arrière plan">
                            Echelle
                            <input type="text" class="form-control ${element.id}echelle" id="echelle" value="${element.echelle}" placeholder="Echelle">
                            Objets (liste)
                            <textarea type="text" class="form-control ${element.id}objets" id="objets" value="${element.objets}" placeholder="Objets">

                            [
                                {
                                "image": "exemple.png",
                                "position_initiale": "(0,0)",
                                "echelle": 0.6
                                },
                                {
                                "image": "exemple.png",
                                "position_initiale": "(0,0)",
                                "echelle": 0.6
                                },
                                {
                                "image": "exemple.png",
                                "position_initiale": "(100,0)",
                                "echelle": 0.6,
                                }
                            ]
                            
                            
                            
                            
                            
                            </textarea>
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            
                            </div>
                        </div>`;

                        break;

                    case "glisser_deposer_zone":
                        // question, image_arriere_plan, echelle, objets (liste)
                        if(savemode){
                            let questionglisserdeposerzone = $("."+element.id+"question");
                            let imagearriereplanglisserdeposerzone = $("."+element.id+"image_arriere_plan");
                            let echelleglisserdeposerzone = $("."+element.id+"echelle");
                            let objetsglisserdeposerzone = $("."+element.id+"objets");
                            element.question = questionglisserdeposerzone.val();
                            element.image_arriere_plan = imagearriereplanglisserdeposerzone.val();
                            element.echelle = parseFloat(echelleglisserdeposerzone.val());
                            try{
                                element.objets = JSON.parse(objetsglisserdeposercible.val());
                                }catch(e){
                                    element.objets = [];
                            }
                        }

                        if(element.question == undefined){
                            element.question = "";
                        }
                        if(element.image_arriere_plan == undefined){
                            element.image_arriere_plan = "";
                        }

                        if(element.image_arriere_plan == ""){
                            try{
                                // We delete the image_arriere_plan if it's empty
                                delete element.image_arriere_plan;

                            }catch(e){
                                element.image_arriere_plan = "https://api.planet.ad1838.ovh/media/thumbnail/blank.webp";
                            }
                        }

                        if(element.echelle == undefined){
                            element.echelle = 1;
                        }

                        modulehtml += `<div class="module glisser_deposer_zone">
                            <div class="module_header">
                                            <h3>Glisser déposer zone</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                                        <div class="module_content">
                            Question
                            <input type="text" class="form-control ${element.id}question" id="question" value="${element.question}" placeholder="Question">
                            Image arrière plan
                            <input type="text" class="form-control ${element.id}image_arriere_plan" id="image_arriere_plan" value="${element.image_arriere_plan}" placeholder="Image arrière plan">
                            Echelle
                            <input type="text" class="form-control ${element.id}echelle" id="echelle" value="${element.echelle}" placeholder="Echelle">
                            Objets (liste)
                            <textarea type="text" class="form-control ${element.id}objets" id="objets" value="${element.objets}" placeholder="Objets">
                            
                            [
                                {
                                "image": "exemple.png",
                                "position_initiale": "(0,0)",
                                "echelle": 0.6
                                },
                                {
                                "image": "exemple.png",
                                "position_initiale": "(0,0)",
                                "echelle": 0.6
                                },
                                {
                                "image": "exemple.png",
                                "position_initiale": "(100,0)",
                                "echelle": 0.6
                                }
                            ]

                            </textarea>
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                            
                            </div>
                        </div>`;

                        break;

                    case "calculatrice":
                        modulehtml += `<div class="module calculatrice">
                            <div class="module_header">
                                            <h3>Calculatrice</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div> 


                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>
                                        
                                        </div>
                                        
                                        </div>`;
                       
                        break;
                    
                    case "chronometre":
                        modulehtml += `<div class="module chronometre">
                            <div class="module_header">
                                            <h3>Chronomètre</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>



                                        <div class="reposition">

                                        <table><tr>
                                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                                        <tr></table>
                                
                                        </div>
                                        
                                        </div>`;
                       
                        break;
                    
                    case "sondage":
                    if(savemode){
                        let questionsond = $("."+element.id+"question");
                        let propositionssond = $("."+element.id+"propositions");
                        element.question = questionsond.val();
                        try{
                        element.propositions = propositionssond.val().split(";");
                        }catch(e){
                            element.propositions = [];
                        }
                    }

                    if(element.propositions == undefined){
                        element.propositions = [];
                    }
                    if(element.question == undefined){
                        element.question = "";
                    }

                        modulehtml += `<div class="module sondage">
                            <div class="module_header">
                                            <h3>Sondage</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>
                            <div class="module_content">
                                Question
                                <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">


                                Propositions (; comme séparateur)
                                <input type="text" class="form-control ${element.id}propositions" id="propositions" value="${element.propositions.join(";").replace(/\"/g,"\'\'")}" placeholder="Propositions">


                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                    
                            </div>
                        </div>`;

                        break;

                    case "resultat_sondage":
                        modulehtml += `<div class="module resultat_sondage">
                            <div class="module_header">
                                            <h3>Résultat du sondage</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                        </div>

                        <div class="reposition">
                        <table><tr>
                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                        <tr></table>
                
                        </div>
                        
                        
                        
                        </div>`;

                        

                        break;

                    case "synthese":
                    if(savemode){
                        let question = $("."+element.id+"question");
                        let nbligne = $("."+element.id+"nomber_ligne");
                        element.question = question.val();
                        element.nombre_lignes = nbligne.val();
                    }

                    if(element.question == undefined){
                        element.question = "";
                    }
                    if(element.nombre_lignes == undefined){
                        element.nombre_lignes = 1;
                    }
                        
                        modulehtml += `<div class="module synthese">
                            <div class="module_header">
                                            <h3>Synthèse</h3>
                                            <button class="btn btn-danger btn-sm delete_module" onclick="removeblock('${element.id}')"></button>
                                        </div>

                            <div class="module_content">
                                Question
                                <input type="text" class="form-control ${element.id}question" id="question" value="${element.question.replace(/\"/g,"\'\'")}" placeholder="Question">
                                Nombre de lignes 
                                <input type="number" class="form-control ${element.id}nombre_lignes" id="nombre_lignes" value="${element.nombre_lignes}" placeholder="Nombre de lignes">
                            </div>

                            <div class="reposition">

                            <table><tr>
                            <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                            <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                            <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                            <tr></table>
                    
                            </div>
                       
                       
                        </div>`;

                       
                        break;

                    case "newpage":
                        modulehtml += `<div class="pagetitle">Page n°${pages}</div>
                        <button class="btn btn-danger btn-sm delete_module newpagedelete" onclick="removeblock('${element.id}')"></button>

                        <div class="reposition higheradd">

                        <table><tr>
                        <td class="arrow ${element.id}up"><button class="up" onclick="upswitch(${element.id})">ᐱ</button></td>
                        <td class="arrow ${element.id}down"><button class="down" onclick="downswitch(${element.id})">ᐯ</button></td>
                        <td class="arrow ${element.id}add"><button onclick="addModuleOnTheFly(${element.id})">+</button></td>
                        <tr></table>
                
                        </div>
                        
                        
                        `;
                        
                        pages++;
                       
                        break;

                    default:
                        
                        break;

                    }

                    

                    
                
            });

            // We save the modulelist in the cookies
            if(savemode){
                console.log("Cookies saved");
                document.cookie = "modulelist="+JSON.stringify(modulelist);
            }

            return modulehtml;


        }

        function download(){

            rendermodules(savemode=true);

            let nom_atelier = $("#nom_atelier").val();
            let version = $("#version").val();
            let image = $("#image").val();
            let description = $(".headerzone").val();
            let duree = $("#duree").val();
            let niveau_min = $("#niveau_min").val();

            let jsonpage = {
                "nom_atelier": nom_atelier,
                "version": version,
                "image": image,
                "description": description,
                "duree": duree,
                "niveau_min": niveau_min,
                "pages": []
            };

            let modulelistcopy = JSON.parse(JSON.stringify(modulelist));

            modulelistcopy.forEach(element => {

                delete element.id;

            });

            pagelist = [];
            accumulator = [];

            modulelistcopy.forEach(element => {

                if(element.type_module == "newpage" && accumulator.length > 0){
                    pagelist.push({modules : accumulator});
                    accumulator = [];
                }
                else if (element.type_module != "newpage"){
                    accumulator.push(element);
                }


            });

            pagelist.push({modules : accumulator});

            jsonpage.pages = pagelist;
               
            let jsonstring = JSON.stringify(jsonpage, null, 4);

            let blob = new Blob([jsonstring], {type: "application/json"});
            let url = URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.href = url;
            link.download = `${jsonpage.nom_atelier}.json`;
            link.click();

        }

        function isValidHttpUrl(string) {
            var urlRegex = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
            return urlRegex.test(string);
         }


        



        function addModuleOnTheFly(idmodule){

            // We copy the modulelistcopy and once we reach the element with the idmodule, we add the new module just after and continue the copy
            //the type of the module will be the same as for ne modules
            element = modulelist.find(element => element.id == idmodule);
                    
                    
            maxid++;
            idlist.push(maxid);

            let newmodule = $("#modulechoice").val();
            let moduleres = moduleswitch(newmodule, maxid);

            if(moduleres != "nope"){
                        try{
                modulelist.splice(modulelist.indexOf(element)+1, 0, moduleres);
                        }catch(e){
                            console.log("error, could not add on the fly, out of range");
                        }
                    }
      
        setTimeout(function(){    

            let renderedhtml = rendermodules();

            $("#modulebody").html(renderedhtml);

        }, 100);

        }

        function upswitch(idmodule){
            let element = modulelist.find(element => element.id == idmodule);
            let index = modulelist.indexOf(element);
            if(index > 0){
                modulelist.splice(index, 1);
                modulelist.splice(index-1, 0, element);
            }

            setTimeout(function(){    

                let renderedhtml = rendermodules();
    
                $("#modulebody").html(renderedhtml);
    
            }, 100);
        }

        function downswitch(idmodule){
            let element = modulelist.find(element => element.id == idmodule);
            let index = modulelist.indexOf(element);
            if(index < modulelist.length-1){
                modulelist.splice(index, 1);
                modulelist.splice(index+1, 0, element);
            }

            setTimeout(function(){
                let renderedhtml = rendermodules();
                $("#modulebody").html(renderedhtml);
            }, 100);

        }

        // Change the attribute of the page for the attribute in the json file loaded by the user (with file-selector)
        function loadjson(){

                console.log("starting to load json");
                
                let file = $("#file-selector")[0].files[0];
                let reader = new FileReader();
                reader.onload = function(e) {
                    let json = JSON.parse(e.target.result);
                    
                    $("#nom_atelier").val(json.nom_atelier);
                    $("#version").val(json.version);
                    $("#image").val(json.image);
                    $(".headerzone").val(json.description);
                    $("#duree").val(json.duree);
                    $("#niveau_min").val(json.niveau_min);
                    let pagelist = json.pages;
                    
                    modulelist.forEach(element => {
                        delete element;
                    });

                    let pagestart = false;

                    
                    pagelist.forEach(element => {
                        maxid++;
                        if(pagestart){
                        modulelist.push({type_module : "newpage", id : maxid});
                        }
                        pagestart = true;
                        element.modules.forEach(element => {
                            maxid++;
                            element.id = maxid;
                            modulelist.push(element);
                        });
                    });

                    let renderedmodules =  rendermodules(savemode=false);
                    $("#modulebody").html(renderedmodules);
                  
                }
                reader.readAsText(file);

                
        }