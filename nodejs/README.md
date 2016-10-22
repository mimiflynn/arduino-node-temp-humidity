# Arduino Temperature and Humidity Data Viewer

## To Do

- remove old recipe whatnot
- create model for temperature and humidity data
- save data from Arduino into database
- pull data from the database and display
- make it pretty
- socket.io updates

## Development

Since this is a mix of a couple things, I have two terminals running watches: one running `npm run dev` and another running `webpack --watch`.

A sample database is located in `/db/prod/dht`. Load it into `localhost` Mongodb as `dht`.

### D3

At the time of writing, D3 had just released v4 that is not backwards compatible with v3. I used this [handy dandy guide to the API changes](http://denvycom.com/blog/d3-js-version-4-x-examples-and-changes-from-version-3-x/) to make the switch.

# Boilerplate Info

This app was built using the [node express and mongoose boilerplate.](https://github.com/madhums/node-express-mongoose) ([This is an example app using the boilerplate.](https://github.com/madhums/node-express-mongoose-demo)) It was modified to use React templates in the backend and reorganized to share those templates with the frontend.

See boilerplate readme below.

[![Build Status](https://img.shields.io/travis/madhums/node-express-mongoose.svg?style=flat)](https://travis-ci.org/madhums/node-express-mongoose)
[![Gittip](https://img.shields.io/gratipay/madhums.svg?style=flat)](https://www.gratipay.com/madhums/)
[![Dependencies](https://img.shields.io/david/madhums/node-express-mongoose.svg?style=flat)](https://david-dm.org/madhums/node-express-mongoose)


## Node Express Mongoose

A boilerplate application for building web apps using express, mongoose and passport.

Read the [wiki](https://github.com/madhums/node-express-mongoose/wiki) to understand how the application is structured.

## Installation and Usage

    $ git clone https://github.com/madhums/node-express-mongoose.git
    $ cd node-express-mongoose
    $ npm install
    $ npm start

Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`).

Checkout the [apps that are built using this approach](https://github.com/madhums/node-express-mongoose/wiki/Apps-built-using-this-approach)

## License

MIT
