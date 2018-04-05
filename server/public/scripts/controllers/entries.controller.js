TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;

    self.addEntry = TimeTrackerService.addEntry;
}]);