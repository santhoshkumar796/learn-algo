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

async function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        highlightElement(i, "active");
        for (let j = i + 1; j < array.length; j++) {
            highlightElement(j, "min");
            await new Promise(resolve => setTimeout(resolve, 500));

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            resetHighlights();
            highlightElement(i, "active");
            highlightElement(minIndex, "min");
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            displayArray();
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        highlightElement(i, "sorted");
    }

    message.textContent = "🎉 Array sorted!";
}

function startSort() {
    message.textContent = "🔄 Sorting in progress...";
    selectionSort();
}

function generateNewArray() {
    generateArray();
    message.textContent = "Array updated. Click 'Start Sort' to begin sorting.";
}

// Initialize
generateArray();