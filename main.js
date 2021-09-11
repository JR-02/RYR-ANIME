// Comienzo de la sección de carga de la página

window.onload = function(){
    var contenedor = document.getElementById('contenido-carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
};

// Fin de la sección de carga de la página

// Comienzo de la sección de Carousel

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        rewind: true,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 800px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                rewind: true,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rewind: true,
                draggable: false,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});

// Fin de la sección de Carousel

// Comienzo de la sección del Botón "Ir arriba"

document.getElementById("ir-arriba").addEventListener("click", scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0){
      window.requestAnimationFrame(scrollUp);
      window.scrollTo (0, currentScroll - (currentScroll / 5));
  }
}

buttonUp = document.getElementById("ir-arriba");

window.onscroll = function(){

  var scroll = document.documentElement.scrollTop;

  if (scroll > 300) {
    buttonUp.style.transform = "scale(1)";
  } else if(scroll < 300){
    buttonUp.style.transform = "scale(0)";
  }

}

/*$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});*/

// Fin de la sección del Botón "Ir arriba"

// Navbar Responsive

var pushbar = new Pushbar({
    blur: true,
    overlay: true
});