import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { FirstComponent } from './first/first.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicleComponent } from './cicle/cicle.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicleComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
