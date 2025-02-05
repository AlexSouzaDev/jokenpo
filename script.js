document.addEventListener("DOMContentLoaded", function () {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.body.style.backgroundColor = getRandomColor();
});

const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

const choices = { rock: "R", paper: "P", scissors: "S" };
const cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
const outcomes = {
    RR: "Draw", RP: "Cpu", RS: "User",
    PP: "Draw", PR: "User", PS: "Cpu",
    SS: "Draw", SR: "User", SP: "Cpu"
};

optionImages.forEach(button => {
    button.addEventListener("click", (e) => {
        optionImages.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";
        gameContainer.classList.add("start");

        setTimeout(() => {
            gameContainer.classList.remove("start");

            const userChoice = button.dataset.choice; // Obtém o valor de data-choice
            userResult.src = `images/${userChoice}.png`;

            const randomIndex = Math.floor(Math.random() * 3);
            cpuResult.src = cpuImages[randomIndex];

            const userValue = choices[userChoice];
            const cpuValue = Object.values(choices)[randomIndex];

            let outcome = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcome} Won!!`;

        }, 2500);
    });
});
