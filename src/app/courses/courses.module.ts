import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
  //providers[CoursesService] Is not necessary, because the 
  //providedIn is used with 'root' string, and that let the specific
  //service be used in all modules and components of the application.
})
export class CoursesModule { }
