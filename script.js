// Function to change text content
function changeText() {
    const textElement = document.getElementById('changeable-text');
    const texts = [
        'Hello, DOM manipulation is fun!',
        'JavaScript makes web pages interactive!',
        'You can dynamically change content!'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textElement.textContent = randomText;
}

// Function to toggle styles
function toggleStyle() {
    const styleBox = document.getElementById('style-box');
    styleBox.classList.toggle('highlight');
}

// Counter for adding elements
let elementCounter = 1;

// Function to add a new element
function addElement() {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-box';
    newElement.textContent = `Dynamic Element ${elementCounter}`;
    newElement.id = `element-${elementCounter}`;
    container.appendChild(newElement);
    elementCounter++;
}

// Function to remove the last added element
function removeElement() {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
        elementCounter = Math.max(1, elementCounter - 1);
    }
} 