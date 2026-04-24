import HomeView from "./view/homeView.js";
import QuizView from "./view/quizView.js";
import ResultView from "./view/resultView.js";
import QuizController from "./controller/quizController.js";
import Quiz from "./model/quiz.js";
import Character from "./model/character.js";
import Question from "./model/question.js";
import { characters, questions } from "./data/quizData.js";

const charObjects = characters.map(c => new Character(c.name, c.description, c.image));
const questionObjects = questions.map(q => new Question(q.text, q.options));

const homeView = new HomeView();
const quizView = new QuizView();
const resultView = new ResultView();
const quiz = new Quiz(questionObjects, charObjects);
const controller = new QuizController(homeView, quizView, resultView, quiz);

controller.start();
