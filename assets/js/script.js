// Inicio de function//
$(function(){ 
    
// 1.-NAVBAR-Inverse //
    var nav = document.querySelector('nav');
        window.addEventListener('scroll', function() {
        if (window.pageYOffset >200) {
        nav.classList.add('bg-dark', 'shadow');
        } 
        else {
        nav.classList.remove('bg-dark', 'shadow');
        }
    });

// 2.-TOOLTIPS (boton de formulario) //
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
// 3.-EVENTO-click-alert enviar correo //
 $("#enviar").click(function(){
    alert("¡Gracias por contactarnos!");
    });

// 4.-POPOVER (boton facebook)
    var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

}); // cierre de function //