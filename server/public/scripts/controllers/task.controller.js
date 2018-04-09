TimeTrackerApp.controller('TasksController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('TasksController loaded');
    let self = this;

    // connecting html inputs and buttons to service POST request
    self.addTask = TimeTrackerService.addTask;
    
    // connecting html table to service GET request for all tasks and projects in database
    self.getTasks = TimeTrackerService.getTasks;
    self.getProjects = TimeTrackerService.getProjects;
    
    // the object with array of tasks to display on the DOM
    self.listOfTasks = TimeTrackerService.listOfTasks;
    // the object of arrays back from database to display on DOM
    self.projectList = TimeTrackerService.projectList;

    // connecting task.html delete button to service DELETE request
    self.removeTask = TimeTrackerService.removeTask;

    // This hides the input field for tasks until the 'Add Task' button is clicked
    self.taskShow = false;
}]);