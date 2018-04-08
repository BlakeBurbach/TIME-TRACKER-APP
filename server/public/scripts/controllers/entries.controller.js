TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;

    // connecting html inputs and buttons to service POST request
    self.addEntry = TimeTrackerService.addEntry;
    

    // connecting html table to service GET request for all entries in database
    self.getEntries = TimeTrackerService.getEntries;
    self.getProjects = TimeTrackerService.getProjects;
    
    // the object with array of entries to display on the DOM
    self.listOfEntries = TimeTrackerService.listOfEntries;
    // the object of arrays back from database to display on DOM
    self.projectList = TimeTrackerService.projectList;

    // connecting entry.html delete button to service DELETE request
    self.removeEntry = TimeTrackerService.removeEntry;

    self.taskShow = false;
}]);