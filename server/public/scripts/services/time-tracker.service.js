TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    //---------------------------------------  EntryController Functions -----------------------------------------

    // POST request for sending entry data to database
    self.addEntry = function(newEntry){
        console.log('addEntry clicked', newEntry);
        $http.post('/entries', newEntry)
        .then(function(result){
            console.log('addEntry POST success', result);
            self.getEntries();
            self.getProjects();
        }).catch(function(error){
            console.log('addEntry POST error', error);
        }) // end $http POST route
    } // end addEntry

    self.listOfEntries = {list: []};

    // GET request for retrieving entry data from database
    self.getEntries = function(){
        console.log('in getEntries');
        $http.get('/entries').then(function(result){
            console.log('getEntries GET success', result.data);
            self.listOfEntries.list = result.data;
        }).catch(function(error){
            console.log('getEntries GET error', error);
        }); // end $http GET route
    } // end getEntries
    self.getEntries(); // call upon page load

    // DELETE request to delete project from database
    self.removeEntry = function(entryId){
        console.log('In removeEntry');
        $http.delete(`/entries/${entryId}`).then(function(result){
            console.log('removeEntry DELETE success', result);
            self.getEntries();
            self.getProjects();
        }).catch(function(error){
            console.log('removeEntry DELETE ERROR', error);
        }); // end $http DELETE route
    } // end removeEntry


    // ---------------------------------------- ProjectsController Functions -----------------------------------------

    // POST request for send project data to database
    self.addProject = function(newProject){
        console.log('In addProject with new project', newProject);
        $http.post('/projects', newProject).then(function(result){
            console.log('addProject POST success', result);
            self.getProjects();
        }).catch(function(error){
            console.log('addProject POST ERROR', error);
        }); // end $http POST route
    } // end addProjects

    self.projectList = {list: []};

    // GET request to retrieve project data from the database
    self.getProjects = function(){
        console.log('in getProjects');
        $http.get('/projects').then(function(result){
            console.log('getProjects GET success result.data', result.data);
            self.projectList.list = result.data;
        }).catch(function(error){
            console.log('getProjects GET ERROR', error);
        }); // end $http GET route
    } // end getProjects
    

    // DELETE request to delete project from database
    self.removeProject = function(projectId){
        console.log('In removeProject');
        $http.delete(`/projects/${projectId}`).then(function(result){
            console.log('removeProject DELETE success', result);
            self.getProjects();
        }).catch(function(error){
            console.log('removeProject DELETE ERROR', error);
        })
    }

    self.getProjects();
}]);