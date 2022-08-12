var language = null;

var languageEsp = fetch("data/info-esp.json")
.then(response => response.json());

var languageEng = fetch("data/info-eng.json")
.then(response => response.json());

if (language == null) {
    language = "esp";
    innerHTMLChanger(languageEsp);
}

function languageChange(elemento) {
    console.log(elemento.id);
    console.log(language);
    if(language != elemento.id){
        language = elemento.id;
        switch(language){
            case("esp"):{
                innerHTMLChanger(languageEsp);
                break;
            }
            case("eng"):{
                innerHTMLChanger(languageEng);
                break;
            }
        }
    }
    
}

function innerHTMLChanger(languages){
    languages.then(
        data => {
            document.getElementById('sql-info').innerHTML = data.sql;
            document.getElementById('java-info').innerHTML = data.java;
            document.getElementById('git-info').innerHTML = data.git;
            document.getElementById('python-info').innerHTML = data.python;
            document.getElementById('c-info').innerHTML = data.c;
            document.getElementById('js-info').innerHTML = data.js;

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

