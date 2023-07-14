gsap.to("#heading", {
    text: "Hello, my name is Ilya Kamyshev.",
    delay: 0,
    duration: 2, 
    ease: Power0.easeNone,
  })

  gsap.to("#textOne", {
    text: "I am an award-winning front-end developer.", 
    delay: 2.2,
    duration: 2, 
    ease: Power0.easeNone,
  })

  gsap.to("#textTwo", {
    text: "Look at my projects on the web portfolio page.", 
    delay: 5,
    duration: 2, 
    ease: Power0.easeNone,
  })

  gsap.to("#textThree", {
    text: "Contact me by email: kamyshevik@gmail.com", 
    delay: 7,
    duration: 2, 
    ease: Power0.easeNone,
  })

//burger menu
const wrapper = document.querySelector (".wrapper");
const nav = document.querySelector('.nav');
nav.addEventListener('click',(event) => {
  nav.style.display = "none";
    nav.classList.toggle('open');
    burgerMenuShow()
});

function burgerMenuShow(){

  const container = document.querySelector ('.container');
  const header = document.querySelector (".header");
  const arrowDiv = document.querySelector(".arrowDiv");
  container.classList.add("containerShow");
  header.style.display = "none";
  arrowDiv.style.display = "none";
  gsap.to (".header", {
    y: 300,
    delay: 0,
    duration: 1,
    ease: Power0.easeNone,
    opacity: 0
  })
    gsap.from (".containerShow", {
      opacity: 0,
      y:-500,
      delay: 0,
      duration: 1, 
      ease: Power0.easeNone,
    })
  }

    const container = document.querySelector ('.container');
    const about = document.querySelector("#about");
    about.addEventListener("click", function(){
      container.classList.add("containerShow");
      gsap.to (".containerShow", {
        y: -600,
        delay: 0,
        duration: 1,
        ease: Power0.easeNone,
        opacity: 0
      })
      setTimeout(function() {location.reload()}, 1000);
    })

    const portfolio = document.querySelector ("#portfolio");
    portfolio.addEventListener("click", function(){
      container.classList.add("containerShow");
      gsap.to (".containerShow", {
        y: -600,
        delay: 0,
        duration: 1,
        ease: Power0.easeNone,
        opacity: 0
      })
      setTimeout(function() {document.location.assign("portfolio/portfolio.html")}, 1000);
    })
    
    const contact = document.querySelector ("#contact");
    contact.addEventListener("click", function(){
      container.classList.add("containerShow");
      gsap.to (".containerShow", {
        y: -600,
        delay: 0,
        duration: 1,
        ease: Power0.easeNone,
        opacity: 0
      })
      setTimeout(function() {document.location.assign("contact/contact.html")}, 1000);
    })


    // функция стрелки
    const arrowDiv = document.querySelector(".arrowDiv");  //стрелка
    arrowDiv.addEventListener ("click", function(){
        document.location.assign ("portfolio/portfolio.html");
    })

    // фоновая анимация
    /* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, //количество
      "density": {
        "enable": true,
        "value_area": 800 //плотность, чем меньше число, тем больше плотность
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, //толщина точек основания
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150, //длина лини
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, //скорость движения
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
/* ---- stats.js config ---- */


