import Quiz from "../model/quiz.js";

export default class QuizController { 
    constructor(view, quiz) { 
        this.view = view; 
        this.quiz = quiz; 
    } 
    
    start() { 
        this.view.showHome(() => this.startQuiz()); 
    } 
    
    startQuiz() { 
        this.showQuestion(); 
    } 
    
    showQuestion() { 
        const question = this.quiz.questions[this.quiz.currentQuestionIndex]; 
        
        if (!question) { 
            return this.showResult(); 
        } 
        
        this.view.showQuestion(question, (option) => { 
            this.quiz.answer(option); 
            this.showQuestion(); 
        });
     } 
     
     showResult() { 
        const result = this.quiz.getResult(); 
        this.view.showResult(result, () => this.start()); 
    } 

}