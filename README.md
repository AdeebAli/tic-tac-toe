# Tic Tac Toe for the Web ❌⭕

[![codecov](https://codecov.io/github/AdeebAli/tic-tac-toe/graph/badge.svg?token=PRXTTTY2QD)](https://codecov.io/github/AdeebAli/tic-tac-toe) ![CI Pipeline](https://github.com/AdeebAli/tic-tac-toe/actions/workflows/nodejs.yml/badge.svg?branch=main)

**_The Classic Two Player Game, in the browser!_**

The frontend web application for playing tic tac toe on the browser.

Made with React, Eslint, and Vite/Vitest.

## Requirements

- NodeJS 18+

## Getting Started

First things first...

```bash
    npm i # installs dependencies
```

To run the application with a live dev server that supports hot reloading, run

```bash
    npm run dev
```

To build and run a production ready version of the app, run

```bash
    npm run build
```

## Testing

To run the full test suite,

```bash
    npm test
```

To Test with coverage, you can use

```bash
    npm test -- --coverage
```

## Linting / Code Style

This project uses the default recommended ruleset for eslint to enforce code style and syntax errors. Linting is run with the lint command as well as the general npm test command.

To run the linter and check for code style errors,

```bash
    npm run lint
```

Oh no! We have a bunch of linting errors. That's totally fixable! You just need to run

```bash
    npm run lint:fix
```

## Running with Docker

This application can be run with Docker using the supplied Dockerfile to build the image.
Your machine must have Docker installed in order to perform the following steps. Download instructions can be found on the [Official Docker Website](https://docs.docker.com/get-docker/)

### Building the Image

change directory to the root of the repository, then

```bash
docker build -t <username>/tic-tac-toe .
```

### Running the Image

```bash
docker run -p <public_port>:8080 -d <username>/tic-tac-toe
```

## Made With ❤️ Using

- React - Web Application Framework
- Vite - Build tool
- Vitest - Unit Testing Framework
- Eslint & Prettier - Code Style and Formatting
