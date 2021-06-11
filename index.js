// MENU DE INICIO

function btnPlay() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

// MOVIMIENTO Y COLOCACIÓN DE LAS PIEZAS EN SU LUGAR DE INICIO

function piezas(posicion) {

    if (posicion == 1) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-1").offsetLeft;
        let Yficha = document.getElementById("bloque-1").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco; 

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-1").style.left = Xhueco + "px";
            document.getElementById("bloque-1").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza1');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 2) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-2").offsetLeft;
        let Yficha = document.getElementById("bloque-2").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-2").style.left = Xhueco + "px";
            document.getElementById("bloque-2").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza2');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 3) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-3").offsetLeft;
        let Yficha = document.getElementById("bloque-3").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-3").style.left = Xhueco + "px";
            document.getElementById("bloque-3").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza3');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 4) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-4").offsetLeft;
        let Yficha = document.getElementById("bloque-4").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-4").style.left = Xhueco + "px";
            document.getElementById("bloque-4").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza4');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 5) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-5").offsetLeft;
        let Yficha = document.getElementById("bloque-5").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-5").style.left = Xhueco + "px";
            document.getElementById("bloque-5").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza5');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 6) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-6").offsetLeft;
        let Yficha = document.getElementById("bloque-6").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-6").style.left = Xhueco + "px";
            document.getElementById("bloque-6").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza6');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 7) {
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-7").offsetLeft;
        let Yficha = document.getElementById("bloque-7").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-7").style.left = Xhueco + "px";
            document.getElementById("bloque-7").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza7');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }
    
    if (posicion == 8){
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-8").offsetLeft;
        let Yficha = document.getElementById("bloque-8").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-8").style.left = Xaux + "px";
            document.getElementById("bloque-8").style.top = Yaux + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza8');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 9){
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-9").offsetLeft;
        let Yficha = document.getElementById("bloque-9").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-9").style.left = Xaux + "px";
            document.getElementById("bloque-9").style.top = Yaux + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza9');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 10){
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-10").offsetLeft;
        let Yficha = document.getElementById("bloque-10").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-10").style.left = Xhueco + "px";
            document.getElementById("bloque-10").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza10');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }

    if (posicion == 11){
        let Xhueco = document.getElementById("bloque-12").offsetLeft;
        let Yhueco = document.getElementById("bloque-12").offsetTop;
        let Xficha = document.getElementById("bloque-11").offsetLeft;
        let Yficha = document.getElementById("bloque-11").offsetTop;
        let Xaux = Xhueco;
        let Yaux = Yhueco;

        if (Math.abs(Xaux - Xficha) <= 201 && Math.abs(Yaux - Yficha) <= 0 || Math.abs(Xaux - Xficha) <= 0 && Math.abs(Yaux - Yficha) <= 201) {
            document.getElementById("bloque-11").style.left = Xhueco + "px";
            document.getElementById("bloque-11").style.top = Yhueco + "px";
            document.getElementById("bloque-12").style.left = Xficha + "px";
            document.getElementById("bloque-12").style.top = Yficha + "px";
        } else {
            const imagenes = document.querySelector('.pieza11');
            imagenes.classList.add('animate__animated', 'animate__shakeY');
        
            imagenes.addEventListener('animationend', () => {
                imagenes.classList.remove('animate__animated', 'animate__shakeY');
            });
        }
    }
}

// FUNCIONES DEDICADAS A LOS BOTONES DE MOVIMIENTO

var a = 0;
var aux = "imagen" + 0;

function avanzar() {

    document.getElementById("container-win").style.display = "none";

    i = [1,2,3,4,5,6,7,8,9,10,11,12];

        $("#bloque-" + i[0]).css("top", "60px");
        $("#bloque-" + i[0]).css("left", "104px");
        $("#bloque-" + i[1]).css("top", "60px");
        $("#bloque-" + i[1]).css("left", "305px");
        $("#bloque-" + i[2]).css("top", "60px");
        $("#bloque-" + i[2]).css("left", "506px");
        $("#bloque-" + i[3]).css("top", "60px");
        $("#bloque-" + i[3]).css("left", "707px");
        $("#bloque-" + i[4]).css("top", "261px");
        $("#bloque-" + i[4]).css("left", "104px");
        $("#bloque-" + i[5]).css("top", "261px");
        $("#bloque-" + i[5]).css("left", "305px");
        $("#bloque-" + i[6]).css("top", "261px");
        $("#bloque-" + i[6]).css("left", "506px");
        $("#bloque-" + i[7]).css("top", "261px");
        $("#bloque-" + i[7]).css("left", "707px");
        $("#bloque-" + i[8]).css("top", "462px");
        $("#bloque-" + i[8]).css("left", "104px");
        $("#bloque-" + i[9]).css("top", "462px");
        $("#bloque-" + i[9]).css("left", "305px");
        $("#bloque-" + i[10]).css("top", "462px");
        $("#bloque-" + i[10]).css("left", "506px");
        $("#bloque-" + i[11]).css("top", "462px");
        $("#bloque-" + i[11]).css("left", "707px");

    a++;

    if (a == 9){
        a = 0;
    }

    $("#bloque-1").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo1.jpg");
    $("#bloque-2").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo2.jpg");
    $("#bloque-3").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo3.jpg");
    $("#bloque-4").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo4.jpg");
    $("#bloque-5").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo5.jpg");
    $("#bloque-6").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo6.jpg");
    $("#bloque-7").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo7.jpg");
    $("#bloque-8").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo8.jpg");
    $("#bloque-9").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo9.jpg");
    $("#bloque-10").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo10.jpg");
    $("#bloque-11").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo11.jpg");

    num = 0;
    clearInterval(tiempo);
    document.getElementById("tiempo").style.display = "none";
}

function retroceder() {
    
    i = [1,2,3,4,5,6,7,8,9,10,11,12];

        $("#bloque-" + i[0]).css("top", "60px");
        $("#bloque-" + i[0]).css("left", "104px");
        $("#bloque-" + i[1]).css("top", "60px");
        $("#bloque-" + i[1]).css("left", "305px");
        $("#bloque-" + i[2]).css("top", "60px");
        $("#bloque-" + i[2]).css("left", "506px");
        $("#bloque-" + i[3]).css("top", "60px");
        $("#bloque-" + i[3]).css("left", "707px");
        $("#bloque-" + i[4]).css("top", "261px");
        $("#bloque-" + i[4]).css("left", "104px");
        $("#bloque-" + i[5]).css("top", "261px");
        $("#bloque-" + i[5]).css("left", "305px");
        $("#bloque-" + i[6]).css("top", "261px");
        $("#bloque-" + i[6]).css("left", "506px");
        $("#bloque-" + i[7]).css("top", "261px");
        $("#bloque-" + i[7]).css("left", "707px");
        $("#bloque-" + i[8]).css("top", "462px");
        $("#bloque-" + i[8]).css("left", "104px");
        $("#bloque-" + i[9]).css("top", "462px");
        $("#bloque-" + i[9]).css("left", "305px");
        $("#bloque-" + i[10]).css("top", "462px");
        $("#bloque-" + i[10]).css("left", "506px");
        $("#bloque-" + i[11]).css("top", "462px");
        $("#bloque-" + i[11]).css("left", "707px");

    a--;

    if (a == -1){
        a = 8;
    }

    $("#bloque-1").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo1.jpg");
    $("#bloque-2").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo2.jpg");
    $("#bloque-3").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo3.jpg");
    $("#bloque-4").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo4.jpg");
    $("#bloque-5").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo5.jpg");
    $("#bloque-6").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo6.jpg");
    $("#bloque-7").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo7.jpg");
    $("#bloque-8").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo8.jpg");
    $("#bloque-9").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo9.jpg");
    $("#bloque-10").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo10.jpg");
    $("#bloque-11").attr("src","./img/Imagenes Puzzle/imagen" + a + "/trozo11.jpg");

    num = 0;
    clearInterval(tiempo);
    document.getElementById("tiempo").style.display = "none";

}

// FUNCION PARA GENERAR EL PUZZLE ALEATORIAMENTE 

let i = [1,2,3,4,5,6,7,8,9,10,11,12];

let tiempo = "";

function aleatorio() {

    console.log(document.getElementById("bloque-1").style.top)

    clearInterval(tiempo);

    i = i.sort(function() {return Math.random() - 0.5});

    $("#bloque-" + i[0]).css("top", "60px");
    $("#bloque-" + i[0]).css("left", "104px");
    $("#bloque-" + i[1]).css("top", "60px");
    $("#bloque-" + i[1]).css("left", "305px");
    $("#bloque-" + i[2]).css("top", "60px");
    $("#bloque-" + i[2]).css("left", "506px");
    $("#bloque-" + i[3]).css("top", "60px");
    $("#bloque-" + i[3]).css("left", "707px");
    $("#bloque-" + i[4]).css("top", "261px");
    $("#bloque-" + i[4]).css("left", "104px");
    $("#bloque-" + i[5]).css("top", "261px");
    $("#bloque-" + i[5]).css("left", "305px");
    $("#bloque-" + i[6]).css("top", "261px");
    $("#bloque-" + i[6]).css("left", "506px");
    $("#bloque-" + i[7]).css("top", "261px");
    $("#bloque-" + i[7]).css("left", "707px");
    $("#bloque-" + i[8]).css("top", "462px");
    $("#bloque-" + i[8]).css("left", "104px");
    $("#bloque-" + i[9]).css("top", "462px");
    $("#bloque-" + i[9]).css("left", "305px");
    $("#bloque-" + i[10]).css("top", "462px");
    $("#bloque-" + i[10]).css("left", "506px");
    $("#bloque-" + i[11]).css("top", "462px");
    $("#bloque-" + i[11]).css("left", "707px");

    num = 401;

    tiempo = setInterval("cuentaRegresiva()", 1000);
}

// CUENTA REGRESIVA O PUZZLE COMPLETADO

function cuentaRegresiva() {
    document.getElementById("tiempo").style.display = "block";
    
    num = num - 1;
    document.getElementById("contenedor-tiempo").innerHTML = num;

    if ($("#bloque-1").css("top") == "60px" && $("#bloque-1").css("left") == "104px" &&
        $("#bloque-2").css("top") == "60px" && $("#bloque-2").css("left") == "305px" && 
        $("#bloque-3").css("top") == "60px" && $("#bloque-3").css("left") == "506px" &&
        $("#bloque-4").css("top") == "60px" && $("#bloque-4").css("left") == "707px" &&
        $("#bloque-5").css("top") == "261px" && $("#bloque-5").css("left") == "104px" &&
        $("#bloque-6").css("top") == "261px" && $("#bloque-6").css("left") == "305px" &&
        $("#bloque-7").css("top") == "261px" && $("#bloque-7").css("left") == "506px" &&
        $("#bloque-8").css("top") == "261px" && $("#bloque-8").css("left") == "707px" &&
        $("#bloque-9").css("top") == "462px" && $("#bloque-9").css("left") == "104px" &&
        $("#bloque-10").css("top") == "462px" && $("#bloque-10").css("left") == "305px" &&
        $("#bloque-11").css("top") == "462px" && $("#bloque-11").css("left") == "506px" &&
        $("#bloque-12").css("top") == "462px" && $("#bloque-12").css("left") == "707px"
        ) {
        clearInterval(tiempo);
        document.getElementById("container-win").style.display = "block";
        document.getElementById("completed").innerHTML = "Tiempo: " + num + "s";
    }

    if (num == 0) {
        clearInterval(tiempo);
        document.getElementById("tiempo").style.display = "none";

        const element = document.querySelector('#contenedor');
        element.classList.add('animate__animated', 'animate__fadeOutDownBig');

        element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__fadeOutDownBig');
        });

        i = [1,2,3,4,5,6,7,8,9,10,11,12];

        $("#bloque-" + i[0]).css("top", "60px");
        $("#bloque-" + i[0]).css("left", "104px");
        $("#bloque-" + i[1]).css("top", "60px");
        $("#bloque-" + i[1]).css("left", "305px");
        $("#bloque-" + i[2]).css("top", "60px");
        $("#bloque-" + i[2]).css("left", "506px");
        $("#bloque-" + i[3]).css("top", "60px");
        $("#bloque-" + i[3]).css("left", "707px");
        $("#bloque-" + i[4]).css("top", "261px");
        $("#bloque-" + i[4]).css("left", "104px");
        $("#bloque-" + i[5]).css("top", "261px");
        $("#bloque-" + i[5]).css("left", "305px");
        $("#bloque-" + i[6]).css("top", "261px");
        $("#bloque-" + i[6]).css("left", "506px");
        $("#bloque-" + i[7]).css("top", "261px");
        $("#bloque-" + i[7]).css("left", "707px");
        $("#bloque-" + i[8]).css("top", "462px");
        $("#bloque-" + i[8]).css("left", "104px");
        $("#bloque-" + i[9]).css("top", "462px");
        $("#bloque-" + i[9]).css("left", "305px");
        $("#bloque-" + i[10]).css("top", "462px");
        $("#bloque-" + i[10]).css("left", "506px");
        $("#bloque-" + i[11]).css("top", "462px");
        $("#bloque-" + i[11]).css("left", "707px");
    }
}

// FUNCION PARA REPETIR EL JUEGO

function repetir() {
    document.getElementById("container-win").style.display = "none";
    imagen();
}

// FUNCION PARA EL BOTON DE VOLER AL INICIO

function btnVolver() {
    clearInterval(tiempo);
    document.getElementById("tiempo").style.display = "none";
    document.getElementById("juego").style.display = "none";
    document.getElementById("menu").style.display = "block";

    i = [1,2,3,4,5,6,7,8,9,10,11,12];

        $("#bloque-" + i[0]).css("top", "60px");
        $("#bloque-" + i[0]).css("left", "104px");
        $("#bloque-" + i[1]).css("top", "60px");
        $("#bloque-" + i[1]).css("left", "305px");
        $("#bloque-" + i[2]).css("top", "60px");
        $("#bloque-" + i[2]).css("left", "506px");
        $("#bloque-" + i[3]).css("top", "60px");
        $("#bloque-" + i[3]).css("left", "707px");
        $("#bloque-" + i[4]).css("top", "261px");
        $("#bloque-" + i[4]).css("left", "104px");
        $("#bloque-" + i[5]).css("top", "261px");
        $("#bloque-" + i[5]).css("left", "305px");
        $("#bloque-" + i[6]).css("top", "261px");
        $("#bloque-" + i[6]).css("left", "506px");
        $("#bloque-" + i[7]).css("top", "261px");
        $("#bloque-" + i[7]).css("left", "707px");
        $("#bloque-" + i[8]).css("top", "462px");
        $("#bloque-" + i[8]).css("left", "104px");
        $("#bloque-" + i[9]).css("top", "462px");
        $("#bloque-" + i[9]).css("left", "305px");
        $("#bloque-" + i[10]).css("top", "462px");
        $("#bloque-" + i[10]).css("left", "506px");
        $("#bloque-" + i[11]).css("top", "462px");
        $("#bloque-" + i[11]).css("left", "707px");
}