var ejecrevistafuncion = setInterval(cambiarTarjeta_grupo_1, 5000);
var ejecrevistafuncion1;
var ejecrevistafuncion2;
var ejecrevistafuncion3;
var ejecrevistafuncion4;

function cambiarTarjeta_grupo_1(){
    document.getElementById("id_grupo_1_revistas").style.display="flex";/* Grupo 1 */
    document.getElementById("id_grupo_2_revistas").style.display="none";/* Grupo 2 */
    document.getElementById("id_grupo_3_revistas").style.display="none";/* Grupo 3 */
    document.getElementById("id_grupo_4_revistas").style.display="none";/* Grupo 4 */

    document.getElementById("id_punto_1").style.backgroundColor="#E42722";/* Punto 1 */
    document.getElementById("id_punto_2").style.backgroundColor="#dddddd";/* Punto 2 */
    document.getElementById("id_punto_3").style.backgroundColor="#dddddd";/* Punto 3 */
    document.getElementById("id_punto_4").style.backgroundColor="#dddddd";/* Punto 4 */

    ejecrevistafuncion = "sin";
    ejecrevistafuncion2 = "no";
    ejecrevistafuncion3 = "no";
    ejecrevistafuncion4 = "no";

    ejecrevistafuncion1 = setInterval(cambiarTarjeta_grupo_2, 5000);

}

function cambiarTarjeta_grupo_2(){
    document.getElementById("id_grupo_1_revistas").style.display="none";/* Grupo 1 */
    document.getElementById("id_grupo_2_revistas").style.display="flex";/* Grupo 2 */
    document.getElementById("id_grupo_3_revistas").style.display="none";/* Grupo 3 */
    document.getElementById("id_grupo_4_revistas").style.display="none";/* Grupo 4 */

    document.getElementById("id_punto_1").style.backgroundColor="#dddddd";/* Punto 1 */
    document.getElementById("id_punto_2").style.backgroundColor="#E42722";/* Punto 2 */
    document.getElementById("id_punto_3").style.backgroundColor="#dddddd";/* Punto 3 */
    document.getElementById("id_punto_4").style.backgroundColor="#dddddd";/* Punto 4 */

    ejecrevistafuncion = "sin";
    ejecrevistafuncion1 = "no";
    ejecrevistafuncion3 = "no";
    ejecrevistafuncion4 = "no";

    ejecrevistafuncion2 = setInterval(cambiarTarjeta_grupo_3, 5000);
}

function cambiarTarjeta_grupo_3(){
    document.getElementById("id_grupo_1_revistas").style.display="none";/* Grupo 1 */
    document.getElementById("id_grupo_2_revistas").style.display="none";/* Grupo 2 */
    document.getElementById("id_grupo_3_revistas").style.display="flex";/* Grupo 3 */
    document.getElementById("id_grupo_4_revistas").style.display="none";/* Grupo 4 */

    document.getElementById("id_punto_1").style.backgroundColor="#dddddd";/* Punto 1 */
    document.getElementById("id_punto_2").style.backgroundColor="#dddddd";/* Punto 2 */
    document.getElementById("id_punto_3").style.backgroundColor="#E42722";/* Punto 3 */
    document.getElementById("id_punto_4").style.backgroundColor="#dddddd";/* Punto 4 */

    ejecrevistafuncion = "sin";
    ejecrevistafuncion1 = "no";
    ejecrevistafuncion2 = "no";
    ejecrevistafuncion4 = "no";

    ejecrevistafuncion3 = setInterval(cambiarTarjeta_grupo_4, 5000);
}

function cambiarTarjeta_grupo_4(){
    document.getElementById("id_grupo_1_revistas").style.display="none";/* Grupo 1 */
    document.getElementById("id_grupo_2_revistas").style.display="none";/* Grupo 2 */
    document.getElementById("id_grupo_3_revistas").style.display="none";/* Grupo 3 */
    document.getElementById("id_grupo_4_revistas").style.display="flex";/* Grupo 4 */

    document.getElementById("id_punto_1").style.backgroundColor="#dddddd";/* Punto 1 */
    document.getElementById("id_punto_2").style.backgroundColor="#dddddd";/* Punto 2 */
    document.getElementById("id_punto_3").style.backgroundColor="#dddddd";/* Punto 3 */
    document.getElementById("id_punto_4").style.backgroundColor="#E42722";/* Punto 4 */

    ejecrevistafuncion = "sin";
    ejecrevistafuncion1 = "no";
    ejecrevistafuncion2 = "no";
    ejecrevistafuncion3 = "no";

    ejecrevistafuncion4 = setInterval(cambiarTarjeta_grupo_1, 5000);
}


function revista1(){
    href.s
}