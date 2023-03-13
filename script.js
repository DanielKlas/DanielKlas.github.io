// Top Navigation Event Listeners and Global Constants

window.onload = function () {
  const navProjects = document.getElementById("top_projects");
  navProjects.addEventListener("click", displayProjects);

  const navLibrary = document.getElementById("top_library");
  navLibrary.addEventListener("click", displayLibrary);

  const navSocial = document.getElementById("top_social");
  navSocial.addEventListener("click", displaySocial);
}


// Colour changers and section visibility

function displayProjects(){
  document.getElementById("social_container").setAttribute("style", "display: none;");
  document.getElementById("projects_container").setAttribute("style", "display: block;");
}

function displayLibrary(){
  document.getElementById("social_container").setAttribute("style", "display: none;");
  document.getElementById("projects_container").setAttribute("style", "display: none;");
}

function displaySocial(){
  document.getElementById("social_container").setAttribute("style", "display: block;");
  document.getElementById("projects_container").setAttribute("style", "display: none;");
}

// Slideshows

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
