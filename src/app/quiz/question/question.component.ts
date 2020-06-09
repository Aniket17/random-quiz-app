import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Question } from "../../core";

@Component({
  selector: "question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  constructor() {}
  ngOnInit() {}
}
