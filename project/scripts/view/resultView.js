export default class ResultView {
    show(result, onRestart) {
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
