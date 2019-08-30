let velocidad = 0;

while (velocidad >= 200) {
  console.log(velocidad);

  velocidad += 1;
}

// variables
let kilometros = Math.floor(Math.random() * (300 - 150 + 1) + 150);
let paradas = Math.floor(Math.random() * 3 + 1);

let tiempoParada = parseInt(Math.random() * 5) + 1;

let distancia_parada = Math.floor(Math.round(kilometros / paradas) - 50);

if (tiempoParada === kilometros) {
  tiempoParada -= 100;
}

console.log("tu recorrido es de " + kilometros + " kilometros");
console.log("tendras " + paradas + " parada");
console.log("que demorara " + tiempoParada + " segundos");
console.log(distancia_parada);

function variables() {
  document.getElementById("variables").textContent =
    "Tu recorrido es de : " +
    kilometros +
    "km. " +
    "        Tendras  : " +
    paradas +
    " Paradas." +
    "         Que demorara : " +
    tiempoParada +
    " Segundos." +
    "         Distancia de paradas : " +
    distancia_parada;
}
variables();

//condicionales arranque

class Carro {
  constructor() {
    this.encendido = false;
    this.cambios = 0;
    this.frenoMano = false;
    this.direccionales = 0;
    this.direccion = 0;
    this.neutra = false;
  }
  ponerDireccion(algo) {
    if (this.verificarDireccionales() === algo) {
      this.direccion = algo;
      //console.log("Direccion hacia", this.direccion);
      document.getElementById("texto").innerHTML = "Estas Girando ";
      this.direccion;
    } else {
      //console.log("error, ponga la direcional en", algo);
      document.getElementById("texto").innerHTML =
        "Error, ponga la Direcional ";
      algo;
    }
  }
  verificarDireccion() {
    return this.direccion;
  }
  ponerDireccionales(algo) {
    if (this.encendido === true) {
      this.direccionales = algo;
      // console.log("Direccional en", this.direccionales);
      (document.getElementById("texto").innerHTML = "Direccional Activada "),
        this.direccionales;
    } else {
      //console.log("porfavor encienda el auto");
      document.getElementById("texto").innerHTML = "Por favor Encienda el Auto";
    }
  }
  verificarDireccionales() {
    return this.direccionales;
  }
  ponerFrenoMano() {
    this.frenoMano = true;
    document.getElementById("texto").innerHTML = "Pusiste Freno Mano";
    this.frenoMano;
  }
  verificarFrenoMano() {
    return this.frenoMano;
  }
  ponerNeutra() {
    this.neutra = true;
    console.log("(neutra esta activada)", this.neutra);
    document.getElementById("texto").innerHTML = "Esta en Neutra";
  }
  varificarNeutra() {
    return this.neutra;
  }

  encender() {
    if (this.varificarNeutra() === true && this.verificarFrenoMano() === true) {
      this.encendido = true;
      // console.log("(encender)", this.encendido);
      (document.getElementById("texto").innerHTML = "Haz Encendido el Auto"),
        this.encendido;
    } else {
      /* console.log(
        "error , verifiuque que el auto este en neutra y tenga puesto el freno de mano"
      );*/

      document.getElementById("texto").innerHTML =
        "Error , verifique que el auto este en Neutra y tenga puesto el Freno de Mano";
    }
  }
}

console.log("este es el index");
let miCarro = new Carro();
console.log(miCarro);

//eventos

function addEvent(query, event, callback) {
  document.querySelectorAll(query)[0].addEventListener(event, callback);
}

addEvent("#derecha", "click", function() {
  //console.log("derecha");
  document.getElementById("derecha").style.opacity = 1;
  miCarro.ponerDireccionales();
});

addEvent("#derecha", "dblclick", function() {
  document.getElementById("derecha").style.opacity = 0.5;
});

addEvent("#izquierda", "click", function() {
  //console.log("izquierda");
  document.getElementById("izquierda").style.opacity = 1;

  miCarro.ponerDireccionales();
});
addEvent("#izquierda", "dblclick", function() {
  document.getElementById("izquierda").style.opacity = 0.5;
});

addEvent("#clut", "click", function() {
  console.log("clutch");
});

addEvent("#frenomano", "click", function() {
  miCarro.ponerFrenoMano();
});

addEvent("#neutra", "click", function() {
  miCarro.ponerNeutra();
});

window.addEventListener("keydown", function(event) {
  //console.log("Pulsando tecla");
  //console.log(event.keyCode);
  let tecla = String.fromCharCode(event.keyCode);
  if (tecla === "L") {
    console.log("apretaste l");
  } else if (tecla === "R") {
    console.log("apretaste r");
  }
  miCarro.ponerDireccion();
});

var en = addEvent(".encender", "click", function() {
  miCarro.encender();
  setTimeout(function() {
    cajaCambios();
    let km = new Conducir();
    km.diskilometros();
  }, 3000);

  console.log("encendiste");
});
/*
miCarro.encender();
miCarro.ponerNeutra();
miCarro.ponerFrenoMano();
miCarro.ponerDireccion();
miCarro.ponerDireccionales();
miCarro.encender();
miCarro.ponerDireccionales();
miCarro.ponerDireccion();
*/

//cambios
//import { CAMBIOS } from "../utils/constants.js";

const CAMBIOS = {
  NEUTRO: 0,
  PRIMERA: 1,
  SEGUNDA: 2,
  TERCERA: 3,
  CUARTA: 4,
  QUINTA: 5,
  SEXTA: 6
};

class Cambios extends Carro {
  constructor() {
    this.cambio = CAMBIOS.NEUTRO;
    this.acelerar = false;
    this.frenar = false;
  }

  encendido() {
    if (this.cambio === CAMBIOS.NEUTRO) {
      console.log("puedes encender");
    } else {
      console.log("debes tener en neutra");
    }
  }

  frenar() {
    this.frenar = true;
  }

  acelerar() {
    this.acelerar = true;
  }

  freno = true;

  actualizarCambio(freno) {
    switch (this.cambio) {
      case CAMBIOS.NEUTRO:
        this.cambio = !freno && CAMBIOS.PRIMERA;
        break;

      case CAMBIOS.PRIMERA:
        this.cambio = freno ? CAMBIOS.NEUTRO : CAMBIOS.SEGUNDA;
        break;

      case CAMBIOS.SEGUNDA:
        this.cambio = freno ? CAMBIOS.PRIMERA : CAMBIOS.TERCERA;
        break;

      case CAMBIOS.TERCERA:
        this.cambio = freno ? CAMBIOS.SEGUNDA : CAMBIOS.CUARTA;
        break;

      case CAMBIOS.CUARTA:
        this.cambio = freno ? CAMBIOS.TERCERA : CAMBIOS.QUINTA;
        break;

      case CAMBIOS.QUINTA:
        this.cambio = freno ? CAMBIOS.CUARTA : CAMBIOS.SEXTA;
        break;

      case CAMBIOS.SEXTA:
        this.cambio = freno && CAMBIOS.QUINTA;
        break;

      default:
        console.log("Ha habido un error");
        break;
    }
  }
}

//let cambios = new Car();

//cambios.actualizarCambio(true);
let tiempo = 0;
let distancia = 0;
let maxtiempo = 60;
let maxdistancia = 800;
let aceleracion = 0;

class Conducir {
  contador() {
    let intervalo = setInterval(function() {
      tiempo += 1;
      console.log("0" + tiempo);
      document.getElementById("contador").innerHTML = "TIEMPO : " + tiempo;
      if (tiempo === kilometros) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  diskilometros() {
    let kil = setInterval(function() {
      distancia += 1;
      console.log(kilometros);
      document.getElementById("contadora").innerHTML =
        "KILOMETROS : " + distancia;

      if (distancia < kilometros) {
      }
      if (distancia === kilometros) {
        var lim = clearInterval(kil);
      }
    }, 100);
  }

  /* acelera() {
    let ac = setInterval(function() {
      velocidad += 1;

      if (velocidad === 50) {
        velocidad = 50;
      } else {
        setInterval(function() {
          velocidad -= 1;
        });
      }
      //  clearInterval(ac);
      console.log(velocidad);
    }, 100);
  }*/
}

let inicio = new Conducir();
inicio.contador();

//let mitad = new Conducir();
//mitad.acelera();

console.log("clutch");
console.log("1");
console.log("acelerar");
console.log("soltar clutch");

var cambios = 0;
var clutch = 0;
var acelero = 0;
function cajaCambios() {
  cambios = 1;
  if (cambios === 1) {
    setTimeout(function() {
      document.getElementById("neutra").style.backgroundColor = "green";
      document.getElementById("corrido").innerHTML = "Neutra";
      console.log("neutra");
    }, 1000);
  }

  cambios = 2;
  clutch = 1;

  if (cambios === 2) {
    setTimeout(function() {
      document.getElementById("neutra").style.backgroundColor = "darkgray";
      document.getElementById("acelerador").style.backgroundColor = "green";

      document.getElementById("clut").style.backgroundColor = "green";

      let color1 = (document.getElementById("primera").style.backgroundColor =
        "green");
      document.getElementById("corrido").innerHTML = "Primera ";

      console.log("Primera");
    }, 3000);
  }

  cambios = 3;
  if (cambios === 3) {
    setTimeout(function() {
      document.getElementById("primera").style.backgroundColor = "darkgray";
      document.getElementById("segunda").style.backgroundColor = "green";
      document.getElementById("corrido").innerHTML = "Segunda ";

      console.log("segunda");
    }, 5000);
  }
  cambios = 4;
  if (cambios === 4) {
    setTimeout(function() {
      document.getElementById("segunda").style.backgroundColor = "darkgray";
      document.getElementById("tercera").style.backgroundColor = "green";
      document.getElementById("corrido").innerHTML = "Tercera ";

      console.log("tercera");
    }, 8000);
  }
  cambios = 5;
  if (cambios === 5) {
    setTimeout(function() {
      document.getElementById("tercera").style.backgroundColor = "darkgray";
      document.getElementById("cuarta").style.backgroundColor = "green";
      document.getElementById("acelero").style.backgroundColor = "darkgray";

      document.getElementById("corrido").innerHTML = "Cuarta ";

      console.log("cuarta");
    }, 11000);
  }
  cambios = 6;
  if (cambios === 6) {
    setTimeout(function() {
      document.getElementById("cuarta").style.backgroundColor = "darkgray";
      document.getElementById("quinta").style.backgroundColor = "green";
      document.getElementById("corrido").innerHTML = "Quinta ";

      console.log("quinta");
    }, 14000);
  }
  cambios = 7;
  if (cambios === 7) {
    setTimeout(function() {
      document.getElementById("quinta").style.backgroundColor = "darkgray";
      document.getElementById("sexta").style.backgroundColor = "green";
      document.getElementById("corrido").innerHTML = "Sexta ";

      console.log("sexta");
    }, 17000);
  }
}
function funcionar() {
  if (this.encender() === true) {
    cajaCambios();
  }
}
frenar = 0;
