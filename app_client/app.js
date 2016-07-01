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
      .when('/dietPrograms/suggest/result', {
        templateUrl: 'dietProgramsSuggestResult/dietProgramsSuggestResult.view.html',
        controller: 'dietProgramsSuggestResultCtrl',
        controllerAs: 'vm'
      })
        .when('/dietPrograms/linkProducts', {
          templateUrl: 'dietProgramsLinkProducts/dietProgramsLinkProducts.view.html',
          controller: 'dietProgramsLinkProductsCtrl',
          controllerAs: 'vm'
        })
      .when('/dietPrograms/:dietprogramid', {
        templateUrl: 'dietProgramDetail/dietProgramDetail.view.html',
        controller: 'dietProgramDetailCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'auth/register/register.view.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'auth/login/login.view.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      .when('/mydiet', {
        templateUrl: 'diaryHome/diaryHome.view.html',
        controller: 'diaryHomeCtrl',
        controllerAs: 'vm'
      })
      .when('/mydiet/add', {
        templateUrl: 'diaryAdd/diaryAdd.view.html',
        controller: 'diaryAddCtrl',
        controllerAs: 'vm'
      })
      .when('/mydiet/plan', {
        templateUrl: 'diaryMealPlan/diaryMealPlan.view.html',
        controller: 'diaryMealPlanCtrl',
        controllerAs: 'vm'
      })
      .when ('/products', {
        templateUrl: 'productsHome/productsHome.view.html',
        controller: 'productsHomeCtrl',
        controllerAs: 'vm'
      })
      .when ('/products/:id', {
        templateUrl: 'productsDetails/productsDetails.view.html',
        controller: 'productsDetailsCtrl',
        controllerAs: 'vm'
      })
      .when('/admin', {
        templateUrl: 'adminHome/adminHome.view.html',
        controller: 'adminHomeCtrl',
        controllerAs: 'vm'
      })
      .when('/product/add', {
        templateUrl: 'adminProductAdd/productAdd.view.html',
        controller: 'productAddCtrl',
        controllerAs: 'vm'
      })
      .when('/dietProgram/add', {
        templateUrl: 'adminDietProgramAdd/dietProgramAdd.view.html',
        controller: 'dietProgramAddCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }

angular
  .module('trackmydietApp')
  .config(['$routeProvider', '$locationProvider', config]);
