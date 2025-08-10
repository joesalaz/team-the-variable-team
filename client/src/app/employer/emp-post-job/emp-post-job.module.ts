import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpPostJobComponent } from './emp-post-job.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//TextEditor Imports
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EmpJobPostsService } from '../../services/empjobposts.service';
@NgModule({
  declarations: [EmpPostJobComponent],
  imports: [
    CommonModule, 
    NgbModule, 
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [EmpPostJobComponent],
  bootstrap: [EmpPostJobComponent],
  // Needed to add the provider so that I can access the service within this module
  providers: [EmpJobPostsService]
})
export class EmpPostJobModule { }
