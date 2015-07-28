/*Carga de dependencias. */
var express    = require('express');
var swig 	   = require('swig');
var routes     = require('./routes/index');
var bodyParser = require('body-parser');
var app 	   = express();

/* Registro de SWIG como motor de plantillas que utilizará Express. */
app.engine('html', swig.renderFile);

/* Extensión por defecto de las vistas/plantillas del motor: HTML. */
app.set('view engine', 'html');

/* Especificamos la ruta del directorio desde donde se extraerán las vistas. */
app.set('views', __dirname + '/views');

/* Desactivamos la caché de Express, SWIG ya lo hace. */
app.set('view cache', false);

/* Middlewares */
app.use(bodyParser.json('application/json'));
app.use(routes);
app.use(express.static(__dirname + '/app'));

//En el caso de que querramos cambiar la notación de lógica en plantillas. 
// swig.setDefaults({varControls:['[[',']]']});

/* Ponemos el servidor a la escucha en el puerto 3090. */
var server = app.listen(3090, function () {
  console.log('Server escuchando en puerto: 3090');
});