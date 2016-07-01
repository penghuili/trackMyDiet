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

  var addProduct = function(product) {
    return $http.post('/api/products', product);
  };

  var addDiary = function(data) {
    console.log("in addDiary");
    return $http.post('/api/diary/add', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById,
    addProduct: addProduct,
    addDiary: addDiary
  };
}