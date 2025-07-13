
  // Wait for DOM to fully load
  document.addEventListener('DOMContentLoaded', function () {
    // ========================
    // Nav menu toggle
    // ========================
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    // ========================
    // Swiper initialization for home section
    // ========================
    const swiperHome = new Swiper('.home-swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 16,
      slidesPerView: 1,
    });

    // ========================
    // Swiper initialization for testimonial section
    // ========================
    const swiperTestimonial = new Swiper('.testimonial-swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 48,
      slidesPerView: 1,
    });

    // ========================
    // Dark theme toggle with icon switch
    // ========================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const darkThemeClass = 'dark-theme';

    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add(darkThemeClass);
      themeToggleBtn.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle(darkThemeClass);
      themeToggleBtn.classList.toggle('fa-moon');
      themeToggleBtn.classList.toggle('fa-sun');

      if (body.classList.contains(darkThemeClass)) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

    // ========================
    // ScrollReveal animation
    // ========================
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      // reset: true // Uncomment this line to re-trigger animations on scroll
    });

    sr.reveal('.home--container, .testimonial--container, .footer--container');
    sr.reveal('.home--title', { delay: 600 });
    sr.reveal('.home--description', { delay: 900 });
    sr.reveal('.home--data .button', { delay: 1200 });
    sr.reveal('.destination-card, .gallery--card', { interval: 100 });
    sr.reveal('.contact--data', { origin: 'left' });
    sr.reveal('.contact--img', { origin: 'right' });
  });

  // ========================
  // Change header background on scroll
  // ========================
  const bgHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('bg-header');
    } else {
      header.classList.remove('bg-header');
    }
  };
  window.addEventListener('scroll', bgHeader);

  // ========================
  // Scroll active link in nav menu
  // ========================
  const sections = document.querySelectorAll('section[id]');
  const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector('.nav--menu a[href*=' + sectionId + ']');
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active-link');
        } else {
          link.classList.remove('active-link');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollActive);

  // ========================
  // Scroll-Up Button Logic
  // ========================
  const scrollUp = () => {
    const scrollUpBtn = document.querySelector('.scrollup');
    if (window.scrollY >= 350) {
      scrollUpBtn.classList.add('show-scroll');
    } else {
      scrollUpBtn.classList.remove('show-scroll');
    }
  };
  window.addEventListener('scroll', scrollUp);

