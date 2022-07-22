function resolver100(){
    var num= parseFloat(document.digito.Numero.value);  

if(num>=1.0 & num<=9.9){  // SI NUM ES MAYOR O IGUAL QUE 0 Y NUM ES MENOR O IGUAL QUE 9 SE EJECUTA ESTA CONDICION
alert("Este numero tiene 1 cifra");
document.digito.rta.value=("Este numero tiene 1 cifra");
}
else if(num>=10 & num<=99){ 
alert("Este numero tiene 2 cifra");
document.digito.rta.value=("Este numero tiene 2 cifra"); 
} 
else if(num>=100 & num<=999){ 
alert("Este numero tiene 3 cifra");
document.digito.rta.value=("Este numero tiene 3 cifra"); 
} 
else if(num>=1000 & num<=9999){ 
alert("Este numero tiene 4 cifra");
document.digito.rta.value=("Este numero tiene 4 cifra"); 
} 
else if(num>=10000 & num<=99999){ 
alert("Este numero tiene 5 cifra");
document.digito.rta.value=("Este numero tiene 5 cifra"); 
} 
else if(num>=100000 & num<=999999){ 
alert("Este numero tiene 6 cifra");
document.digito.rta.value=("Este numero tiene 6 cifra"); 
} 
else if(num>=1000000){ 
alert("Este numero supera los digitos requeridos");
document.digito.rta.value=("Este numero supera los digitos requeridos"); 
} 
}