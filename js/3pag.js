window.onload = iniciar; 
 
//variable global, que puede ser accedida desde  
//cualquier funcion, y que a su vez es estatica  
//es decir va a mantener su valor en cualquier funcion  
 
var numeros = 0;
var nume = 0;

function iniciar() {  //este es el boton
    document.getElementById("boton_mas").onclick = mostrarNumero; 
}  
 
function mostrarNumero() {     
    //indicamos que el elemento con id total, tendra en su interior          
    //el valor de la variable numeros. La aumentamos con cada click       
    //en el boton       
                           // este es la cajita donde se ve el numero
    document.getElementById("cajita1").innerHTML = ++numeros; 
} 