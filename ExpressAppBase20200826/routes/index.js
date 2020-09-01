// construction du module de routage 'router' de type express.router()

'use strict';
// creation des variables des fonctions et modules framework
var express = require('express');
var router = express.Router();


//var images = require('./public/javascripts/mesImages.js')
// creation d'une function dans le module de routage
var mesImages = function () {
    var data = {
        'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
        'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
        'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg',
        'item4': 'http://localhost:1337/images/marsupilami-logo.png' //    'item4': './public/images/marsupilami-logo.png' NE MARCHE PAS
        //'item4': 'file://laptop-tfthhjus/images/marsupilami-logo.png' //    'item4': './public/images/marsupilami-logo.png' NE MARCHE PAS
    }
    console.log('Mon chemin image 1 :   ', data.item1)
    console.log('Mon chemin image 2 :   ', data.item2)
    console.log('Mon chemin image 3 :   ', data.item3)
    console.log('Mon chemin image 4 :   ', data.item4)
    return data;
}

var fs = require('fs')
var fd = './foo.txt';
var buffer = '';
// accès a un fihcier texte


try {
    if (fs.existsSync(fd)) {
        console.log(' Fichier ' + fd + ' existe')
        buffer = fs.readFileSync(fd)
        console.log('Lecture du fichier ....' + buffer)
        //file exists
    }
} catch (err) {
    console.error(err)
}// accès a un fihcier texte*/



// chargement d'une fonction existente middleware de l'instance express 'app'
/* charge une fonction middleware, utilise request responses et next */
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}
)

/* charge une fonction js depuis un fichier
router.use(function obligatoireOnNon(text, obligatoire) {
    res.render("obligatoire", obligatoireOnNon(' entrez quelques chose :  ', true))
}
)
 charge une fonction js depuis un fichier */



/* creation d'une route vers fonction js  ROUTE VERS FONCTION JS  
router.get("/obligatoire", obligatoireOnNon()) {
    res.render("obligatoire", obligatoireOnNon(' entrez quelques chose :  ', true))
}
 creation d'une route vers fonction js */


/* GET home page. ---- objet res : réponse ---  objet req : requete

router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
 GET home page. */

// appel aux images sources dans fonction du fichier mesimages.js
//  GET Methode route sur l'objet express 'router' PREMIERE ROUTE home page 'localhost:1337/'
router.get('/', function (req, res) {
    // envoie des arguments nécessaire au fonctionnement du pug, sinon pug en erreur
    res.render('index', { title: 'Express', "images": mesImages() }); // renvoie un tableau de valeur : item1, item2, item3 de nom "images"
    //res.render('index', { title: 'Express', "images" : router.use(mesImages()) });
    //res.end('When a GET request is made, then this '+ 'is the response sent to the client!'); // met fin au processus de reponse
});


/*
router.post('/', function (req, res, next) {
    res.end('When a POST request is made, then this '
        + 'is the response sent to the client!');
}); */

//  GET Methode route sur l'objet express 'router' DEUXIEM ROUTE 'localhost:1337/exemple'
router.get('/exemple', function (req, res) {
    // envoie des arguments nécessaire au fonctionnement du pug, sinon pug en erreur
    res.render('index', { title: 'Exemple', "images": mesImages() });   // renvoie un tableau de valeur : item1, item2, item3 de nom "images"
    //res.render('index', { title: 'Express', "images": router.use(mesImages()) });
});

// monte le module routeur sur un chemin dasn l'application principale
module.exports = router;


/* GET home page. */

/* AUTRES REQUETES
Router.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('When a GET request is made, then this '
            + 'is the response sent to the client!');
    })
    .post((req, res, next) => {
        res.end('When a POST request is made, then this '
            + 'is the response sent to the client!');
    })
    .put((req, res, next) => {
        res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!');
    })
    .delete((req, res, next) => {
        res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!');
    }); 
 AUTRES REQUETES */

