# Ecoleta

Ecoleta is an App to promote [World Environment Day](https://en.wikipedia.org/wiki/World_Environment_Day), where it is possible to connect drop off locations of recyclable and disposable items (oils, batteries, ...) to the population.
![](https://github.com/lucasagra/NLW1.0/blob/master/images/presentation.png)


## Used technologies

- NodeJS _backend_
- ReactJS _frontend_
- React-Native _mobile_

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/lucasagra/NLW1.0.git

# Go into the repository
$ cd NLW1.0
```

## Backend API

```bash
# Go into server folder
cd server

# Install dependencies
npm install

# Create database
npm run knex:migrate

# Populate database
npm run knex:seed

# Start server
npm run dev
```

## Frontend

```bash
# Go into web folder
cd web

# Install dependencies
npm install

# Start react
npm start
```

## Mobile

![](https://github.com/lucasagra/NLW1.0/blob/master/images/layoutmobile.png)

Running with [Expo](https://expo.io/)

- First download Expo app to your mobile (iOS or Android)

```bash
# Install expo on your machine
npm install -g expo-cli

# Go into mobile folder
cd mobile

# Run application
expo start

# Scan QR Code from your Phone
```


## Credits to
[**Rocketseat**](https://rocketseat.com.br/) for developing this project during the first Next Level Week workshop.
