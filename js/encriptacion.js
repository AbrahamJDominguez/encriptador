const valorDesen = ['a','e','i','o','u'];
const valorEn = ['ai','enter','imes','ober','ufat'];

function obtenText(){
    var parrafo = document.querySelector("textarea").value;
    return parrafo
}

function estadoImg(parrafo){
    if(parrafo.length>1){
        document.querySelector("#vacio").style.display = "none";
        document.querySelector("#novacio").style.display = "block";
    }
    else{
        document.querySelector("#vacio").style.display = "block";
        document.querySelector("#novacio").style.display = "none";
    }
}

function encriptar(){
    var parrafo = obtenText();
    estadoImg(parrafo);
    parrafo = parrafo.replaceAll(valorDesen[1], valorEn[1]).
        replaceAll(valorDesen[2], valorEn[2]).replaceAll(valorDesen[0], valorEn[0]).
        replaceAll(valorDesen[3], valorEn[3]).replaceAll(valorDesen[4], valorEn[4])
    document.querySelector("#texto").innerHTML = parrafo;
    
}

function desencriptar(){
    var parrafo = obtenText();
    estadoImg(parrafo);
    parrafo = parrafo.replaceAll(valorEn[4], valorDesen[4]).
        replaceAll(valorEn[3], valorDesen[3]).replaceAll(valorEn[0], valorDesen[0]).
        replaceAll(valorEn[2], valorDesen[2]).replaceAll(valorEn[1], valorDesen[1])
    document.querySelector("#texto").textContent = parrafo;
    
}

function copiar(){
    var texto = document.querySelector("#texto").textContent;
    navigator.clipboard.writeText(texto);
}

document.querySelector("#enc").onclick = encriptar;
document.querySelector("#des").onclick = desencriptar;
document.querySelector("#copiar").onclick = copiar;
