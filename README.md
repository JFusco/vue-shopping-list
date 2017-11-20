# vue-shopping-list

![npm][npm-version-image]

This repository was created to demonstrate a mobile shopping list application made in Vue, Vuex, Vue Router and some custom Animate.css stuff :) ... The project uses socket.io to get real time feedback when adding or crossing off items in a grocery list as well as adding/removing categories.

The set up instructions assume you are on macOS.

## Requirements
The following tools are required to get this running.

### Dev tools
* [Node](https://nodejs.org/en/) `>=7.7.0 <=8.1.x` *~NPM will install automatically*
* babel-cli `6.5.3`
* [MongoDB](https://www.mongodb.com/download-center#community) - shell version `3.4.3`

## Installation
### Install Node
Visit [here](https://nodejs.org/en/) - download and install the latest, stable version.
This will install `npm` automatically.

### Install dependencies
`cd` into the root of the project and run this command
```sh
$ npm install
```

### Create .env file
- Copy the contents of `.env.example`
- Create a file called `.env` in the root of the project and paste contents of `.env.exmaple`
- Fill in the DB_NAME

### Install MongoDB
Download the `tgz` file
- https://www.mongodb.com/download-center#community
- Unzip the files and put them in /Users/{username}/
- Rename the folder to `mongodb`

Add mongo to your path - open up your bash profile and add this:

`export PATH=${PATH}:/Users/{username}/mongodb/bin`

### Run mongo
- Create a `db` folder inside `server/data`
- Run mongo with this command from the root of the project:

`mongod --dbpath ./server/data/db`

### Import data
- Run this at the root of the project

`mongorestore --gzip ./server/data/dump/db-{most recent date}`

### Run project
```sh
$ npm run dev
```
Open up your browser and navigate to [localhost:3000](localhost:3000)

[npm-version-image]: https://img.shields.io/npm/v/npm.svg?maxAge=2592000
