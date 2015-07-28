/* Dependencias */
var express = require('express');
var router  = express.Router(); 

/*Configuración de rutas.*/

/*Lógica en la ruta raíz.*/
router.get('/', function(req, res, next) {
  res.render('default', { title: 'Elije', fecha: new Date() });
});

/*Lógica para la vista del listado de artistas.*/
router.get('/artistas', function(req, res, next) {
	
	var artistas = [
			{
				'Nombre': 'Drake',
				'Género': ['R&B', 'Rap', 'Hip Hop'],
				'Edad': 28,
				'Imagen': 'http://localhost:3090/images/drake.jpg',
				'Sitio Web': 'http://www.drakeofficial.com'
			},
			{
				'Nombre': 'Doves',
				'Género': ['Rock Alternativo', 'Indie Rock'],
				'Edad': 'Jóvenes',
				'Imagen': 'http://localhost:3090/images/doves.jpeg',
				'Sitio Web': 'http://www.doves.net'
			},
			{
				'Nombre': 'Metronomy',
				'Género': ['New Wave', 'Electropop', 'Wonky Pop', 'Experimental'],
				'Edad': 'Más jóvenes',
				'Imagen': 'http://localhost:3090/images/metronomy.jpg',
				'Sitio Web': 'http://www.metronomy.co.uk/'
			},
			{
				'Nombre': 'Kendrick Lamar',
				'Género': ['Hip Hop', 'Rap'],
				'Edad': 28,
				'Imagen': 'http://localhost:3090/images/kendrick.jpg',
				'Sitio Web': 'http://www.kendricklamar.com/'
			}
	];

	res.render('artistas', {artistas:artistas});

});

// Exportamos el módulo enrutados.
module.exports = router;