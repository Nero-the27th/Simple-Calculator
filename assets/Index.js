const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".btn");

window.onload = () => input.focus();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (button.classList.contains("erase")) {
            input.value = "";
        } else if (button.classList.contains("erase2")) {
            input.value = input.value.slice(0, -1);
        } else if (button.classList.contains("sin")) {
            input.value = Math.sin(eval(input.value)*(Math.PI/180)).toFixed(2);
        } else if (button.classList.contains("cos")) {
            input.value = Math.cos(eval(input.value)*(Math.PI/180)).toFixed(2);
        } else if (button.classList.contains("tan")) {
            input.value = Math.tan(eval(input.value)*(Math.PI/180)).toFixed(2);
        } else if (button.classList.contains("eq")) {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value;
        }
    });
});
