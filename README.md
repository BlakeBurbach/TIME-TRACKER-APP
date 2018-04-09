This is my Time Tracker App for my AngularJS capstone project.

This app was intended as a prototype for independent-workers or anybody who works
for themselves. The premise is that they can add clients and the projects that they are working on for them with an hourly rate per project. For every project added, they have the ability to document all of their hours per each project for every client. 
The main features are that they can add a description of the task for the project, a start date and time along with an end date and time and the app will calculate the difference between the two and give you total hours for that task.
Then back on the projects page, for every hour added up from the tasks, the project table will then reflect how many total hours have been worked on for every project and then it will tell you the total earnings by calculating the total hours by the hourly rate.
Then as a fun feature, there is a report page that has two graphs.
One graph to visually represent how many hours worked for each client, and the other table visually represents the pay from each client.

To-do list provided by Trello:
https://trello.com/b/SgrRzP09/blakes-time-tracker-app

A list of all the technologies and languages used in this project.
Front-End:
    -AngularJS
    -AngularJS Material Design
        -Aria, Messages, and Animate
    -ChartJS
    -Sweetalert
    -Google Fonts

Back-End:
    -NodeJS
    -Express
    -postgreSQL

For ease of using the database:
Database name is time_tracker
tables:

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	description VARCHAR(140),
	start_date timestamp,
	end_date timestamp,
	project_id INT REFERENCES projects 
);


CREATE TABLE projects (
	id SERIAL PRIMARY KEY,
	project_description VARCHAR(80),
	client VARCHAR(30),
	hourly_rate INT
);