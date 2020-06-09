import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./shared/welcome/welcome.component";

const routes: Routes = [
  { path: "home", component: WelcomeComponent },
  {
    path: "quiz",
    loadChildren: "src/app/quiz/quiz.module#QuizModule",
  },
  {
    path: "quiz-results",
    loadChildren: "src/app/quiz-results/quiz-results.module#QuizResultsModule",
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
