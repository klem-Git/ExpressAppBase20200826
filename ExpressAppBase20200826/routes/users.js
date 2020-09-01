'use strict';
/* Utilisez la classe express.Router pour créer des gestionnaires de route modulaires et pouvant être montés. 
 * Une instance Router est un middleware et un système de routage complet ; 
 * pour cette raison, elle est souvent appelée “mini-app”. */
var express = require('express');
/* création d'un routeur en tant que module,  et */
var router = express.Router();

/* GET users listing.définit des routes   */
router.get('/', function (req, res, next) {
    res.send('respond with a resource'); // res.send renvoie une reponse de type divers.... 
    next(); // pour passer à la suite
});
/* GET users listing. */


router.get('/exemple', function (req, res) {
    res.send('exemple'); // res.send renvoie une reponse de type divers
});

/* monte le module de routeur sur un chemin dans l’application principale. */
module.exports = router;
