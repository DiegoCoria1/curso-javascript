//  2. Crear un programa que solicite al usuario una contraseña y verifique si cumple con ciertos
//  criterios de seguridad. La contraseña debe cumplir con los siguientes requisitos para
//  considerarse válida: 
//  a. Debe tener al menos 8 caracteres de longitud.
//  b. Debe contener al menos una letra mayúscula.
//  c. Debe contener al menos un número.
//  d. Debe incluir al menos un carácter especial, como: !@#$%^&*()_+{}[]:;<>,.?~\-

let contraseña = prompt("Ingrese una nueva contraseña")
let contador = contraseña.length;
let x = 0
let caracter = contraseña.charAt(x)
  
if (contador <= 7 ){
alert ("Contraseña invalida, debe tener alemenos 8 caracteres");}
 
else if (x = 0, x <= contador, x++){
    caracter = Number;
    alert("Contraseña invalida, debe tener almenos un número");}

else if (x = 0, x <= contador, x++){
    caracter = UpperCase(contraseña);
    alert("Contraseña Invalida, debe tener almenos una Mayúscula")}

else if (x = 0, x <= contador, x++){
    caracter = "!","@","#","$","%","^","&","*","(",")","_","+","{","}","[","]",":",";","<",">",",",".","?","~",";";
    alert("Contraseña invalida, debe tener almenos un caracter especial");
}
else 
{alert("Contraseña Segura");}





  
