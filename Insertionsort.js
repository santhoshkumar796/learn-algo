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

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        highlightElement(i, "active");
        await new Promise(resolve => setTimeout(resolve, 500));

        while (j >= 0 && array[j] > key) {
            highlightElement(j, "active");
            array[j + 1] = array[j];
            displayArray();
            highlightElement(j + 1, "active");
            await new Promise(resolve => setTimeout(resolve, 500));
            resetHighlights();
            j--;
        }

        array[j + 1] = key;
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Mark array as sorted
    for (let i = 0; i < array.length; i++) {
        highlightElement(i, "sorted");
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    message.textContent = "🎉 Array sorted!";
}

function startSort() {
    message.textContent = "🔄 Sorting in progress...";
    insertionSort();
}

function generateNewArray() {
    generateArray();
    message.textContent = "Array updated. Click 'Start Sort' to begin sorting.";
}

// Initialize
generateArray();