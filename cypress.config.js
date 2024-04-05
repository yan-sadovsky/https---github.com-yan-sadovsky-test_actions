const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nj2ibf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
