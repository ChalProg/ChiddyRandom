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
        alert("Please enter a valid number!");
        return;
    }

    // Generate a random number between 0 and PossibleNumVal (inclusive)
    let Ran = Math.floor(Math.random() * (PossibleNumVal + 1));
    alert(Ran);
};
function updateTime() {
        let now = new Date();
        
        // Get hours, minutes, and seconds
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add leading zeros if necessary
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Format the time string (HH:MM:SS)
        let timeStr = `${hours}:${minutes}:${seconds}`;
        
        // Update the HTML element with the current time
        document.getElementById("CurrTime").innerHTML = timeStr;
    }

    // Update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000);

    // Initial call to display the time right away
    updateTime();
