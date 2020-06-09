import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Question } from "../../core";

@Component({
  selector: "review-question",
  templateUrl: "./review-question.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewQuestionComponent implements OnInit {
  @Input() question: Question;

  @Output() onQuestionClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  goToQuestion() {
    this.onQuestionClick.emit({ questionId: this.question.id });
  }
}
