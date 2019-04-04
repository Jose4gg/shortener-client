import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShortenerComponent } from "./shortener/shortener.component";

const routes: Routes = [
  {
    path: "",
    component: ShortenerComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
