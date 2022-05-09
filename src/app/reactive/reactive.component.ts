import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  courseForm: any;
  constructor() { }

  ngOnInit() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(null, Validators.required),
      'courseDesc': new FormControl(null),
      'courseAmount': new FormControl(null)
    });
  }

  onSubmit() {
  }

  private initForm() {

  }
}
