import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoadingComponent } from "./loading/loading.component";
import { BreadcrumComponent } from "./breadcrum/breadcrum.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    WelcomeComponent,
    NavbarComponent,
    LoadingComponent,
    BreadcrumComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    WelcomeComponent,
    NavbarComponent,
    LoadingComponent,
    BreadcrumComponent,
    FormsModule,
  ],
})
export class SharedModule {}
