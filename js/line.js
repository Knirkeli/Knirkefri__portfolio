const timeline = document.querySelector(".timeline");
const sections = document.querySelectorAll(".section");
sections.forEach((section, index) => {
  section.setAttribute("data-section", index + 1);
});
const timelineButtons = document.createElement("ul");
timelineButtons.classList.add("timeline-buttons");

const dates = ["07-06-2023", "28-05-2023", "23-04-2023", "01-01-2023"];

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
