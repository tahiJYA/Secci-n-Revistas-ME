var ejecrevistafuncion = setInterval(cambiarTarjeta_grupo_1, 5000);
var ejecrevistafuncion1;
var ejecrevistafuncion2;
var ejecrevistafuncion3;
var ejecrevistafuncion4;

function cambiarTarjeta_grupo_1() {
    clearInterval(ejecrevistafuncion);
    clearInterval(ejecrevistafuncion2);
    clearInterval(ejecrevistafuncion3);
    clearInterval(ejecrevistafuncion4);

    document.getElementById("id_grupo_1_revistas").style.display = "flex";
    document.getElementById("id_grupo_2_revistas").style.display = "none";
    document.getElementById("id_grupo_3_revistas").style.display = "none";
    document.getElementById("id_grupo_4_revistas").style.display = "none";

    document.getElementById("id_punto_1").style.backgroundColor = "#E42722";
    document.getElementById("id_punto_2").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_3").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_4").style.backgroundColor = "#dddddd";

    ejecrevistafuncion1 = setInterval(cambiarTarjeta_grupo_2, 5000);
}

function cambiarTarjeta_grupo_2() {
    clearInterval(ejecrevistafuncion);
    clearInterval(ejecrevistafuncion1);
    clearInterval(ejecrevistafuncion3);
    clearInterval(ejecrevistafuncion4);

    document.getElementById("id_grupo_1_revistas").style.display = "none";
    document.getElementById("id_grupo_2_revistas").style.display = "flex";
    document.getElementById("id_grupo_3_revistas").style.display = "none";
    document.getElementById("id_grupo_4_revistas").style.display = "none";

    document.getElementById("id_punto_1").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_2").style.backgroundColor = "#E42722";
    document.getElementById("id_punto_3").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_4").style.backgroundColor = "#dddddd";

    ejecrevistafuncion2 = setInterval(cambiarTarjeta_grupo_3, 5000);
}

function cambiarTarjeta_grupo_3() {
    clearInterval(ejecrevistafuncion);
    clearInterval(ejecrevistafuncion1);
    clearInterval(ejecrevistafuncion2);
    clearInterval(ejecrevistafuncion4);

    document.getElementById("id_grupo_1_revistas").style.display = "none";
    document.getElementById("id_grupo_2_revistas").style.display = "none";
    document.getElementById("id_grupo_3_revistas").style.display = "flex";
    document.getElementById("id_grupo_4_revistas").style.display = "none";

    document.getElementById("id_punto_1").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_2").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_3").style.backgroundColor = "#E42722";
    document.getElementById("id_punto_4").style.backgroundColor = "#dddddd";

    ejecrevistafuncion3 = setInterval(cambiarTarjeta_grupo_4, 5000);
}

function cambiarTarjeta_grupo_4() {
    clearInterval(ejecrevistafuncion);
    clearInterval(ejecrevistafuncion1);
    clearInterval(ejecrevistafuncion2);
    clearInterval(ejecrevistafuncion3);

    document.getElementById("id_grupo_1_revistas").style.display = "none";
    document.getElementById("id_grupo_2_revistas").style.display = "none";
    document.getElementById("id_grupo_3_revistas").style.display = "none";
    document.getElementById("id_grupo_4_revistas").style.display = "flex";

    document.getElementById("id_punto_1").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_2").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_3").style.backgroundColor = "#dddddd";
    document.getElementById("id_punto_4").style.backgroundColor = "#E42722";

    ejecrevistafuncion4 = setInterval(cambiarTarjeta_grupo_1, 5000);
}
