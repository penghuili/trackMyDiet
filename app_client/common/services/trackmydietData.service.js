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

  var getProduct = function(productID) {
    return $http.get('/api/products/' + productID);
  };

  var getAllProducts = function() {
    return $http.get('/api/products');
  };

  var getShop = function (shopID) {
    return $http.get('/api/shops/' + shopID);
  }
  
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
    addDiary: addDiary,
    getAllProducts: getAllProducts,
    getProduct: getProduct,
    getShop: getShop
};
}