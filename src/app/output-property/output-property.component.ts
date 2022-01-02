import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //outputs: [
  //  "valueChanged"
  //]
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  value: number = 0;

  @Output()
  valueChanged = new EventEmitter;

  @ViewChild("inputField", {static: false})
  inputFieldValue!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  decrement() {
    //this.value--;
    this.valueChanged.emit({newValue: this.value});
    this.inputFieldValue.nativeElement.value--;
  }

  increment() {
    //this.value++;
    this.valueChanged.emit({newValue: this.value});
    console.log(this.inputFieldValue.nativeElement.value);
    this.inputFieldValue.nativeElement.value++;
  }

}
