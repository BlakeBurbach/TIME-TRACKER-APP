let TimeTrackerApp = angular.module('TimeTrackerApp', ['ngRoute', 'ngMaterial']);

TimeTrackerApp.config(['$routeProvider', function($routeProvider){
    console.log('config loaded');
    let self = this;

    $routeProvider
        .when('/', {
            redirectTo: '/entries'
        })
        .when('/entries', {
            templateUrl: '/views/entries.html',
            controller: 'EntriesController as vm'
        })
        .when('/projects', {
            templateUrl: '/views/projects.html',
            controller: 'ProjectsController as vm'
        })
        .when('/reports', {
            templateUrl: '/views/reports.html',
            controller: 'ReportsController as vm'
        })
        .otherwise({
            template: '<h1>404 Not Found</h1>'
        });

}]);