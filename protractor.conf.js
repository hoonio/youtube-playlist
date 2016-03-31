'use strict';

exports.config = {
  allScriptsTimeout: 10000,

  baseUrl: 'http://localhost:' + (process.env.PORT || '8080'),

  chromeOnly: true,

  specs: [
    'tests/app.spec.js'
  ],

  // loading Chrome Canary, add other browser path for cross-browser testing
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      binary: '/Applications/Google/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
      args: [],
      extensions: [],
      }
  },

  framework: 'jasmine',
};
