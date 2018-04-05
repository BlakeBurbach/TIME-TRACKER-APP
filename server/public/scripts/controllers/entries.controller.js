TimeTrackerApp.controller('EntriesController', function(){
    console.log('EntriesController loaded');
    let self = this;

    self.addEntry = TimeTrackerService.addEntry;
});