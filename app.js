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
