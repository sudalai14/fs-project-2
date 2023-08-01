// Get references to the elements
const textElement = document.getElementById('color-changing-text');
const buttonElement = document.getElementById('color-change-button');

// Function to change the text color randomly
function changeTextColor() {
  const randomColor = getRandomColor();
  textElement.style.color = randomColor;
}

// Helper function to generate random colors
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add click event listener to the button
buttonElement.addEventListener('click', changeTextColor);
