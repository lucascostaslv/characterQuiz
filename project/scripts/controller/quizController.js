export default class QuizController {
    constructor(homeView, quizView, resultView, quiz) {
        this.homeView = homeView;
        this.quizView = quizView;
        this.resultView = resultView;
        this.quiz = quiz;
    }

    start() {
        this.homeView.show(() => this.startQuiz());
    }

    startQuiz() {
        this.quiz.reset();
        this.showQuestion();
    }

    showQuestion() {
        const question = this.quiz.questions[this.quiz.currentQuestionIndex];

        if (!question) {
            return this.showResult();
        }

        this.quizView.showQuestion(question, (option) => {
            this.quiz.answer(option);
            this.showQuestion();
        });
    }

    showResult() {
        const result = this.quiz.getResult();
        this.resultView.show(result, () => this.start());
    }
}
