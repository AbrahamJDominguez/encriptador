const valorDesen = ['a','e','i','o','u'];
const valorEn = ['ai','enter','imes','ober','ufat'];

function estadoImg(){
    var parrafo = document.getElementsByTagName("textarea").value;
    if(parrafo.length>1){
        document.getElementById("vacio").style.display = "none";
    }
    else{
        document.getElementById("vacio").style.display = "";
    }
}