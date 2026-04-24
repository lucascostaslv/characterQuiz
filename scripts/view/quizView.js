export default class QuizView {
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
}
