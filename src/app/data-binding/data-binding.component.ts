import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://google.com";
  angularCourse: boolean = true;
  urlImage: string = "http://lorempixel.com/400/200/nature";
  currentValue: string = "";
  savedValue: string = "";
  isMouseOver: boolean = false;
  name: string = "abc";

  person: any = {
    name: "Caio",
    age: 26
  };

  courseName: string = "Angular";

  initialValue: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return 1;
  }

  getEnjoyCourse() {
    return true;
  }

  clickedButton() {
    alert("Clicked button.");
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement> event.target).value;
  }

  saveValue(value: string) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChange(event: any) {
    console.log(event.newValue);
  }
}
