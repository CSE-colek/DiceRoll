const button = document.getElementById('roll-button');
const dice = document.getElementById('dice');

function rollDice() {
    const rollNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = getDiceFace(rollNumber);
}

function getDiceFace(rollNumber) {
    if (rollNumber === 1) {
        return '&#9856';
    } else if (rollNumber === 2) {
        return '&#9857';
    } else if (rollNumber === 3) {
        return '&#9858';
    } else if (rollNumber === 4) {
        return '&#9859';
    } else if (rollNumber === 5) {
        return '&#9860';
    } else if (rollNumber === 6) {
        return '&#9861';
    } else {
        return 'Error';
    }
}

button.addEventListener('click', () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    }, 1000);
    
});
