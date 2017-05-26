var myexpress = require('express'); // en express alamaceno la libreria traida con require de express
var app = myexpress(); //en app se almacena el resultado de la ejecucion de la funcion express

app.get('/',inicio); //app.get (get es la URL)es similar a un addEventListener, en vez de un evento click xejm trae la ruta
app.get("/cursos",cursos);
  function inicio(peticion, resultado){
    resultado.send("<h1>Este es mi primer servidor</h1>");
  }

  function cursos(peticion, resultado){
    resultado.send("Esta es una segunda pagina <strong>Server</strong>");
  }

  app.listen(8989);
