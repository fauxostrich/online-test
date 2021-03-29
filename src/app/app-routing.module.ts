import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component'
import { SubmissionComponent } from './submission/submission.component'

const routes: Routes = [
  {path: "\assessment", component: AssessmentComponent},
  {path: "\submission", component: SubmissionComponent},
  {path: "", redirectTo: "\assessment", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
