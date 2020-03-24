# Simple API Neurafarm

Simple API for profile management purposes (without authentication).<br />

API is accessible on [simple-api-neurafarm.herokuapp.com](https://simple-api-neurafarm.herokuapp.com).<br />

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Endpoints List

``` bash
Available in Heroku
[GET] '/users' = Get all users
[GET] '/users/:id' = Get user by id
[POST] '/users' = Create new user
[PUT] '/users/:id' = Edit user by id
[DELETE] '/users/:id' = Delete user by id
[POST] '/login' = Get all previously sent messages
[POST] '/upload-file' = Upload file to cloud storage (such as S3)*
[POST] '/recover' = Send link to user email for change password
[POST] '/change-password/:id' = Create new password for user
*Not perfectly implemented because of no storage account
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required dependencies. (Only if there is new packages).

### `npm start`

Runs the app in the development mode with hot reload.<br />
API will run on [http://localhost:3000](http://localhost:3000).

### `npm start-manual`

Runs the app in the development mode without hot reload.<br />
API will run on [http://localhost:3000](http://localhost:3000).

### `npm run lint`

Checks if there is any warning or wrong in codes lint.

### `npm run lint-fix`

Checks if there is any warning or wrong in codes lint.<br />
And automatically fixes what can be fixed.

## Learn More

You can learn more in the [Express documentation](https://expressjs.com/).