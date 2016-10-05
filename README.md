# ng2-quottr (WIP) [![CircleCI](https://circleci.com/gh/rtbm/ng2-quottr.svg?style=svg)](https://circleci.com/gh/rtbm/ng2-quottr) 

Work in progress. Live demo: [https://ng2-quottr.herokuapp.com](https://ng2-quottr.herokuapp.com)

## What's done?
* user sign in, sign up, forgot/reset password, update profile
* managing entries (quotes)
* following users

## What's in code?
* ECMA Script 6 (backend), TypeScript (frontend), sass, html
* evergreen angular 2, redux, express, mongodb, redis
* reset password by in email token
* nested outlet's routes
* jwt support
* modal dialogs/forms
* slice (text-trim), filter (string or in object properties) pipe
* circleci, heroku ready
* ready for tests (mocha, karma)
* linters support (ES6, TS)

### Host dependencies
* node, npm
* redis
* mongodb
* sendgrid account

## Running locally

### Set up environment
Rename .env.sample to .env and make appropriate changes.

### Run server (http://localhost:3000)
```
npm start
```

### Development with live reload (http://localhost:8080)
 
```
npm run dev
```

### Testing
```
npm run test
```

### Linting
```
npm run lint
```
