angular
  .module('trackmydietApp')
  .service('trackmydietData', trackmydietData);

function trackmydietData ($http, authentication) {
  var dietPrograms = function() {
    return $http.get('/api/dietPrograms');
  };

  var dietProgramById = function(dietprogramid) {
    return $http.get('/api/dietPrograms/' + dietprogramid);
  };

  var addDiary = function(data) {
    console.log("in addDiary");
    return $http.post('/api/diary/add', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  var addDietProgram = function(data) {
    return $http.post('/api/dietPrograms', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById,
    addDiary: addDiary,
    addDietProgram: addDietProgram
  };
}
