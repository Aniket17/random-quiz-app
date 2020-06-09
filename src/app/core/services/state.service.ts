import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
  constructor() {}
  private onScoreSubmitted = new BehaviorSubject<number>(0);
  onScoreSubmitted$: Observable<number> = this.onScoreSubmitted.asObservable();

  setResult(score: number) {
    this.onScoreSubmitted.next(score);
  }
}
