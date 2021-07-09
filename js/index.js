window.onload = inici;

//punt 2: array buit
var noms = [];

function inici() {
    //punt 3:
    //botó per afegir dades
    document.querySelector("#boton1").onclick = afegirDades;
    //botó per eliminar tots els valors de l'array
    document.querySelector("#boton2").onclick = netejarTot;
    //botó per buscar un valor
    document.querySelector("#boton3").onclick = buscarValor;
    //El segon <DIV> mostrarà el nombre de valors que conté l'array en cada moment, ara mateix 0
    document.querySelector("#lista2").innerHTML = noms.length;
    //punt 5: amb la tecla enter tambe es pot fer l'input
    document.querySelector("#producto").onkeydown = enter;
}

//funcio del punt 5
function enter(e) { //funció per que quan prengui enter
    var codi_tecla = e.keyCode;
    if (codi_tecla == 13) {
        afegirDades();
    }
}

function afegirDades() {
    //punt 4a: agafar el valor de l'input i el possa en minuscules
    var valor = document.querySelector("#producto").value.toLowerCase();
    //punt 4b: comprovacions: que hi hagi alguna cosa escrita, comprovar que no existeixi ja a l'array
    if (valor.length > 0 && noms.indexOf(valor) == -1) {
        //punt 6 : Si passa les comprovacions:
        //punt 6a. Afegeix aquest valor al final de l'array.
        noms.push(valor);
        //punt 6b. Actualitza el nou contingut de l'array en el primer <DIV> . El primer <DIV> mostrarà en diferents línies els valors que es vagin introduint.
        document.querySelector("#lista1").innerHTML += `<div>${valor}</div>`;
        //punt 6c. Actualitza el contingut del segón <DIV> que mostra el nombre de valors que conté l'array.
        document.querySelector("#lista2").innerHTML = noms.length;
    }

    //punt 7. Tenint en compte que com a màxim l'array només pot contenir 10 valors , si abans d'afegir el valor, la matriu ja conté 10 valors:
    //punt 7a. Elimina totes les dades de l'array.
    //punt 7b. Afegeix el valor a l'array (com a primera dada) .
    //punt 7c. Actualitza el contingut del primer <DIV> mostrant aquest únic valor.
    //punt 7d. Actualitza el segon <DIV> (indicant que hi ha 1 únic valor) .


    //punt 8. Tant si el valor és vàlid, com si no:
    //punt 8a. Es buida el contingut de l' <INPUT> .
    //punt 8b. S'introdueix el cursor dins de l' <INPUT> (per facilitar que l'usuari pugui seguir escrivint sense haver de fer clic sobre ell) .
    document.querySelector("#producto").value = "";
    document.querySelector("#producto").focus();
}

function netejarTot() {
    //punt 9a. Es buida tot el contingut de l'array (utilitzant tan sols splice i length ).
    noms.splice(0, noms.length);
    //punt 9b. Es buida el contingut del primer <DIV> .
    document.querySelector("#lista1").innerHTML = "";
    //punt 9c. S'actualitza el contingut del segon <DIV> (mostrant 0, ja que ja no hi ha dades) .
    document.querySelector("#lista2").innerHTML = noms.length;
}

function buscarValor() {

    //punt 10a.Si existeix "alguna cosa" escrita a l' <INPUT> buscarà aquest valor a l'array.Sinó s’ha escrit res no realitza cap acció.
    //punt 10b.Si no el troba mostra(utilitzant un alert):[EL_VALOR_ESCRIT] no s'ha trobat
    //punt 10c.Si troba el valor mostra(utilitzant un alert): S'ha trobat [EL_VALOR ESCRIT] a la [PRIMERA / SEGONA / TERCERA ...] posició. 
    //Tenint en compte que el primer valor[0] seria "PRIMERA", el segon[1] seria "SEGONA", el valor[2] seria "TERCERA", etc...
    //punt 10d.S'esborra el contingut de l' < INPUT > .
    //punt 10e.S'introdueix el cursor en el seu interior (per facilitar l'escriptura de l'usuari)

}