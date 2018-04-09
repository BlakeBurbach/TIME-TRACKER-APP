TimeTrackerApp.service('TimeTrackerService', ['$http', function($http){
    console.log('TimeTrackerService loaded');
    let self = this;

    //---------------------------------------  TaskController Functions -----------------------------------------

    // POST request for sending task data to database
    self.addTask = function(newTask){
        // console.log('addTask clicked', newTask);
        swal({
            title: "Add Task",
            text: "Task Entered",
            icon: "success",
            buttons: true,
          })
          .then((addTask) => {
            if (addTask) {
            $http.post('/tasks', newTask)
            .then(function(result){
            // console.log('addTask POST success', result);
            self.getTasks();
            self.getProjects();
        }).catch(function(error){
            // console.log('addTask POST error', error);
        }) // end $http POST route
            } else {
              swal("Oh no! Something went wrong!");
            }
          });
    } // end addTask

    // object full of all task data to send back to DOM 
    self.listOfTasks = {list: []};

    // GET request for retrieving task data from database
    self.getTasks = function(){
        // console.log('in getTasks');
        $http.get('/tasks').then(function(result){
            // console.log('getTasks GET success', result.data);
            self.listOfTasks.list = result.data;
        }).catch(function(error){
            console.log('getTasks GET error', error);
        }); // end $http GET route
    } // end getTasks

    // DELETE request to delete project from database
    self.removeTask = function(taskId){
        // console.log('In removeTask');
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((removeTask) => {
            if (removeTask) {
              swal("Task Deleted", {
                icon: "success",
              });
              $http.delete(`/tasks/${taskId}`).then(function(result){
                // console.log('removeTasky DELETE success', result);
                self.getTasks();
                self.getProjects();
            }).catch(function(error){
                console.log('removeTask DELETE ERROR', error);
            }); // end $http DELETE route
            } else {
              swal("Task wasn't deleted");
            }
          });
    } // end removeTask


    // ---------------------------------------- ProjectsController Functions -----------------------------------------

    // POST request to send project data to database
    self.addProject = function(newProject){
        swal({
            title: "Add Project",
            text: "Project Entered",
            icon: "success",
            buttons: true,
        })
        .then((addProject) => {
            if (addProject) {
            // console.log('In addProject with new project', newProject);
            $http.post('/projects', newProject)
            .then(function(result){
                // console.log('addProject POST success', result);
                self.getProjects();
            }).catch(function(error){
                    console.log('addProject POST ERROR', error);
            }); // end $http POST route
            } else {
                swal("Oh no! Something went wrong!");
            } // end if addProject
        });  
    }  

    // object of all project data to send back to display on DOM
    self.projectList = {list: []};

    // GET request to retrieve project data from the database
    self.getProjects = function(){
        // console.log('in getProjects');
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
                // console.log('removeProject DELETE success', result);
                self.getProjects();
            }).catch(function(error){
                console.log('removeProject DELETE ERROR', error);
            })
            } else {
              swal("Project wasn't deleted");
            } // end if removeProject
        })// end sweet delete
    } // end removeProjects

    self.getTasks(); // call to get all task entry data upon page load
    self.getProjects(); // call to get all projects on page load
}]);