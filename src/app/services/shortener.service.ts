import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Website } from "../models/website";

@Injectable({
  providedIn: "root"
})
export class ShortenerService {
  apiURL: string = "http://localhost:3000/shortener";

  constructor(private httpClient: HttpClient) {}

  public getTop100Customers() {
    return this.httpClient.get<Website[]>(`${this.apiURL}`);
  }

  public createWebsite(url: string) {
    return this.httpClient.post<Website>(`${this.apiURL}`, { url });
  }
}
