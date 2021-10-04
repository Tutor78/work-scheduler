# Work Day

![badmath](https://img.shields.io/badge/License-MIT-informational)
![badmath](https://img.shields.io/badge/Contributors-4-yellow)
![badmath](https://img.shields.io/badge/Javascript-100%-green)

## Description

Work Day is a scheduler aimed at resteraunt managers and employees. It tries to make it easy for both managers and employees to not only see when they are scheduled but also to help maintain a clean calendar that is clear and concise.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Contributors](#contributors)
* [Technologies](#technologies)
* [License](#license)
* [Roadmap](#roadmap)

## Installation

To install work day on your own computer follow the steps below:

* Clone the repository from [GitHub](https://github.com/Tutor78/work-scheduler).
* Navigate to the root directory.
* Open the command line and login to the MySql cli
* Run ```source db/schema.sql``` to create the database.
* Set the database to be used as work_scheduler_db.
* Run ```source db/seeds.sql``` to seed the database with the needed information to make the app work.
* Run ```npm install```
* Create a .env file with the following parameters:
    * DB_NAME='work_scheduler_db'
    * DB_USER='your-database-user'
    * DB_PW='your-database-password'
    * SECRET='random-string'
* Run ```npm start``` or ```nodemon server.js``` if you have nodemon installed to begin the server.
* Navigate to localhost:3001 and you will be greeted with the login page.

## Usage

To use [Work Day](https://project-two-scheduler.herokuapp.com/) you must first create an account. When creating an account, you will be given the option to choose a job from an list that is pulled from the database. Upon picking a job and creating a new account you will be directed to one of two screens depending on the job. If you have created a manager account you will be sent to a red manager screen and if you have picked any other job you will be sent to a blue employee screen.

If you are on the manager screen you will be able to pick which department to look at from a group of departments that are stored in the database. After picking a department a list of employees in that department will be displayed below. When you click an employee the calendar is populated with information pertaining to that employee's schedule. To add a new shift just click on the corresponding boxes below the day you wish to assign a shift. The boxes are stacked with the top being for morning shift and the bottom for afternoon shift. A button will be created that has a trash icon on it. You can use this to remove a shift. Once you are finished with the shifts click the publish button and the information will be sent to the database. 

If you are on the employee screen all shifts that are assigned to the employee will be displayed in the corresponding boxes depending on the date and time.

## Screenshots

* Login Page

    * ![Alt text](/screenshot/login-screenshot.png)

* Manager Screen

    * ![Alt text](/screenshot/manager-screenshot.png)

* Employee Screen

    * ![Alt text](/screenshot/employee-screenshot.png)

## Contributors

* Mike Tutor
    * Team Leader
    * Backend

* Shannon Posey
    * Backend

* William Mackie
    * Lead Designer
    * Frontend

* Tyler Pennington
    * Frontend

## Technologies

* Javascript
* CSS3
* HTML5
* Bootstrap
* Handlebars
* Animate.css
* Express.js
* node.js
* bcrypt

## License

This project is licensed under the [MIT](LICENSE) license.

## Roadmap

* Managers:
    * Add ability to see how many hours an employee is scheduled for:
        * Create a color coded system for when an employee is scheduled overtime
        * Limit the shifts that are able to be given based on the availability of an employee
    * Add ability to manage employee's:
        * Update
        * Create
        * Delete
    * Extend the days that can be scheduled to two weeks.
* Employees:
    * Add ability to update availability.
    * Add ability to request time off.
    * Add ability to update information including email and password.
