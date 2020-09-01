'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// correspond au fichiers js utilisé, le .js n'est mis dans la syntaxe, c'est la variable du module exporte
var routes = require('./routes/index'); // permet de charger le module de routage router depuis index.js dans l'appli app
var users = require('./routes/users');  // permet de charger les definitions de requetes utilisateurs users.js
//var Obligation = require('./public/javascripts/obligatoireOuNon'); // permet de charger une fonction js dans l'appli app NE MARCHE PAS


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// On charge les modules du framework dans l'application
app.use(favicon(__dirname + '/public/images/marsupilami-logo.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// on charge les chemins des fonctions publiques dans l'application
app.use(express.static(path.join(__dirname, 'public')));  // permet de charger tous les modules publics
app.use(express.static(path.join(__dirname, 'public/javascripts')));  // permet de charger tous les modules publics/javascripts


// on charge les chemins des module de routage dans l'application
app.use('/', routes);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Page non trouvee, le chemin n'existe pas");
    err.status = 404;
    next(err);
});
// error handlers





// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

// creation d'une variable server permettant d'écouter pour l'application sur le port configurer
var server = app.listen(app.get('port'), function () {
    debug(' Le server cree ecoute sur le port  :.......... :  ' + server.address().port);
});
