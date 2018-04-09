TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    //---------------------------------------  EntryController Functions -----------------------------------------

    // POST request for sending entry data to database
    self.addEntry = function(newEntry){
        console.log('addEntry clicked', newEntry);
        swal({
            title: "Add Task",
            text: "Task Entered",
            icon: "success",
            buttons: true,
          })
          .then((addEntry) => {
            if (addEntry) {
            $http.post('/entries', newEntry)
            .then(function(result){
            console.log('addEntry POST success', result);
            self.getEntries();
            self.getProjects();
        }).catch(function(error){
            console.log('addEntry POST error', error);
        }) // end $http POST route
            } else {
              swal("Oh no! Something went wrong!");
            }
          });
    } // end addEntry

    self.updateEntry = function(entry, editingId) {
        $http({
            method: 'PUT',
            url: `/entries/${editingId}`,
            data: entry 
        }).then((response) => {
            self.getEntries();
        })
    } 

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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((removeEntry) => {
            if (removeEntry) {
              swal("Task Deleted", {
                icon: "success",
              });
              $http.delete(`/entries/${entryId}`).then(function(result){
                console.log('removeEntry DELETE success', result);
                self.getEntries();
                self.getProjects();
            }).catch(function(error){
                console.log('removeEntry DELETE ERROR', error);
            }); // end $http DELETE route
            } else {
              swal("Task wasn't deleted");
            }
          });
    } // end removeEntry


    // ---------------------------------------- ProjectsController Functions -----------------------------------------

    // POST request for send project data to database
    self.addProject = function(newProject){
        swal({
            title: "Add Project",
            text: "Project Entered",
            icon: "success",
            buttons: true,
        })
        .then((addProject) => {
            if (addProject) {
            console.log('In addProject with new project', newProject);
            $http.post('/projects', newProject)
            .then(function(result){
                console.log('addProject POST success', result);
                self.getProjects();
            }).catch(function(error){
                    console.log('addProject POST ERROR', error);
            }); // end $http POST route
            } else {
                swal("Oh no! Something went wrong!");
            } // end if addProject
        });  
    }  

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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this project!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }) // end sweet dialog
          .then((removeProject) => {
            if (removeProject) {
              swal("Project Deleted", {
                icon: "success",
              }); // end sweet success
              $http.delete(`/projects/${projectId}`).then(function(result){
                console.log('removeProject DELETE success', result);
                self.getProjects();
            }).catch(function(error){
                console.log('removeProject DELETE ERROR', error);
            })
            } else {
              swal("Project wasn't deleted");
            } // end if removeProject
        })// end sweet delete
    } // end removeProjects

    self.getProjects();
}]);