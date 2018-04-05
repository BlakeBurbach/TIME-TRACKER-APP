TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;
    
    self.newEntry = {description: '', date: '', startTime: '', EndTime: ''}

    self.addEntry = function(entryToAdd){
        TimeTrackerService.addEntry(entryToAdd);
        self.newEntry = {description: '', date: '', startTime: '', EndTime: ''};
    }
}]);