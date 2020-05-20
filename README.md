# Hello World App

This demonstrates a simple "Hello World" style app.
The app is packaged as a Docker container and built using Travis CI.

## Endpoints

`/` (i.e. the root path) returns the text "Hello World!"
`/health` returns a status message and a `200` response if the service is healthy
`/metadata` returns some metadata about the app

## Deployment

TBC

## Development

* Ensure code is linted `npm run lint`
* Run unit tests with `npm run test` and end-to-end tests with `npm run test:e2e`
