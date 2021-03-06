const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    //burger animate
    burger.classList.toggle('toggle');
  });
};

navSlide();

function imageGallery() {
  const highlight = document.querySelector('.gallery-highlight');
  const previews = document.querySelectorAll('.img-preview img');

  previews.forEach(preview => {
    preview.addEventListener('click', function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace('small', 'big');
      highlight.src = bigSrc;
      previews.forEach(preview => preview.classList.remove('img-active'));
      preview.classList.add('img-active');
    });
  });
}

imageGallery();

function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add('bg-active');
  } else {
    document.body.classList.remove('bg-active');
  }
}
window.addEventListener('scroll', bgChanger);
////////////////////////////////////////

const track = document.querySelector('[data-track]');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('[data-button-next]');
const prevBtn = document.querySelector('[data-button-prev]');
const navDots = document.querySelector('[data-dots-nav]');
const dots = Array.from(navDots.children);
let counter = 1;

//This is the first slide that needs to pushed to the end
const firstSlide = slides[0];
const firstSlideClone = firstSlide.cloneNode(true);
firstSlideClone.setAttribute('id', 'last-clone');

track.appendChild(firstSlideClone);
slides.push(firstSlideClone);

//This is the last slide that needs to be unshifted to the front
const lastSlide = slides[slides.length - 2];
const lastSlideClone = lastSlide.cloneNode(true);
lastSlideClone.setAttribute('id', 'first-clone');

track.appendChild(lastSlideClone);
slides.unshift(lastSlideClone);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.transform = 'translateX(' + slideWidth * index + 'px' + ')';
};

slides.forEach(setSlidePosition);

track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';

const firstDot = dots[0];
const lastDot = dots[dots.length - 1];

firstDot.classList.add('delete-dots');
lastDot.classList.add('delete-dots');

// Function for the dots
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove('active-dot');
  targetDot.classList.add('active-dot');
}
//setTimerout function!
window.onload = () => {
  setInterval(function() {
    if (counter >= slides.length - 1) return;
    track.style.transition = 'transform 400ms ease';
    counter++;
    track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';

    const currentDot = navDots.querySelector('.active-dot');
    const nextDot = currentDot.nextElementSibling;

    updateDots(currentDot, nextDot);
  }, 3500);
};

nextBtn.addEventListener('click', e => {
  if (counter >= slides.length - 1) return;
  track.style.transition = 'transform 400ms ease-in-out';
  counter++;
  track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';

  const currentDot = navDots.querySelector('.active-dot');
  const nextDot = currentDot.nextElementSibling;

  updateDots(currentDot, nextDot);
});

prevBtn.addEventListener('click', e => {
  if (counter <= 0) return;
  track.style.transition = 'transform 400ms ease';
  counter--;
  track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';

  const currentDot = navDots.querySelector('.active-dot');
  const prevDot = currentDot.previousElementSibling;

  updateDots(currentDot, prevDot);
});

// Dots caode
navDots.addEventListener('click', e => {
  clickedDot = e.target.closest('button');
  if (clickedDot === null) {
    return;
  }

  targetIndex = dots.findIndex(dot => dot === clickedDot);
  track.style.transition = 'transform 400ms ease';
  counter = targetIndex;

  track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';

  const currentDot = navDots.querySelector('.active-dot');
  updateDots(currentDot, clickedDot);
});

track.addEventListener('transitionend', () => {
  if (slides[counter].id === 'last-clone') {
    track.style.transition = 'none';
    updateDots(dots[dots.length - 1], dots[1]);
    counter = slides.length - counter;
    track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
  }
  if (slides[counter].id === 'first-clone') {
    track.style.transition = 'none';
    updateDots(dots[0], dots[dots.length - 2]);
    counter = slides.length - 2;
    track.style.transform = 'translateX(' + -slideWidth * counter + 'px)';
  }
});

////////////////////////////////////////////////////
const texts = ['...', 'websites', 'illustrations', 'pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
///////////////////////////
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  }
});
////////////////////////
