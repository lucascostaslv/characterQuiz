export default class QuizView {
    showHome(onStart) {
        const container = document.getElementById("app");

        container.innerHTML = `
            <h1>Quiz de Personalidade</h1>
            <p>Descubra qual personagem você seria!</p>
            <button id="start-btn">Começar</button>
        `;

        document.getElementById("start-btn").addEventListener("click", () => {
            onStart();
        });
    }

    showQuestion(question, onAnswer) {
        const container = document.getElementById("app");

        container.innerHTML = `
            <h2>${question.text}</h2>
            ${question.options.map((opt, i) => `
                <button data-index="${i}">${opt.text}</button>
            `).join("")}
        `;

        container.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                onAnswer(question.options[btn.dataset.index]);
            });
        });
    }

    showResult(result, onRestart) {
        const container = document.getElementById("app");

        container.innerHTML = `
            <h1>Seu resultado foi:</h1>
            <h2>${result.name}</h2>
            <p>${result.description}</p>
            <img src="${result.image}" alt="${result.name}" width="200">
            <br><br>
            <button id="restart-btn">Jogar Novamente</button>
        `;

        document.getElementById("restart-btn").addEventListener("click", () => {
            onRestart();
        });
    }
}