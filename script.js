const photos = document.querySelectorAll(".photo");
let index = 0;

setInterval(() => {
  photos[index].classList.remove("active");

  index = (index + 1) % photos.length;

  photos[index].classList.add("active");
}, 2500);  


const floatingMenu = document.getElementById("floatingMenu");
const technicalSection = document.querySelector(".technical");

window.addEventListener("scroll", () => {

  const technicalTop = technicalSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 1;

  if (technicalTop < triggerPoint) {
    floatingMenu.classList.add("show");
  } else {
    floatingMenu.classList.remove("show");
  }

});


