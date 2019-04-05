import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ShortenerService } from "../services/shortener.service";
import { Website } from "../models/website";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-shortener",
  templateUrl: "./shortener.component.html",
  styleUrls: ["./shortener.component.css"]
})
export class ShortenerComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  website: Website = null;

  constructor(
    private shortenerService: ShortenerService,
    private snackBar: MatSnackBar
  ) {}

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

  onWebsiteClick() {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.website.short_url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.snackBar.open("URL copied", null, {
      duration: 2000
    });
  }

  onSubmit() {
    this.submitted = true;
    this.website = null;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    return this.shortenerService
      .createWebsite(this.formGroup.value.url)
      .subscribe(res => {
        this.website = res;
      });
  }
}
