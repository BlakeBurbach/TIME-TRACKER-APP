TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;

    // connecting html inputs and buttons to service POST request
    self.addEntry = TimeTrackerService.addEntry;

    // connecting html table to service GET request for all entries in database
    self.getEntries = TimeTrackerService.getEntries;
    
    // the object with array of entries to display on the DOM
    self.listOfEntries = TimeTrackerService.listOfEntries;
}]);