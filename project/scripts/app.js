import QuizView from "./view/quizView.js";
import QuizController from "./controller/quizController.js";
import Quiz from "./model/quiz.js";
import Character from "./model/character.js";
import Question from "./model/question.js";
import { characters, questions } from "./data/quizData.js";

const charObjects = characters.map(c => new Character(c.name, c.description, c.image));
const questionObjects = questions.map(q => new Question(q.text, q.options));

const view = new QuizView();
const quiz = new Quiz(questionObjects, charObjects);
const controller = new QuizController(view, quiz);

controller.startQuiz();