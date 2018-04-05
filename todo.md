Project Scoping

- [x] Get file hierarchy setup
    - npm init and installs for all necessary dependencies 
    - .gitignore
    - server folder
        - server.js
        - routes
        - modules
    - public folder
        - index html
            - views/ templates/ 
        - scripts
            - controllers and services
        - styles
        - vendors

- [x] setup HTML skeleton
    - index.html
    - views:
        - entry.html
        - projects.html
    - templates:
        - nav.html

- [] setup the database in SQL
    - two tables: projects and entries

    - entries table:
        - id, project_id, task_name, date, start_time, and end_time

    - projects table
        - id, project_name, total_hours
