TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', 'moment', function(TimeTrackerService, moment){
    console.log('EntriesController loaded');
    let self = this;

    self.addEntry = function(entryToAdd){
        console.log('in addEntry', entryToAdd);
        TimeTrackerService.addEntry(entryToAdd);
    }
}]);