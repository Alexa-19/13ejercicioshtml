function km(){
    var kmm= parseFloat (document.converciones.Numero1.value);

    document.converciones.conver1.value=( "Su converción es:" +(kmm/1000));  
}

function deca(){
    var decaa= parseFloat (document.converciones.Numero2.value);

    document.converciones.conver2.value=( "Su converción es:" +(decaa/10));  
}

function deci(){
    var decii= parseFloat (document.converciones.Numero3.value);

    document.converciones.conver3.value=( "Su converción es:" +(decii*10));  
}

function cm(){
    var cmm= parseFloat (document.converciones.Numero4.value);

    document.converciones.conver4.value=( "Su converción es:" +(cmm*100));  
}
