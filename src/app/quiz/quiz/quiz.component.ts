import { Component, OnInit, Input } from "@angular/core";
import { takeUntil, catchError, finalize } from "rxjs/operators";

import {
  Question,
  QuizConfiguration,
  Quiz,
  QuizService,
  StateService,
} from "../../core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
})
export class QuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private stateService: StateService,
    private router: Router
  ) {}

  @Input() quizId: number = 1; //defaulted
  quiz: Quiz;
  currentQuestion: Question;
  id: number = -1;
  config: QuizConfiguration;
  isReviewing: boolean;
  loading: boolean = false;
  unsubscribe = new Subject();

  ngOnInit() {
    this.config = new QuizConfiguration({}); //should read it from config.json
    this.loadQuiz(this.quizId);
  }

  loadQuiz(quizId: number) {
    this.loading = true;
    this.quizService
      .getQuiz(quizId)
      .pipe(
        takeUntil(this.unsubscribe),
        catchError((err) => {
          console.log(err);
          throw new Error(err);
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe((q) => {
        this.quiz = new Quiz(q);
        this.getNextQuestion();
      });
  }

  getNextQuestion() {
    this.saveAnswer();
    this.currentQuestion = this.quiz.questions[++this.id];
  }

  getPreviousQuestion() {
    this.saveAnswer();
    this.currentQuestion = this.quiz.questions[--this.id];
  }

  disableNext() {
    return (
      !this.quiz ||
      !this.quiz.questions ||
      this.id >= this.quiz.questions.length - 1 ||
      this.isReviewing
    );
  }

  disablePrevious() {
    return (
      !this.quiz || !this.quiz.questions || this.id <= 0 || this.isReviewing
    );
  }

  review() {
    this.isReviewing = !this.isReviewing;
  }

  onReviewQuestionClick({ questionId }) {
    if (!questionId) return;
    this.currentQuestion = this.quiz.questions.find((x) => x.id == questionId);
    this.id = this.currentQuestion.index;
    this.review();
  }

  submit() {
    let score = this.calculateScore(this.quiz.questions);
    this.stateService.setResult(score);
    this.router.navigate(["/quiz-results"]);
  }

  calculateScore(questions: Question[]) {
    let score = questions.filter(
      (x) => x.selected == x.choices.find((x) => x.isCorrect).id
    ).length;
    return score;
  }

  saveAnswer() {
    if (!this.currentQuestion) return;
    //in case you want to save it to persistent storage
    this.quiz.questions[this.currentQuestion.index] = this.currentQuestion;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
