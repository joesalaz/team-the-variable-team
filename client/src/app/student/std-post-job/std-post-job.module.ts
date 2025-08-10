import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdPostJobComponent } from '../std-post-job/std-post-job.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//TextEditor Imports
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { StdJobPostsService } from '../../services/stdjobposts.service';

@NgModule({
  declarations: [StdPostJobComponent],
  imports: [
    CommonModule, 
    NgbModule, 
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [StdPostJobComponent],
  bootstrap: [StdPostJobComponent],
  // Needed to add the provider so that I can access the service within this module
  providers: [StdJobPostsService]
})
export class StdPostJobModule { }