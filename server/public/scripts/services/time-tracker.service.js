TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    self.addEntry = function(newEntry){
        console.log('addEntry clicked newEntry', newEntry);
    }
}]);