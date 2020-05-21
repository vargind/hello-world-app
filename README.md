# Hello World App

[![Build Status](https://travis-ci.org/vargind/hello-world-app.svg?branch=master)](https://travis-ci.org/vargind/hello-world-app)

This demonstrates a simple "Hello World" style app.
The app is built using Travis CI.
The app is deployed to Heroku.

## Endpoints

* `/` (i.e. the root path) returns the text "Hello World!"
* `/health` returns a status message and a `200` response if the service is healthy
* `/metadata` returns some metadata about the app

## Deployment

When a new commit is merged to the `master` branch and pushed to GitHub, it should be automatically built by Travis CI.
Travis should then automatically deploy it to Heroku, where it should be available at [peterv-hello-world-app.herokuapp.com](https://peterv-hello-world-app.herokuapp.com/).

### Local Deployment

To run this locally, run `npm run start`. The app should then be available at [localhost:3000](http://localhost:3000).

## Development

* Ensure code is linted `npm run lint`
* Run unit tests with `npm test` and end-to-end tests with `npm run test:e2e`
