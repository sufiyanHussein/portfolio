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
 const seeMoreBtn = document.getElementById("see-more-btn");
    const hiddenProjects = document.querySelectorAll(".hidden-projects");

    seeMoreBtn.addEventListener("click", () => {
        hiddenProjects.forEach(project => {
           project.classList.toggle("show");
        });

        if (seeMoreBtn.textContent === "See More") {
            seeMoreBtn.textContent = "See Less";
        } else {
            seeMoreBtn.textContent = "See More";
        }
    });


const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks! Message received (demo).');
    contactForm.reset();
  });
}