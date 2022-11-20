// Inicio de function//
$(function(){ 
    
// 1.-NAVBAR-Inverse //
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
    if (window.pageYOffset >200) {
      nav.classList.add('bg-dark', 'dark');
     } else {
      nav.classList.remove('bg-dark', 'dark');
     }
    });

// 2.-TOOLTIPS (boton de formulario) y (Icono Facebook) //
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
// 3.-EVENTO-click-alert enviar correo //
    $("#enviar").click(function(){
    alert("¡Gracias por contactarnos!");
    });

}); // cierre de function //