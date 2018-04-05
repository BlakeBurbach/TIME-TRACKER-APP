TimeTrackerApp.controller('EntriesController', ['TimeTrackerService', 'moment', function(TimeTrackerService, moment){
    console.log('EntriesController loaded');
    let self = this;

    // self.newEntry.date = moment(self.newEntry.date).format("DD-MM-YYYY")
    self.newEntry = {description: '', date: '', startTime: '', endTime: ''};

    self.addEntry = function(entryToAdd){
        TimeTrackerService.addEntry(entryToAdd);
        let newTime = self.newEntry.endTime - self.newEntry.startTime;
        
        self.newEntry = {
            description: '',
            date: '',
            startTime: '',
            endTime: ''};
    }
    // console.log(self.newEntry);
}]);