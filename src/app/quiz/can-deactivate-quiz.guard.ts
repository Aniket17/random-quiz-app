import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { QuizComponent } from "./quiz/quiz.component";

@Injectable({
  providedIn: "root"
})
export class CanDeactivateQuizGuard implements CanDeactivate<QuizComponent> {
  canDeactivate(component, currentRoute, currentState, nextState) {
    if (!nextState.url.endsWith("quiz-results")) {
      return confirm("Are you sure you want to exit the quiz?");
    } else {
      return true;
    }
  }
}
