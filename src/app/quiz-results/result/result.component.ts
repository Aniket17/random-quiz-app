import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { StateService } from "../../core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "result",
  templateUrl: "./result.component.html",
})
export class ResultComponent implements OnInit, OnDestroy {
  constructor(private stateService: StateService, private router: Router) {}
  score: number;
  unsubscribe = new Subject();

  ngOnInit() {
    this.stateService.onScoreSubmitted$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((score) => {
        this.score = score;
        //when there is no score set.. go back to home.
        if (this.score === undefined) {
          this.router.navigate(["/home"]);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
