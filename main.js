



let header=document.querySelector('header');
addEventListener("scroll",()=>{
     header.classList.toggle('shadow',window.scrollY > 0 );
});


let headerMenuToggle=document.querySelector(".header_menus-toggle");
let headerMenuss=document.querySelector("nav");


headerMenuToggle.addEventListener("click",()=>{
     headerMenuss.classList.toggle('active');
});


window.onscroll=()=>{
    headerMenuss.classList.remove('active');
};


ScrollReveal(
    { reset: true,
        delay:300,
        distance:"60px",
        duration:1500,

     }
);

// components
ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-des',{
     delay:300,
     duration:2000
});

ScrollReveal().reveal('.images_home',{
    origin:"right"
});
