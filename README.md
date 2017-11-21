# Wheelhaus

Wheelhaus is a mock-up, bike, e-commerce website where clients may purchase bikes and accessories.

## Snapshot

### Mobile View
Mobile Navbar |Home |  About | Products | Shopping Cart | Empty Cart|
:---------------:|:-----:|:------:|:---------:|:--------------:|:------------
<img src="https://user-images.githubusercontent.com/25072657/33099994-b11481ac-cec7-11e7-94f6-c379384f470a.png"> | <img src="https://user-images.githubusercontent.com/25072657/33100137-2a101602-cec8-11e7-9276-2ae6aee7ea04.png" width="150"> |<img src="https://user-images.githubusercontent.com/25072657/33100041-d43c6f50-cec7-11e7-8308-46d0351c60a0.png" width="150">|<img src="https://user-images.githubusercontent.com/25072657/33100169-446f199e-cec8-11e7-9960-feb50063df05.png" width="150"> | <img src="https://user-images.githubusercontent.com/25072657/33100220-78ea9f36-cec8-11e7-8f9b-a8e2f2c55796.png" width="150"> | <img src="https://user-images.githubusercontent.com/25072657/33100246-8bf2475a-cec8-11e7-9752-680571501325.png" width="150">

### Desktop View
Home |  About | Products | Shopping Cart | Empty Cart|
:-----:|:-------:|:---------:|:--------------:|:------------:
<img src="https://user-images.githubusercontent.com/25072657/33100328-d1155d36-cec8-11e7-818d-ab218aa6f2c9.png" width="150"> | <img src="https://user-images.githubusercontent.com/25072657/33100358-f32525fa-cec8-11e7-9b29-7851fae19d50.png" width="150"> |<img src="https://user-images.githubusercontent.com/25072657/33100424-2427388c-cec9-11e7-9160-3ae30bd15cdd.png" width="150">|<img src="https://user-images.githubusercontent.com/25072657/33100448-45d5b738-cec9-11e7-9307-fbb6acf05a87.png" width="150"> | <img src="https://user-images.githubusercontent.com/25072657/33100502-785db606-cec9-11e7-8d9b-d10434af4c4f.png" width="150"> 

## Prerequisites/Installing

### NodeJS/ExpressJS Installation
Here are the following technologies you need to start MEAN project:
* Install NodeJS either 6.x LTS(long-term stable) or v8.x current dev [here](https://nodejs.org/).
* Install Nodemon through Node Package Manager(NPM) globally on your terminal/command - **npm install -g nodemon (may require sudo)**
* Install Bower (manages our front-end dependencies) - **npm install -g bower (may require sudo)**
...If you want to explore more about bower, please go [here](http://bower.io)
* Install ExpressJS (set of tools that allows us to create a more robust Node Server) - **npm install express**
...If you want to explore more about npm, please go [here](https://docs.npmjs.com/cli/npm)

### Mongodb/Mongoose Installation

Plese go to the following site to download the necessary files: [HERE](https://www.mongodb.com/download-center#community)
**Windows**
```
cd C:/     // go to the root directory('/')
mkdir data      // make a folder called data
cd data      // go into data folder
mkdir db      // make another folder called db
```
**Booting the Mongo server(Windows):**
```
#On Command/Bash
cd c:/"Program Files"/MongoDB/Server/<version_number>/bin/
mongod.exe     // using Command Prompt; this runs the executable file!
./mongod      // using bash

#After Server is up and running:
#Open another command/bash window and run:
mongo.exe
./mongo #in some versions you may need to use that command
```
**Mac**
```
brew install Mongodb
cd /      // go to the root directory
mkdir data      // ** make a folder called data
cd data      // go into data folder
mkdir db      // ** make another folder called db
**You might have to preface the mkdir commands with 'sudo' (i.e. 'sudo mkdir data')**

#To run mongod, type:
mongod or sudo mongod

#When server is up and running use mongo to connect to your database
mongo
```

### Angular 4

* npm install -g @angular/cli - for more info, go [here](https://github.com/angular/angular-cli#generating-and-serving-an-angular-project-via-a-development-server)


## Opening the project (locally) to view the site.

Go to the project folder and do the following:

```
#On terminal/Command/Bash
cd public
ng build -w

#On second terminal/Command/Bash
cd / #go to root
cd data/db #go to your database
sudo mongod or mongod.exe or ./mongod #depending on your os

#On third terminal/Command/Bash
On project folder:
nodemon server.js

#On fourth(optional, if you want to query through database) terminal/Command/Bash
mongo, mongo.exe, ./mongo #depending on your os

```

Once all are activated, go to localhost:6789.

## Built With

* [Mongodb/Mongoose](https://www.mongodb.com/) - NoSQL Database
* [ExpressJS](https://expressjs.com/) - Web Framework for Node.js
* [Angular4/5](https://angular.io/) - Front-End Framework - Single Page Application 
* [NodeJS](https://nodejs.org/en/) - Scalable Network Applications
* [Stripe](https://stripe.com/) - Online Payments
* [FileUpload/Multer](https://scotch.io/tutorials/express-file-uploads-with-multer) - Uploading Product Images to Mongodb

## Live Demo

* [Live Demo](http://54.146.235.215/) - Deployed through [AWS](https://aws.amazon.com/)


## Additional Information
- [Mongod](https://docs.mongodb.com/manual/reference/program/mongod/) </br>
- [NPM](https://docs.npmjs.com/) </br>
- [Angular-CLI // "ng build w"](https://github.com/angular/angular-cli) </br>
- [nodemon](https://github.com/remy/nodemon)


## Contributors
[Jake Kiernan](https://github.com/jakekiernan/)
</br>
[Steve Kim](https://github.com/Suykim21)
</br>
[Kelvin Lee](https://github.com/hiimkelvin)
</br>
[Kevin Ma](https://github.com/KMA91)
</br>
//Please feel free to leave feedback. We are open to constructive criticsm!
