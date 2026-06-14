document.addEventListener("DOMContentLoaded", function () {
  // Particle configuration object
  const particleConfig = {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 1100 } },
      color: { 
        value: "#edebad",
        random: true,
       },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#f7d54c" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: false, speed: 0.8, opacity_min: 0.3, sync: false }
      },
      size: {
        value: 7,
        random: true,
        anim: { enable: false, speed: 20, size_min: 1.5, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#edebad",
        opacity: .9,
        width: 0.3, 
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 7, duration: 1.5, opacity: 5, speed: 15 },
        repulse: { distance: 100, duration: 0.21 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  };

  // Initialize particles
  particlesJS("particles-js", particleConfig);

  // Stats initialization
  const stats = new Stats();
  stats.setMode(0);
  const statsElement = stats.domElement;
  statsElement.style.cssText = "position:absolute;left:0;top:0;";
  document.body.appendChild(statsElement);

  const countParticles = document.querySelector(".js-count-particles");
  const updateStats = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0]?.pJS?.particles?.array) {
      countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(updateStats);
  };
  requestAnimationFrame(updateStats);

  // Header transition
  setTimeout(function () {
    const header = document.querySelector(".initial-header");
    header.classList.add("header-transition");
    
    // Add code to display your logo and other header contents here
  }, 5000); // 5000 milliseconds (5 seconds)

  // Scroll event using jQuery
  const $tags = $(".tag");
  $(document).on("scroll", function () {
    const pageTop = $(document).scrollTop();
    const pageBottom = pageTop + $(window).height();
    
    $tags.each(function () {
      const $tag = $(this);
      if ($tag.position().top < pageBottom) {
        $tag.addClass("visible");
      } else {
        $tag.removeClass("visible");
      }
    });
  });

  /* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
 function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 }
 
});

const slides = document.querySelectorAll('.pic');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let curSlide = 0;
const maxSlide = slides.length;

const slideInterval = 3000; // 3 seconds

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    const translateXNum = 80 * (i - slide);
    let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
    if (translateXNum === 0) {
      translateYNum = 0;
      rotateDeg = 0;
      grayscaleNum = 0;
      zIndexNum = 1;
      opacityNum = 100;
    } else if (translateXNum < 0) {
      translateYNum = 5;
      rotateDeg = -5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 0;
    } else {
      translateYNum = 5;
      rotateDeg = 5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 0;
    }
    s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
    s.style.filter = `grayscale(${grayscaleNum})`;
    s.style.zIndex = zIndexNum;
    s.style.opacity = `${opacityNum}%`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

const startSlideShow = () => {
  // Start automatic slideshow using setInterval
  setInterval(nextSlide, slideInterval);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Start the slideshow when the page loads
startSlideShow();









