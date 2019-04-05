import { isDevMode } from "@angular/core";

const environments = {
  development: {
    baseUrl: "http://localhost:3000"
  },
  production: {
    baseUrl: "https://guarded-badlands-25914.herokuapp.com"
  }
};

export const BASE_URL =
  environments[isDevMode() ? "development" : "production"].baseUrl;
