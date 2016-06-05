angular
.module('trackmydietApp')
.directive("navigation", navigation);

function navigation() {
    return {
        templateUrl : "common/directives/navigation/navigation.view.html",
        controller: "navigationCtrl as navvm"
    };
}
