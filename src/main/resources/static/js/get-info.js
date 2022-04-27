fetch("data/info-esp.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById('sql-info').innerHTML = data.sql;
                document.getElementById('java-info').innerHTML = data.java;
                document.getElementById('git-info').innerHTML = data.git;
                document.getElementById('python-info').innerHTML = data.python;
                document.getElementById('c-info').innerHTML = data.c;
                document.getElementById('js-info').innerHTML = data.js;
                
            })