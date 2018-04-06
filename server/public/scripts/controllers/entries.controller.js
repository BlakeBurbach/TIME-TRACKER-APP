TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;

    self.addEntry = function(entryToAdd){
        console.log('in addEntry', entryToAdd);
        TimeTrackerService.addEntry(entryToAdd);
    }

    self.getEntries = TimeTrackerService.getEntries;

    self.listOfEntries = TimeTrackerService.listOfEntries;
}]);