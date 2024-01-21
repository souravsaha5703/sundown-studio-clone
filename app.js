const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const projectsImages = [
    {
        imgId: 1,
        imgName:"Makers Studio HOI",
        imgSrc: "https://images.unsplash.com/photo-1627735747011-b8d19caf7645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRpb3xlbnwwfDF8MHx8fDA%3Dz"
    },
    {
        imgId: 2,
        imgName:"50th Anniversary",
        imgSrc: "https://images.unsplash.com/photo-1599012307530-d163bd04ecab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHN0b3JlfGVufDB8MXwwfHx8MA%3D%3D"
    },
    {
        imgId: 3,
        imgName:"SOHO NYC",
        imgSrc: "https://images.unsplash.com/photo-1681262316040-36b3cb641335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBzdG9yZXxlbnwwfDF8MHx8fDA%3D"
    },
    {
        imgId: 4,
        imgName:"Play New Kidvision",
        imgSrc: "https://images.unsplash.com/photo-1511556670410-f6989d6b0766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5pa2UlMjBzdG9yZXxlbnwwfDF8MHx8fDA%3D"
    },
    {
        imgId: 5,
        imgName:"NYFW Popup",
        imgSrc: "https://images.unsplash.com/photo-1518417823698-91652324a3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pa2UlMjBzdG9yZXxlbnwwfDF8MHx8fDA%3D"
    },
    {
        imgId: 6,
        imgName:"Air Force 12021",
        imgSrc: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob2VzfGVufDB8MXwwfHx8MA%3D%3D"
    },
    {
        imgId: 7,
        imgName:"SOHO 2023",
        imgSrc: "https://images.unsplash.com/photo-1576229086948-cfba99afcca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBzaG9lc3xlbnwwfDF8MHx8fDA%3D"
    }
];

var fixedImageContainer = document.querySelector("#fixed-image");
var elemContainer = document.querySelector("#elem-container");
var page3 = document.querySelector("#page3");

elemContainer.addEventListener("mouseenter", () => {
    fixedImageContainer.style.display = "block";
});

elemContainer.addEventListener("mouseleave", () => {
    fixedImageContainer.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        var image = e.getAttribute("data-image");
        fixedImageContainer.style.backgroundImage = `url(${image})`;
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});

var navImage = document.querySelector("#nav img");
var fullScreenOverlay = document.querySelector("#full-scr");
var menu = document.querySelector("#nav h3");
var flag = 0;
menu.addEventListener("click", () => {
    if (flag == 0) {
        fullScreenOverlay.style.top = 0;
        navImage.style.opacity = 0;
        flag = 1;
    } else {
        fullScreenOverlay.style.top = "-100%";
        navImage.style.opacity = 1;
        flag = 0;
    }
});

var loader = document.querySelector("#loader");

setTimeout(() => {
    loader.style.top = "-100%";
}, 6500);

function checkScreenSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 950) {
        page3.innerHTML="";
        let projectsContainer=document.createElement("div");
        projectsImages.forEach((project)=>{
            let projects=document.createElement("div");
            let projectsImage=document.createElement("img");
            let projectsName=document.createElement("h3");
            projectsContainer.className="projects-container";
            projects.className="projects";
            projectsImage.className="project-image";
            projectsImage.src=project.imgSrc;
            projectsName.className="pname";
            projectsName.innerHTML=project.imgName;
            projects.appendChild(projectsImage);
            projects.appendChild(projectsName);
            projectsContainer.appendChild(projects);
            page3.appendChild(projectsContainer);
        });
    }
}

window.addEventListener("resize", () => {
    checkScreenSize();
});

checkScreenSize();