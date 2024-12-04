let array = [];
const arrayContainer = document.getElementById("array-container");
const message = document.getElementById("message");

function generateArray() {
    array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    displayArray();
    message.textContent = "Array generated. Click 'Start Sort' to begin sorting.";
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

async function bubbleSort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            highlightElement(j, "active");
            highlightElement(j + 1, "active");
            await new Promise(resolve => setTimeout(resolve, 500));

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                displayArray();
                highlightElement(j, "swapped");
                highlightElement(j + 1, "swapped");
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            resetHighlights();
        }
        highlightElement(array.length - i - 1, "sorted");
    }
    highlightElement(0, "sorted");
    message.textContent = "🎉 Array sorted!";
}

function startSort() {
    message.textContent = "🔄 Sorting in progress...";
    bubbleSort();
}

function generateNewArray() {
    generateArray();
    message.textContent = "Array updated. Click 'Start Sort' to begin sorting.";
}

// Initialize
generateArray();