angular
.module('trackmydietApp')
.directive("adminSidebar", adminSidebar);

function adminSidebar() {
    return {
        templateUrl : "/common/directives/adminSidebar/adminSidebar.view.html"
    };
}
