const Button = document.getElementById("ProbButton");
const PossibleNum = document.getElementById("Inp");
let PossibleNumVal = 0;

// Add blur event correctly
PossibleNum.addEventListener("blur", function () {
    // Parse the input as a number
    PossibleNumVal = parseInt(PossibleNum.value);
});

// Button click logic
Button.onclick = function () {
    if (isNaN(PossibleNumVal) || PossibleNumVal <= 0) {
        alert("Rayan Qusai Chalaby 1984 Colonial Dr please enter a valid number😡");
        return;
    }

    // Generate a random number between 0 and PossibleNumVal (inclusive)
    let Ran = Math.floor(Math.random() * (PossibleNumVal + 1));
    alert(Ran);
};
