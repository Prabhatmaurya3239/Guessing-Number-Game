// function guess(a, r) {

//     try {
//         a = parseInt(a1);
//     }
//     catch {
//         document.querySelector("label").innerHTML = "Erorr"


document.addEventListener('DOMContentLoaded', function () {
    let r = generateRandomNumber();
    let attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const smallContainer = document.querySelector('.smallcontainer');
    const scoreElement = document.querySelector('.score');
    const scoreDisplay = scoreElement.querySelector('.s');
    const attemptDisplay = scoreElement.querySelector('.a');
    const l = document.querySelector("label");

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100-0+1) + 1;
        
    }

    function updateScore(score, attempts) {
        scoreDisplay.textContent = `Score: ${score}`;
        attemptDisplay.textContent = `Attempts: ${attempts}`;
    }

    function guessNumber() {
        let guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log(guess)
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        attempts++;

        let div = document.createElement('div');
        div.classList.add('box');
        div.textContent = guess;
        smallContainer.appendChild(div);

        if (guess < r) {
            l.innerHTML ='Your number is too small.'
           
        } else if (guess > r) {
         
            l.innerHTML = 'Your number is too big.'

        } else {
            l.innerHTML = 'Correct guess!'
            l.style.color = "green"


            score = 100 - attempts;
            updateScore(score, attempts);
            guessInput.disabled = true;
            document.querySelector('.b1').disabled = true;
setTimeout (() =>{
    resetGame();
}, 20000)

        }

        guessInput.value = '';
    }

    function resetGame() {
        r = generateRandomNumber();
        attempts = 0;
        score = 100;
        smallContainer.innerHTML = '';
        scoreDisplay.textContent = '';
        attemptDisplay.textContent = ``;
        l.innerHTML = '';
        l.style.color = "red";
        guessInput.disabled = false;
        document.querySelector('.b1').disabled = false;


   
    }
    document.querySelector('.b1').addEventListener('click', guessNumber);
    document.querySelector('.b2').addEventListener('click', resetGame);
});

























