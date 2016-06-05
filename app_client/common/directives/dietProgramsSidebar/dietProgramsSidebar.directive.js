angular
.module('trackmydietApp')
.directive("dietProgramsSidebar", dietProgramsSidebar);

function dietProgramsSidebar() {
    return {
        templateUrl : "/common/directives/dietProgramsSidebar/dietProgramsSidebar.view.html",
        controller: "dietProgramsSidebarCtrl as dietvm"
    };
}
