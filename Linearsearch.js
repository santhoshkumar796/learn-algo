let array = [];
const arrayContainer = document.getElementById("array-container");
const message = document.getElementById("message");

function generateArray() {
    array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    displayArray();
    message.textContent = "Array generated. Enter a target number to start searching.";
}

function displayArray() {
    arrayContainer.innerHTML = "";
    array.forEach((value, index) => {
        const element = document.createElement("div");
        element.className = "array-element";
        element.id = `element-${index}`;
        element.textContent = value;
        arrayContainer.appendChild(element);
    });
}

function highlightElement(index, className) {
    const element = document.getElementById(`element-${index}`);
    element.classList.add(className);
}

function resetHighlights() {
    array.forEach((_, index) => {
        const element = document.getElementById(`element-${index}`);
        element.className = "array-element";
    });
}

async function linearSearch(target) {
    resetHighlights();
    for (let i = 0; i < array.length; i++) {
        highlightElement(i, "active");
        await new Promise(resolve => setTimeout(resolve, 500)); // Pause for animation

        if (array[i] === target) {
            highlightElement(i, "found");
            message.textContent = `🎉 Target ${target} found at index ${i}!`;
            return;
        }
    }
    message.textContent = `❌ Target ${target} not found in the array.`;
}

function startSearch() {
    const target = parseInt(document.getElementById("target").value);
    if (isNaN(target)) {
        message.textContent = "⚠️ Please enter a valid number.";
        return;
    }
    message.textContent = "🔎 Searching...";
    linearSearch(target);
}

function generateNewArray() {
    generateArray();
    document.getElementById("target").value = "";
    message.textContent = "Array updated. Enter a new target number.";
}

// Initialize
generateArray();