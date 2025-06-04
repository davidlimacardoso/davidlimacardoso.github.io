/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //
 
 $(document).ready(function(){
      
	$('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

      
	$('.testimonial-slider').slick({
          autoplay: false,
          autoplaySpeed: 4000,
          fade: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
	});

});



// close when click off of container
$(document).ready(function () {
    $('#menu-btn').on('click', function () {
        var x = document.getElementById("navigation");
        x.className = (x.className === "top-menu") ? "top-menu menu-bar" : "top-menu";
    });

    $('#close-btn').on('click', function () {
        var x = document.getElementById("navigation");
        x.className = "top-menu";
    });
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});



})(jQuery);

const phrases = [
            "Hello World, I’m David Cardoso ;D",
            "Welcome to my portfolio!",
            "I'm a Support, DevOps & SRE.",
            "Let's build something great!"
        ];
        let currentPhraseIndex = 0;
        let index = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                // Remove a letra
                if (index > 0) {
                    document.getElementById("text").innerHTML = currentPhrase.substring(0, index - 1);
                    index--;
                    setTimeout(type, 50); // Ajuste a velocidade de apagamento
                } else {
                    isDeleting = false;
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Muda para a próxima frase
                    setTimeout(type, 1000); // Pausa antes de começar a digitar
                }
            } else {
                // Adiciona a letra
                if (index < currentPhrase.length) {
                    document.getElementById("text").innerHTML = currentPhrase.substring(0, index + 1);
                    index++;
                    setTimeout(type, 100); // Ajuste a velocidade de digitação
                } else {
                    isDeleting = true; // Começa a apagar
                    setTimeout(type, 2000); // Pausa antes de apagar
                }
            }
        }

        type();