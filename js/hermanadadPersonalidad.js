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
function cambiar_div(origen, destino, r) {
    $(origen).fadeOut(500);
    $(destino).fadeIn(2500);
    if (r=='a') {
        num_a++;
    } else if (r=='b') {
        num_b++;
    } else if (r=='c') {
        num_c++;
    } else if (r=='d') {
        num_d++;
    }
}

function calcular(r) {
    if (r=='a') {
        num_a++;
    } else if (r=='b') {
        num_b++;
    } else if (r=='c') {
        num_c++;
    } else if (r=='d') {
        num_d++;
    }
    var pag = 'a';
    if (num_b>num_a&&num_b>num_c&&num_b>num_d) {pag='b';}
    if (num_c>num_a&&num_c>num_b&&num_c>num_d) {pag='c';}
    if (num_d>num_a&&num_d>num_b&&num_d>num_c) {pag='d';}
    window.location=pag+".html";
}

var num_a = 0;
var num_b = 0;
var num_c = 0;
var num_d = 0;

// -------------FACEBOOK ------------
// TODO: Ver si es necesario algún #

window.onload = function() {
    FB.init({
        appId: '1166672466755694',
        xfbml: true,
        version: 'v2.8'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/es_LA/sdk.js";
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

function sharePedro() {
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

function shareJulio() {
    FB.ui({
        method: 'share',
        href: 'https://lahermandad.github.io/index_rol.html',
        description: 'Soy una persona misteriosa, pero brillante y sería capaz de poder controlar la mente humana en beneficio propio.',
        title: 'Soy como Julio de La Hermandad y tu ¿conoces cómo es tu personalidad?',
        picture: 'https://lahermandad.github.io/pic/q1_julio.jpg',
    }, function(response) {
        if (response && !response.error_message) {
            $('#lb_msj').text('link posteado' + response.post_id);
        } else {
            $('#lb_msj').text('error ...');
        }
    });
}

function shareLuisa() {
    FB.ui({
        method: 'share',
        href: 'https://lahermandad.github.io/index_rol.html',
        description: 'Soy una persona valiente, leal y noble. Sería capaz de poder combatir la corrupción en altas esferas de la política.',
        title: 'Soy como Luisa de La Hermandad y tu ¿conoces cómo es tu personalidad?',
        picture: 'https://lahermandad.github.io/pic/q1_luisa.jpg',
    }, function(response) {
        if (response && !response.error_message) {
            $('#lb_msj').text('link posteado' + response.post_id);
        } else {
            $('#lb_msj').text('error ...');
        }
    });
}

function shareMilena() {
    FB.ui({
        method: 'share',
        href: 'https://lahermandad.github.io/index_rol.html',
        description: 'Soy una persona soñadora y fantaseo con el mundo ideal; sería capaz de cautivar a cualquiera, porque se el impacto que provoco en los demás.',
        title: 'Soy como Milena de La Hermandad y tu ¿conoces cómo es tu personalidad?',
        picture: 'https://lahermandad.github.io/pic/q1_milena.jpg',
    }, function(response) {
        if (response && !response.error_message) {
            $('#lb_msj').text('link posteado' + response.post_id);
        } else {
            $('#lb_msj').text('error ...');
        }
    });
}
