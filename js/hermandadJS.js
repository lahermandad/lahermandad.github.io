
$(document).ready(function() {
    setTimeout(function() {
        $('#txt_titulo').fadeIn(900);
    }, 500);
    setTimeout(function() {
        $('#txt_titulo').fadeOut(1000);
    }, 3000);
    setTimeout(function() {
        cambiar_div('#div_main', '#div_intro');
    }, 3000);
});

/* -------------FUNCTIONS ------------

/**
 * Oculta y muestra un div con display none
 * @param  {[div]} origen  [div de origen a ocultar]
 * @param  {[div]} destino [div de origen a mostrar]
 */
function cambiar_div(origen, destino) {
    $(origen).fadeOut(500);
    $(destino).fadeIn(2500);
}
