'use strict';
/* Utilisez la classe express.Router pour cr�er des gestionnaires de route modulaires et pouvant �tre mont�s. 
 * Une instance Router est un middleware et un syst�me de routage complet ; 
 * pour cette raison, elle est souvent appel�e �mini-app�. */
var express = require('express');
/* cr�ation d'un routeur en tant que module,  et */
var router = express.Router();

/* GET users listing.d�finit des routes   */
router.get('/', function (req, res, next) {
    res.send('respond with a resource'); // res.send renvoie une reponse de type divers.... 
    next(); // pour passer � la suite
});
/* GET users listing. */


router.get('/exemple', function (req, res) {
    res.send('exemple'); // res.send renvoie une reponse de type divers
});

/* monte le module de routeur sur un chemin dans l�application principale. */
module.exports = router;
