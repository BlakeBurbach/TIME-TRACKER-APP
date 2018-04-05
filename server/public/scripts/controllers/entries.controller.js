TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', 'moment', function(TimeTrackerService, moment){
    console.log('EntriesController loaded');
    let self = this;

    // self.newEntry.date = moment(self.newEntry.date).format("DD-MM-YYYY")
    self.newEntry = {description: '', date: '', startTime: '', endTime: ''};

    self.addEntry = function(entryToAdd){
        TimeTrackerService.addEntry(entryToAdd);
        self.newEntry = {
            description: '',
            date: new Date("MM-DD-YYYY"),
            startTime: '',
            endTime: ''};
    }
}]);