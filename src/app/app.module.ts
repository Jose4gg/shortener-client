import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatButtonModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ShortenerComponent } from "./shortener/shortener.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TopComponent } from "./top/top.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ShortenerComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
