const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // select the img elements within the current .content.visible element
      const images = entry.target.querySelectorAll("img");

      // add a transition-delay to each img element
      images.forEach((img, index) => {
        img.style.transitionDelay = `${900 + index * 800}ms`;
      });
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
