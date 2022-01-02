import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: [
    //"courseName",
    //"courseName: name"
  //]
})
export class InputPropertyComponent implements OnInit {

  @Input("name")
  courseName: string = "";
  //@Input()
  //name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
