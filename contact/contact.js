//переход на соседние страницы по стрелкам
const right = document.querySelector(".right");  //стрелка направо
right.addEventListener ("click", function(){
    document.location.assign ("../index.html");
})

const left = document.querySelector(".left");  //стрелка налево
left.addEventListener ("click", function(){
    document.location.assign ("../portfolio/portfolio.html");
})

const buttonAbout = document.querySelector(".buttonAbout");
buttonAbout.addEventListener ("click", function(){
    document.location.assign ("../index.html");
})
const buttonPortfolio = document.querySelector(".buttonPortfolio");
buttonPortfolio.addEventListener ("click", function(){
    document.location.assign ("../portfolio/portfolio.html");
})

gsap.from (".heading", {
    x: -300,
    opacity:0,
    duration: 2,
})
gsap.from (".par", {
    opacity:0,
    duration: 3,
})
gsap.from (".btn", {
    delay: 2,
    x: 300,
    opacity:0,
    duration: 2,
    ease: Bounce.easeOut,
});
gsap.from ("#headerButtom", {
    x: 300,
    opacity:0,
    duration: 2,
});
gsap.from ("#facebook", {
    x: -300,
    duration: 1,
    opacity: 0,
    ease: Power0.easeNone,
});
gsap.from ("#github", {
    x: 300,
    duration: 1,
    opacity: 0,
    ease: Power0.easeNone,
});
gsap.from ("#linkedin", {
    delay: 0.3,
    y: 100,
    duration: 1,
    opacity: 0,
    ease: Power0.easeNone,
});

gsap.from ("#btnAbout", {
    x: -300,
    duration: 1,
    opacity: 0,
});
gsap.from (".buttonPortfolio", {
    x: 600,
    duration: 1.5,
    opacity: 0,
});