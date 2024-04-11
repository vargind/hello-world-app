# Hello World App

[![Build Status](https://travis-ci.org/vargind/hello-world-app.svg?branch=master)](https://travis-ci.org/vargind/hello-world-app)

This demonstrates a simple "Hello World" style app, which is was given as a coding test when I was seeking employment with a company. 
The purpose of this repository is therefore to demonstrate that I am able to write code.
It's not my best work, both because I didn't spend too much time on it, and I was fairly inexperienced with Node.js when I wrote it.

The app was built using Travis CI. I'm not sure if that still works.

The app was deployed to Heroku, but that doesn't work any more because they stopped their free plan.

This was enough to get me the job, even though I didn't get all the requirements working, and even though I lost marks because the
reviewer did not like the opinionated folder structure of NestJS.

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

## Known Issues

* Currently the code as deployed to Heroku cannot determine the git commit SHA correctly for the `/metadata` endpoint.
  * This would likely be solved by adding a "pre-deploy" script to the Travis CI build that called the Heroku API to set the config vars for the app, and updating the code to pull these from the environment.
* I haven't done a lot of research on the suitability of the Heroku platform, particularly around scalability/availability. It usually makes sense to carefully evaluate any vendor or service provider before you commit to using them.
* The Heroku app is running on a free tier. This means it is theoretically vulnerable denial-of-service attacks e.g. someone could cause it to shut down by overloading it with request and using up all its credits.
* The Heroku API key used by the Travis CI build to deploy it expires in one year. Expiry of keys and certificates can be a contributing factor to unexpected outages if they are not carefully managed.
* The Travis CI build only runs the unit tests, not the end-to-end tests. This isn't an ideal practice for serious production code.
