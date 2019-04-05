import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Website } from "../models/website";
import { BASE_URL } from "./config";

@Injectable({
  providedIn: "root"
})
export class ShortenerService {
  apiURL: string = `${BASE_URL}/shortener`;

  constructor(private httpClient: HttpClient) {}

  public getTop100Customers() {
    return this.httpClient.get<Website[]>(`${this.apiURL}`);
  }

  public createWebsite(url: string) {
    return this.httpClient.post<Website>(`${this.apiURL}`, { url });
  }
}
