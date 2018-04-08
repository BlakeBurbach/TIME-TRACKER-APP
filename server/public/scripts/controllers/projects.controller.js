TimeTrackerApp.controller('ProjectsController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('ProjectsController loaded');
    let self = this;

    // connecting project.html inputs to service POST request
    self.addProject = TimeTrackerService.addProject;

    // connecting project.html table to service GET request
    self.getProjects = TimeTrackerService.getProjects;
    // self.getProjectsWithTotalTime = TimeTrackerService.getProjectsWithTotalTime;

    // the object of arrays back from database to display on DOM
    self.projectList = TimeTrackerService.projectList;

    // connecting project.html delete button to service DELETE request
    self.removeProject = TimeTrackerService.removeProject;

    self.projectShow= false;
}]);