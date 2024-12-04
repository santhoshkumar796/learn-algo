let array = [];
const arrayContainer = document.getElementById("array-container");
const message = document.getElementById("message");

function generateArray() {
    array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
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
    document.getElementById(`element-${index}`).classList.add(className);
}

function resetHighlights() {
    array.forEach((_, index) => {
        const element = document.getElementById(`element-${index}`);
        element.className = "array-element";
    });
}

async function binarySearch(target) {
    resetHighlights();
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        resetHighlights();
        highlightElement(low, "low");
        highlightElement(high, "high");
        highlightElement(mid, "active");

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (array[mid] === target) {
            message.textContent = `🎉 Target ${target} found at index ${mid}!`;
            highlightElement(mid, "active");
            return;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
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
    binarySearch(target);
}

function generateNewArray() {
    generateArray();
    document.getElementById("target").value = "";
    message.textContent = "Array updated. Enter a new target number.";
}

// Initialize
generateArray();