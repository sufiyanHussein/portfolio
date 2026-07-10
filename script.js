let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = (e) => {
    e.stopPropagation();
    navbar.classList.toggle("active");
};


navbar.onclick = (e) => {
    e.stopPropagation();
};

document.onclick = () => {
    navbar.classList.remove("active");
};

const seeMoreBtn = document.querySelector("#see-more-btn");
const hiddenProjects = document.querySelector(".hidden-projects");

seeMoreBtn.onclick = () =>{

    hiddenProjects.classList.toggle("show");

    if(hiddenProjects.classList.contains("show")){
        seeMoreBtn.innerHTML="See Less";
    }else{
        seeMoreBtn.innerHTML="See More";
    }

}