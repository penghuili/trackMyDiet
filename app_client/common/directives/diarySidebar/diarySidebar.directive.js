angular
  .module('trackmydietApp')
  .directive("diarySidebar", diarySidebar);

function diarySidebar() {
    return {
        templateUrl : "/common/directives/diarySidebar/diarySidebar.view.html"
    };
}