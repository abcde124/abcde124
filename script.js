// logica pra interagir user/bot/site
if (window.Telegram && window.Telegram.WebApp) {
  const telegram = window.Telegram.WebApp;
  // Inicialize e use o SDK conforme necessário
} else {
}

// Add toggle class .active
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const elipsisButton = card.querySelector('.box-elipsis');
    const description = card.querySelector('.description');

    function toggleDescription(event) {
      if (event.type === 'touchstart') event.preventDefault();

      // Alterna a classe active em ambos os elementos
      elipsisButton.classList.toggle('active');
      description.classList.toggle('active');
    }

    elipsisButton.addEventListener('click', toggleDescription);
    elipsisButton.addEventListener('touchstart', toggleDescription);
  });
});

// Menu button
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Settings cards
var swiper2 = new Swiper(".slider-wrapper-2", {
  grabCursor: true,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 2.2,
    },
    670: {
      slidesPerView: 3.1,
    },
    1024: {
      slidesPerView: 4.1,
    }
  }
});

var swiper3 = new Swiper(".slider-wrapper-3", {
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    321: {
      slidesPerView: 2.2,
    },
    670: {
      slidesPerView: 3.1,
    },
    1024: {
      slidesPerView: 4.1,
    }
  }
});



