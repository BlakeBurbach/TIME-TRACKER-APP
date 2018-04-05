TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    self.addEntry = function(newEntry){
        console.log('addEntry clicked', newEntry);
        $http.post('/entries', newEntry)
        .then(function(result){
            console.log('addEntry POST success', result);
        }).catch(function(error){
            console.log('addEntry POST error', error);
        }) // end post route
    } // end addEntry

    self.listOfEntries = {list: []};

    self.getEntries = function(){
        console.log('in getEntries');
        $http.get('/entries').then(function(result){
            console.log('getEntries GET success', result);
            self.listOfEntries.list = result.data;
        }).catch(function(error){
            console.log('getEntries GET error', error);
        })
    }
    self.getEntries();
}]);