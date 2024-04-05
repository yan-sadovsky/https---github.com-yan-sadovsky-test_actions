
import { defineConfig } from "cypress";
import {allureCypress} from "allure-cypress/reporter"
import * as dotenv from "dotenv"
dotenv.config()

export default defineConfig({
  projectId: process.env.PROJECT_ID,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
      // implement node event listeners here
    },
  },
});
