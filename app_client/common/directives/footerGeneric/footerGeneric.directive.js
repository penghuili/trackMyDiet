angular
.module('trackmydietApp')
.directive("footerGeneric", footerGeneric);

function footerGeneric() {
    return {
        templateUrl : "common/directives/footerGeneric/footerGeneric.view.html"
    };
}
