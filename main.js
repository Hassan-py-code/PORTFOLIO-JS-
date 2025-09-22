



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




// chapter 13

let list_with_objects=[

     {
        name:"Fatim", 
        skills:"Html & CSS",
        code:"C1",
    },

     {
        name:"Mohammed",
        skills:"Python & PHP" ,
        code:"C2",
    },
    {
        name:"ALi",
        skills:"HTML & CSS & JS" , 
        code:"C3",
    },
     {
        name:"Moukhtar",
        skills:"React tailwind",
        code:"C4",
    },
     {
        name:"Zakaria",
        skills:"HTML & CSS" ,
        code:"C5",
    },
     {
        name:"Brahim",
        skills:"HTML" ,
        code:"C6",
    },
     {
        name:"Hamid",
        skills:"JS & React Node" ,
        code:"C7",
    }, 
     {
        name:"Selma",
        skills:"Figma", 
        code:"C8",
    }, 
];

let score=0;

for (let index = 0; index < 3; index++) {
    
    let random=Math.floor(Math.random() * list_with_objects.length);
    let code=list_with_objects[random].code;
    let My_promet=prompt(`Write code of this skilles ${list_with_objects[random].skills}`);
    


    if(code === My_promet){
        score++;
        console.log(`You Finding this Key is correct ${score}`);
    }
    else{
        score--;
        console.log(`Retry guessing the Key ${score}`);
        
    };
};

