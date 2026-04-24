export default class Quiz {
    constructor(questions, characters) {
        this.questions = questions;
        this.characters = characters;
        this.currentQuestionIndex = 0;
    }

    reset() {
        this.currentQuestionIndex = 0;
        this.characters.forEach(char => char.score = 0);
    }

    answer(option) {
        this.characters.forEach((char, index) => {
            char.addScore(option.points[index]);
        });
        this.currentQuestionIndex++;
    }

    getResult() {
        return this.characters.reduce((max, char) => char.score > max.score ? char : max);
    }
}
