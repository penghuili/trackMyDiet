angular
    .module('trackmydietApp')
    .directive("home", home);

function home() {
    return {
        templateUrl : "home/home.view.html",
        controller: "homeCtrl as homevm"
    };
}