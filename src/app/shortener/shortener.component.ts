import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-shortener",
  templateUrl: "./shortener.component.html",
  styleUrls: ["./shortener.component.css"]
})
export class ShortenerComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      url: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(
          "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
        )
      ])
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.formGroup.value));
  }
}
