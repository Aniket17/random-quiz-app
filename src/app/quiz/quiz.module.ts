import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

import { QuizComponent } from "./quiz/quiz.component";
import { TimerComponent } from "./timer/timer.component";
import { QuizToobarComponent } from "./quiz-toobar/quiz-toobar.component";
import { QuestionComponent } from "./question/question.component";
import { ReviewQuestionComponent } from "./review-question/review-question.component";

import { CanDeactivateQuizGuard } from "./can-deactivate-quiz.guard";

@NgModule({
  declarations: [
    QuizComponent,
    TimerComponent,
    QuizToobarComponent,
    QuestionComponent,
    ReviewQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: QuizComponent,
        canDeactivate: [CanDeactivateQuizGuard],
      },
    ]),
  ],
  exports: [
    QuizComponent,
    TimerComponent,
    QuizToobarComponent,
    QuestionComponent,
    ReviewQuestionComponent,
  ],
})
export class QuizModule {}
