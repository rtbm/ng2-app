# ng2-quottr (WIP) [![CircleCI](https://circleci.com/gh/rtbm/ng2-app.svg?style=svg)](https://circleci.com/gh/rtbm/ng2-app) 

Google+ inspired social app. Work in progress.
Live demo: [click](https://ng2-quottr.herokuapp.com)

## What's done?
* user sign in, sign up, forgot/reset password, profile
* managing entries (quotes)
* creating circles
* attaching user to circle
* listing circles entries
* sending invites

## What's in code?
* evergreen angular 2, redux, express, mongodb, redis
* typescript, less
* reset password by in email token
* nested outlet's routes
* jwt support
* modal dialogs/forms
* slice (text-trim), filter (string or in object properties) pipe

### Host dependencies
* node, npm
* redis
* mongodb
* smtp service

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

