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

<<<<<<< HEAD
  var addProduct = function(product) {
    return $http.post('/api/products', product);
=======
  var addDiary = function(data) {
    console.log("in addDiary");
    return $http.post('/api/diary/add', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
>>>>>>> e14448db6d4f1ef78c2d5d58890a7cf467095d72
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById,
<<<<<<< HEAD
    addProduct: addProduct
=======
    addDiary: addDiary
>>>>>>> e14448db6d4f1ef78c2d5d58890a7cf467095d72
  };
}
