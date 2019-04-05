import { Component, OnInit } from "@angular/core";
import { ShortenerService } from "../services/shortener.service";
import { Website } from "../models/website";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-top",
  templateUrl: "./top.component.html",
  styleUrls: ["./top.component.css"]
})
export class TopComponent implements OnInit {
  websites: Website[] = [];
  loading: boolean = true;

  constructor(
    private shortenerService: ShortenerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.shortenerService.getTop100Customers().subscribe(res => {
      this.loading = false;
      this.websites = res;
    });
  }

  onWebsiteClick(website) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = website.short_url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.snackBar.open("URL copied", null, {
      duration: 2000
    });
  }
}
