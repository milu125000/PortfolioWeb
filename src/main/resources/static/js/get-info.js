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
                innerHTMLChangerStudies(languageEsp);
                innerHTMLChangerProjects(languageEsp);
                innerHTMLChangerFooter(languageEsp);
                innerHTMLChangerTitles(languageEsp);

                break;
            }
            case("eng"):{
                innerHTMLChangerWelcome(languageEng);
                innerHTMLChangerSkills(languageEng);
                innerHTMLChangerStudies(languageEng);
                innerHTMLChangerProjects(languageEng);
                innerHTMLChangerFooter(languageEng);
                innerHTMLChangerTitles(languageEng);

                break;
            }
        }
    }
    
}

function innerHTMLChangerTitles(languages){
    languages.then(
        data => {
            document.getElementById('nav-portfolio').innerHTML = data.titles.portfolio;
            document.getElementById('nav-skills').innerHTML = data.titles.skills;
            document.getElementById('nav-projects').innerHTML = data.titles.projects;
            document.getElementById('title-portfolio').innerHTML = data.titles.portfolio;
            document.getElementById('title-skills').innerHTML = data.titles.skills;
            document.getElementById('title-projects').innerHTML = data.titles.projects;
           
    });

    
}



function innerHTMLChangerWelcome(languages){
    languages.then(
        data => {
            document.getElementById('initDesc').innerHTML = data.introduction.initialDesc;

    });

    
}

function innerHTMLChangerStudies(languages){
    languages.then(
        data => {
            document.getElementById('secondary').innerHTML = data.studies.secondary;
            document.getElementById('english-studies').innerHTML = data.studies.english;
            document.getElementById('tcp').innerHTML = data.studies.tcp;
            document.getElementById('chinese-studies').innerHTML = data.studies.chinese;
            document.getElementById('college').innerHTML = data.studies.college;
            document.getElementById('argentina').innerHTML = data.studies.argentina;

    });

    
}

function innerHTMLChangerProjects(languages){
    languages.then(
        data => {
            document.getElementById('web-portfolio').innerHTML = data.projects.webportfolio;
            document.getElementById('musiquita').innerHTML = data.projects.musiquita;
            document.getElementById('mongo').innerHTML = data.projects.mongo;
            document.getElementById('space-invaders').innerHTML = data.projects.spaceinvaders;
            document.getElementById('mcdonalds').innerHTML = data.projects.mcdonalds;
            document.getElementsByClassName('btn btn-primary')[0].innerHTML = data.projects.viewcode;
            document.getElementsByClassName('btn btn-primary')[1].innerHTML = data.projects.viewcode;
            document.getElementsByClassName('btn btn-primary')[2].innerHTML = data.projects.viewpage;
            document.getElementsByClassName('btn btn-primary')[3].innerHTML = data.projects.viewcode;
            document.getElementsByClassName('btn btn-primary')[4].innerHTML = data.projects.invite;
            document.getElementsByClassName('btn btn-primary')[5].innerHTML = data.projects.viewcode;
            document.getElementsByClassName('btn btn-primary')[6].innerHTML = data.projects.viewcode;

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


function innerHTMLChangerFooter(languages){
    languages.then(
        data => {
            document.getElementById('dir').innerHTML = data.footer.direction;
            document.getElementById('social').innerHTML = data.footer.social;


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

