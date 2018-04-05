TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('EntriesController loaded');
    let self = this;

    // self.newEntry.date = moment(self.newEntry.date).format("DD-MM-YYYY")
    self.newEntry = {description: '', date: '', startTime: '', EndTime: ''};
    // console.log(self.newEntry.date);

    self.addEntry = function(entryToAdd){
        TimeTrackerService.addEntry(entryToAdd);
        self.newEntry = {description: '', date: '', startTime: '', EndTime: ''};
        self.newEntry.date = moment(self.newEntry.date).format("MM-DD-YYYY");
        console.log(self.newEntry.date);
    }
}]);