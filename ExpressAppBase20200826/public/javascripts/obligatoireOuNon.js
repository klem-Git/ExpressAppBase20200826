function obligatoireOnNom(text, obligatoire) {
    var monMessage = null;
    if (typeof text != 'undefined') {
        if (typeof obligatoire == 'undefined') {
            obligatoire = false;
        }
        if (obligatoire == true) {
            while ((monMessage == null) || (monMessage == " -- OBLIGATOIRE --")) {
                monMessage = prompt(text, " -- OBLIGATOIRE -- ");
                console.log(" Message obligatoire ... Obligatoire est à true                    valeur : ...", monMessage);
            }
        } else {
            monMessage = prompt(text, "-- NON OBLIGATOIRE --");
            console.log(" Pas de message fournie .... autorisé par false pour obligatoire                    valeur : ...", monMessage);
        }
    } else {
        console.log(" argument fournit egal a null .... à l'appel de la procédure    ")
    }
    }
}