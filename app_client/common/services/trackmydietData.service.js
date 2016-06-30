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

  var addProduct = function(product) {
    return $http.post('/api/products', product);
  };

  return {
    dietPrograms: dietPrograms,
    dietProgramById: dietProgramById,
    addProduct: addProduct
  };
}
