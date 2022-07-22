function Mostrar_tabla(){

    var n= parseInt(document.tabla.numero.value);

    var r="";
    for ( var i = 1; i <= 10; i++ ) {
        r= r + n +"x" + i +"=" + (n*i) +"<br>";
b
    }

    var capa_result=document.getElementById("resultado");

    capa_result.innerHTML=r;



}