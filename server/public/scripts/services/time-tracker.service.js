TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    self.addEntry = function(newEntry){
        console.log('addEntry clicked newEntry');
        $http.post('/time_tracker', newEntry)
        .then(function(result){
            console.log('addEntry POST success', result);
        }).catch(function(error){
            console.log('addEntry POST error', error);
        })
    }
}]);