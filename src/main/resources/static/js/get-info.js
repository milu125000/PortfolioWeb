var language = "eng";
var firstLoad = true;

// fetching jsons

var languageEsp = fetch("data/info-esp.json")
.then(response => response.json());

var languageEng = fetch("data/info-eng.json")
.then(response => response.json());

//first load 
if(firstLoad){
    firstLoad = false;
    languageChange(document.getElementById('esp'));
}

// language changer

function languageChange(elemento) {
    var id = elemento.id;
    if(language != id){
        language = id;
        switch(language){
            case("esp"):{
                innerHTMLChangerWelcome(languageEsp);
                innerHTMLChangerSkills(languageEsp);
                break;
            }
            case("eng"):{
                innerHTMLChangerWelcome(languageEng);
                innerHTMLChangerSkills(languageEng);
                break;
            }
        }
    }
    
}

function innerHTMLChangerWelcome(languages){
    languages.then(
        data => {
            document.getElementById('initDesc').innerHTML = data.introduction.initialDesc;

    });

    
}

function innerHTMLChangerSkills(languages){
    languages.then(
        data => {
            document.getElementById('sql-info').innerHTML = data.skills.sql;
            document.getElementById('java-info').innerHTML = data.skills.java;
            document.getElementById('git-info').innerHTML = data.skills.git;
            document.getElementById('python-info').innerHTML = data.skills.python;
            document.getElementById('c-info').innerHTML = data.skills.c;
            document.getElementById('js-info').innerHTML = data.skills.js;

    });

    
}

// function deleteInnerHTMLforLanguageChange(){
//     document.getElementById('sql-info').innerHTML = "";
//     document.getElementById('java-info').innerHTML = "";
//     document.getElementById('git-info').innerHTML = "";
//     document.getElementById('python-info').innerHTML = "";
//     document.getElementById('c-info').innerHTML = "";
//     document.getElementById('js-info').innerHTML = "";
// }

