const TimeTrackerApp = angular.module('TimeTrackerApp', ['ngRoute', 'ngMaterial']);

TimeTrackerApp.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {
        'default': '200', 
        'hue-1': '500', 
        'hue-2': '50', 
        'hue-3': '900', 
      })

      .accentPalette('teal', {
        'default': 'A200',
        'hue-1': 'A100',
        'hue-2': 'A700'
    })
        
      .warnPalette('red', {
          'default': '300'
    })
    });

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