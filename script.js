const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") return;

        // ×, ÷ ko JavaScript operators me convert kare
        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        e.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
