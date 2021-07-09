# repte5B_DANIEL_MIGALES
Exercici del curs Introducció a la programació mobile (FS23-21) del SOC. PLA_5 Arrays.

Repte 5B :
El repte consisteix en la creació d’un llistat dels convidats a un gran esdeveniment got. L’usuari
escriurà un nom a l’ <INPUT> i en fer clic al botó (si el nom no està repetit) l’afegirà al llistat de
convidats. A l’arribar al màxim de l’aforament (10 persones) es buiden totes les dades i es
comença des del principi.
Pots provar el repte totalment funcional i acabat (amb el codi javaScript ofuscat) amb aquest
enllaç: https://www.html6.es/curso/repte5b/
1. Crea un fitxer o descarrega el fitxer repte5B _EL_TEU_NOM_COGNOM .rar i crea o edita el
fitxer html anomenat:
repte5B _EL_TEU_NOM_COGNOM] .html
(amb les següents característiques)
2. Al codi existeix un array buit inicialment.
3. En accedir a la web inicialment es mostra:
- 1 <INPUT>
- 3 <BUTTON>
- 2 <DIV>
Resum de la utilitat de cada element:
- A l' <INPUT> l'usuari haurà d'escriure el nom del convidat.
- El primer <BUTTON> servirà per afegir dades (explicat al punt 4) .
- El segon <BUTTON> servirà per eliminar tots els valors de l'array (explicat al punt 9) .
- El tercer <BUTTON> servirà per buscar un valor (explicat al punt 10) .
- El primer <DIV> mostrarà en diferents línies els valors que es vagin introduint.
- El segon <DIV> mostrarà el nombre de valors que conté l'array en cada moment.
4. En fer clic al primer <BUTTON> (o prémer la tecla ENTER ):
4a. Agafa el valor de l' <INPUT> .
4b. Perquè aquest valor sigui correcte i es pugui utilitzar ha de passar una sèrie de
comprovacions:
● Hi ha d'haver "alguna cosa" escrita al seu interior .
● Comprovar que no existeixi ja a l'array (ja sigui escrit en majúscules o
minúscules) . Els valors de l'array no es poden repetir.
● Si es compleixen totes les comprovacions l'afegeix (en minúscules) al final de
l'array.
5. Aquesta comprovació també es pot realitzar prement la tecla ENTER .
6. Si passa totes les comprovacions:
6a. Afegeix aquest valor al final de l'array.
6b. Actualitza el nou contingut de l'array en el primer <DIV> .
6c. Actualitza el contingut del segón <DIV> que mostra el nombre de valors que conté
l'array.
7. Tenint en compte que com a màxim l'array només pot contenir 10 valors , si abans d'afegir
el valor, la matriu ja conté 10 valors:
7a. Elimina totes les dades de l'array.
7b. Afegeix el valor a l'array (com a primera dada) .
7c. Actualitza el contingut del primer <DIV> mostrant aquest únic valor.
7d. Actualitza el segon <DIV> (indicant que hi ha 1 únic valor) .
8. Tant si el valor és vàlid, com si no:
8a. Es buida el contingut de l' <INPUT> .
8b. S'introdueix el cursor dins de l' <INPUT> (per facilitar que l'usuari pugui seguir escrivint
sense haver de fer clic sobre ell) .
9. En fer clic al segon <BUTTON> :
9a. Es buida tot el contingut de l'array (utilitzant tan sols splice i length ).
9b. Es buida el contingut del primer <DIV> .
9c. S'actualitza el contingut del segon <DIV> (mostrant 0, ja que ja no hi ha dades) .
10. En fer clic al tercer <BUTTON> :
10a. Si existeix "alguna cosa" escrita a l' <INPUT> buscarà aquest valor a l'array. Sinó s’ha
escrit res no realitza cap acció.
10b. Si no el troba mostra (utilitzant un alert):
[EL_VALOR_ESCRIT] no s'ha trobat
10c. Si troba el valor mostra (utilitzant un alert):
S'ha trobat [EL_VALOR ESCRIT] a la [PRIMERA / SEGONA / TERCERA ...] posició.
Tenint en compte que el primer valor [0] seria "PRIMERA", el segon [1] seria "SEGONA", el
valor [2] seria "TERCERA", etc...
10d. S'esborra el contingut de l' <INPUT> .
10e. S'introdueix el cursor en el seu interior (per facilitar l'escriptura de l'usuari)
