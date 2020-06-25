function valida_envia() { 
    var campoNombre = document.getElementById("nombre");  
     //valido el nombre
     if (campoNombre.value.length == 0) {   
        alert( "Tiene que escribir su nombre");      
        campoNombre.focus();      
         return 0;    
         }

        }