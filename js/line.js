// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     } else {
//       entry.target.classList.remove("visible");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((element) => observer.observe(element));

// const timeline = document.querySelector(".timeline");
// const sections = document.querySelectorAll(".section");
// sections.forEach((section, index) => {
//   section.setAttribute("data-section", index + 1);
// });
// const timelineButtons = document.createElement("ul");
// timelineButtons.classList.add("timeline-buttons");

// sections.forEach((section, index) => {
//   const button = document.createElement("button");
//   button.setAttribute("data-section", index + 1);
//   const listItem = document.createElement("li");
//   listItem.appendChild(button);
//   timelineButtons.appendChild(listItem);
// });

// timeline.appendChild(timelineButtons);

// // Declare and initialize the timelineButtonElements variable
// const timelineButtonElements = document.querySelectorAll(
//   ".timeline-buttons button"
// );

// // Use the timelineButtonElements variable
// timelineButtonElements.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const sectionNumber = event.target.dataset.section;
//     console.log(`sectionNumber: ${sectionNumber}`);
//     const section = document.querySelector(
//       `.section[data-section="${sectionNumber}"]`
//     );
//     console.log(`section: ${section}`);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

const timeline = document.querySelector(".timeline");
const sections = document.querySelectorAll(".section");
sections.forEach((section, index) => {
  section.setAttribute("data-section", index + 1);
});
const timelineButtons = document.createElement("ul");
timelineButtons.classList.add("timeline-buttons");

const dates = [
  "2022-01-01",
  "2022-02-01",
  "2022-03-01",
  "2022-04-01",
  "2022-05-01",
  "2022-06-01",
]; // add your dates here

sections.forEach((section, index) => {
  const button = document.createElement("button");
  button.setAttribute("data-section", index + 1);

  const dateElement = document.createElement("span");
  dateElement.textContent = dates[index];

  const listItem = document.createElement("li");
  listItem.appendChild(button);
  listItem.appendChild(dateElement);
  timelineButtons.appendChild(listItem);
});

timeline.appendChild(timelineButtons);

// Declare and initialize the timelineButtonElements variable
const timelineButtonElements = document.querySelectorAll(
  ".timeline-buttons button"
);

// Use the timelineButtonElements variable
timelineButtonElements.forEach((button) => {
  button.addEventListener("click", (event) => {
    const sectionNumber = event.target.dataset.section;
    console.log(`sectionNumber: ${sectionNumber}`);
    const section = document.querySelector(
      `.section[data-section="${sectionNumber}"]`
    );
    console.log(`section: ${section}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
