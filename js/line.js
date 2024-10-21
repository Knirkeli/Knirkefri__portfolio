const timeline = document.querySelector(".timeline");
const sections = document.querySelectorAll(".section");
sections.forEach((section, index) => {
  section.setAttribute("data-section", index + 1);
});
const timelineButtons = document.createElement("ul");
timelineButtons.classList.add("timeline-buttons");

const currentDate = new Date();
const currentDateString = `${currentDate
  .getDate()
  .toString()
  .padStart(2, "0")}-${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${currentDate.getFullYear()}`;
const dates = [
  currentDateString,
  "17-06-2024",
  "26-05-2024",
  "07-04-2024",
  "28-05-2023",
  "23-04-2023",
  "01-01-2023",
];

sections.forEach((section, index) => {
  const button = document.createElement("button");
  button.setAttribute("data-section", index + 1);

  const dateElement = document.createElement("span");
  dateElement.classList.add("date");
  dateElement.textContent = dates[index];

  const listItem = document.createElement("li");
  listItem.appendChild(button);
  listItem.appendChild(dateElement);
  timelineButtons.appendChild(listItem);
});

timeline.appendChild(timelineButtons);

const timelineButtonElements = document.querySelectorAll(
  ".timeline-buttons button"
);

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
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionNumber = entry.target.dataset.section;
      const correspondingButton = document.querySelector(
        `.timeline-buttons button[data-section="${sectionNumber}"]`
      );

      if (entry.isIntersecting) {
        console.log(`Section ${sectionNumber} is in view`);
        correspondingButton.classList.add("active_section");
      } else {
        console.log(`Section ${sectionNumber} is not in view`);
        correspondingButton.classList.remove("active_section");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
