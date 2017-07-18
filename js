var cadaNoscript, altoViewPort, desplazado, posicionCambio; 

function mueve() {
/* COLECCIÓN ACTUALIZADA DE noscript EN GALERÍA */
cadaNoscript = document.querySelectorAll("#galeria figure noscript"); 

altoViewPort = window.innerHeight; 

/* DISTANCIA SCROLL */
desplazado = self.pageYOffset || document.documentElement.scrollTop; 

/* desplazado + altoViewPort, PARA CAMBIAR LA ETIQUETA CUANDO LLEGUE AL BORDE INFERIOR DE LA VENTANA */
/*posicionCambio = desplazado + altoViewPort; */ //RECOMENDADO
posicionCambio = desplazado + altoViewPort - 250; //PARA "VER" EL CAMBIO 
//alert(desplazado+" "+altoViewPort+" "+posicionCambio)

/* PRUEBA LA DISTANCIA DE CADA IMAGEN, CUANDO ALGUNA LLEGA AL VIEWPORT elimina LA ETIQUETA noscript */
  for(ns=0; ns<cadaNoscript.length; ns++){
    if(cadaNoscript[ns].parentElement.offsetTop < posicionCambio){
    var codigo = cadaNoscript[ns].innerHTML; 
    //alert(codigo+"\r\n"+cadaNoscript[ns].offsetTop+ " "+posicionCambio); 

    codigo = codigo.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); 
    //alert(codigo); 

    cadaNoscript[ns].outerHTML = codigo; 
    }
  }
}

onscroll = mueve; 

