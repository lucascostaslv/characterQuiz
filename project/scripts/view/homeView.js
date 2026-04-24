export default class HomeView {
    show(onStart) {
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
}
