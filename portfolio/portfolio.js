gsap.to("#heading", {
    text: "web developer portfolio",
    duration: 2, 
    ease: Power0.easeNone,
  })

  gsap.from("#timer", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

  gsap.from("#weather", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

  gsap.from("#furnitures", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

  gsap.from("#restaurantApp", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

  gsap.from("#recipeApp", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

  gsap.from("#to-do-list", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: Power0.easeNone,
  })

const timer = document.querySelector ("#timer");
timer.addEventListener ("click", function(){
  window.open ("https://pet-project-1-timer.glitch.me", "_blanc")
})  

const weather = document.querySelector ("#weather");
weather.addEventListener ("click", function(){
  window.open ("https://weather-ilya.glitch.me", "_blanc")
})  

const furnitures = document.querySelector ("#furnitures");
furnitures.addEventListener ("click", function(){
  window.open ("https://furnitures-magazin.glitch.me", "_blanc")
})  

const restaurantApp = document.querySelector ("#restaurantApp");
restaurantApp.addEventListener ("click", function(){
  window.open ("https://restaurant-app-kamyshev.glitch.me ", "_blanc")
})  

const recipeApp = document.querySelector ("#recipeApp");
recipeApp.addEventListener ("click", function(){
  window.open ("https://recipe-search-app-georgia.glitch.me", "_blanc")
}) 

const todolist = document.querySelector ("#to-do-list");
todolist.addEventListener ("click", function(){
  window.open ("https://to-do-list-kamyshev.glitch.me", "_blanc")
}) 

//переход на соседние страницы по стрелкам
const arrowDivRight = document.querySelector("#arrowDivRight");  //стрелка направо
arrowDivRight.addEventListener ("click", function(){
    document.location.assign ("../contact/contact.html");
})
console.log(arrowDivRight)

const arrowDivLeft = document.querySelector("#arrowDivLeft");  //стрелка налево
arrowDivLeft.addEventListener ("click", function(){
    document.location.assign ("../index.html");
})
console.log(arrowDivLeft)

// скроллинг
// window.addEventListener('scroll', function() {
//   var element = document.querySelector('.scrolling-elementRight');
//   var scrollPosition = window.scrollY;
//     element.
//     element
//   style.top = (50 + scrollPosition / 2) + '%';
//   });
