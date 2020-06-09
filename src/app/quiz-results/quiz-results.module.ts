import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

import { ResultComponent } from "./result/result.component";

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: ResultComponent,
      },
    ]),
  ],
})
export class QuizResultsModule {}
