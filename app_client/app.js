angular.module('trackmydietApp', ['ngRoute']);

function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/dietPrograms', {
        templateUrl: 'dietProgramsHome/dietProgramsHome.view.html',
        controller: 'dietProgramsHomeCtrl',
        controllerAs: 'vm'
      })
      .when('/dietPrograms/suggest', {
        templateUrl: 'dietProgramsSuggest/dietProgramsSuggest.view.html',
        controller: 'dietProgramsSuggestCtrl',
        controllerAs: 'vm'
      })
      .when('/dietPrograms/:dietprogramid', {
        templateUrl: 'dietProgramDetail/dietProgramDetail.view.html',
        controller: 'dietProgramDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }

angular
  .module('trackmydietApp')
  .config(['$routeProvider', '$locationProvider', config]);
