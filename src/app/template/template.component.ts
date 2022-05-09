import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let data = localStorage.getItem("templateData");
    data = JSON.stringify("templateData");
    console.log(data);
  }
  isSubmitted = false;
  isCourseNameCorrect: Boolean = true;
  isCourseDescCorrect: Boolean = true;
  isCourseAmountCorrect: Boolean = true;
  isSubmit = false

  onSubmit(form: NgForm) {
    this.isSubmit = true;
    if (!/[^a-zA-Z]/.test(form.value.courseName)) {
      this.isCourseNameCorrect = false;
    }

    if (!/[^a-zA-Z]/.test(form.value.courseDesc)) {
      this.isCourseDescCorrect = false;
    }

    if (!/[^0-9]/.test(form.value.courseAmount)) {
      this.isCourseAmountCorrect = false;
    }

    console.log(this.isCourseAmountCorrect);
    console.log(this.isCourseDescCorrect);
    console.log(this.isCourseNameCorrect);



    if (!this.isCourseAmountCorrect && !this.isCourseDescCorrect && !this.isCourseNameCorrect) {
      this.isSubmitted = true;
      let JSONData = [
        { "courseName": form.value.courseName },
        { "courseDesc": form.value.courseDesc },
        { "courseAmount": form.value.courseAmount }
      ]

      localStorage.setItem("templateData", JSON.stringify(JSONData));

      let data = localStorage.getItem("templateData");
      data = JSON.stringify("templateData");

      console.log(data);

    }
  }

  onClear() {

  }
}
