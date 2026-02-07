const options = document.querySelectorAll(".option");
const backgrounds = document.querySelectorAll(".bg");

options.forEach((option, index) => {

  option.addEventListener("mouseenter", () => {
    backgrounds.forEach(bg => {
      bg.style.opacity = "0.3";
      bg.style.filter = "saturate(50%)";
    });

    backgrounds[index].style.opacity = "1";
    backgrounds[index].style.filter = "saturate(120%)";
  });

  option.addEventListener("mouseleave", () => {
    backgrounds.forEach(bg => {
      bg.style.opacity = "0.3";
      bg.style.filter = "saturate(50%)";
    });
  });

  option.addEventListener("click", () => {
    window.location.href = option.dataset.link;
  });

});
