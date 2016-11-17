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

// -------------FUNCTIONS ------------

/**
 * Oculta y muestra un div con display none
 * @param  {[div]} origen  [div de origen a ocultar]
 * @param  {[div]} destino [div de origen a mostrar]
 */
function cambiar_div(origen, destino) {
    $(origen).fadeOut(500);
    $(destino).fadeIn(2500);
}


// -------------FACEBOOK ------------
// TODO: Ver si es necesario algún #

window.onload = function() {
    FB.init({
        appId: '1166672466755694',
        xfbml: true,
        version: 'v2.8'
    });
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function shareStory() {
    FB.ui({
        method: 'share',
        href: 'https://lahermandad.github.io/index_rol.html',
        description: 'Soy una persona astuta y de gran inteligencia, capaz de cuidar con gran afición lo que amo, pero cuidado con los que se metan en mi camino.',
        title: 'Soy como Pedro de La Hermandad. ¿Tú conoces cómo es tu personalidad?',
        picture: 'https://lahermandad.github.io/pic/q1_pedro.jpg',
    }, function(response) {
        if (response && !response.error_message) {
            $('#lb_msj').text('link posteado' + response.post_id);
        } else {
            $('#lb_msj').text('error ...');
        }
    });
}
