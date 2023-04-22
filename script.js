// Get references to all buttons and content containers
const homeButton = document.querySelector("#home-button");
const page1Button = document.querySelector("#page1-button");
const page2Button = document.querySelector("#page2-button");
const page3Button = document.querySelector("#page3-button");
const page4Button = document.querySelector("#page4-button");
const backButton = document.querySelector("#back-button");
const homeContent = document.querySelector("#home-content");
const page1Content = document.querySelector("#page1-content");
const page2Content = document.querySelector("#page2-content");
const page3Content = document.querySelector("#page3-content");
const page4Content = document.querySelector("#page4-content");

// Add event listeners to all buttons
homeButton.addEventListener("click", () => {
  showContent(homeContent);
});

page1Button.addEventListener("click", () => {
  showContent(page1Content);
});

page2Button.addEventListener("click", () => {
  showContent(page2Content);
});

page3Button.addEventListener("click", () => {
  showContent(page3Content);
});

page4Button.addEventListener("click", () => {
  showContent(page4Content);
});

backButton.addEventListener("click", () => {
  showContent(homeContent);
});

// Function to show/hide content
function showContent(content) {
  // Hide all content containers
  homeContent.classList.add("hidden");
  page1Content.classList.add("hidden");
  page2Content.classList.add("hidden");
  page3Content.classList.add("hidden");
  page4Content.classList.add("hidden");

  // Show the selected content container
  content.classList.remove("hidden");
}
