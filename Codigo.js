var aleatorio;
var intentos = 0;

function generarEntero(a=0 ,b=100){
    aleatorio = parseInt(Math.abs(b-a + 1) * Math.random());
}

generarEntero()


function validarNumero(){

    var a = parseInt(document.getElementById("ok").value)
    document.getElementById("intentos").innerHTML = "Has realizado " + (intentos + 1) + " intentos.";
    if(Number.isInteger(a)){
        if (a==aleatorio) {        
            document.getElementById("pista").innerHTML = "";
            document.getElementById("intentos").innerHTML = "Has realizado 0 intentos.";
            alert("Felicidades has adivinado el numero");
            intentos = 0;
            generarEntero()
        }else if(a>aleatorio){
            document.getElementById("pista").innerHTML = "Pista: el numero magico es menor al que ingresaste";
            intentos += 1;
        }else{
            document.getElementById("pista").innerHTML = "Pista: el numero magico es mayor al que ingresaste";
            intentos += 1;
        }            
    } else  {        
        alert("Debes ingresar un numero")
        intentos += 1;
    }
}