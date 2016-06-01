angular
  .module('trackmydietApp')
  .service('trackmydietData', trackmydietData);

function trackmydietData ($http) {
  var dietPrograms = function() {
    return $http.get('/api/dietPrograms');
  };
  
  var dietProgramById = function(dietprogramid) {
    return $http.get('/api/dietPrograms/' + dietprogramid);
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById
  };
}
