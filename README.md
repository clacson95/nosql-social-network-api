# nosql-social-network-api [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This application is a back-end API to be used for a social network website. It utilizes Express, MongoDB, Mongoose, Moment.js, and Insomnia. 

## Table of Contents
* [Demo](#demo)
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

## Demo
### [Click here to watch a walkthrough video!](https://youtu.be/wmVHiRCeMTE)

## Usage

To use this back-end application, fork the repository, clone the repository, or download the ZIP file to access the code for yourself. This will require you to have a text editor. I recommend Visual Studio Code, but there are a plethora of other options available.

Next, follow the Installation instructions below.

Then enter `node server.js` in the terminal to start the application's server.

You can then use something like [Insomnia](https://insomnia.rest/products/insomnia) to run tests or make changes to the database.

## Installation
1. Ensure node.js is installed. 
3. Create a `package.json` file by entering the `npm init -y` command in the terminal. 
4. Install dependencies with the terminal command `npm install` or `npm i`
5. create the sql schema
    * enter `mysql -u root -p` in the terminal
    * enter your password when prompted
    * enter `source db/schema.sql` in the terminal
    * enter `exit` in the terminal to exit mysql
6. enter `npm run seed` in the terminal to seed the database

## License

    Copyright 2022 Caleb Lacson

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        [http://www.apache.org/licenses/LICENSE-2.0]

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

## How to Contribute
Fork the repository to make the code your own. Feel free to submit a pull request if you have made additions you think others would find beneficial.

## Questions
If you have any questions regarding this project, or anything else regarding my work, please reach out to me via email or GitHub.

[caleb.lacson@gmail.com](caleb.lacson@gmail.com)
  
[github.com/clacson95](github.com/clacson95)
