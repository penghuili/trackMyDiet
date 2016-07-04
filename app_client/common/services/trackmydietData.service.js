angular
  .module('trackmydietApp')
  .service('trackmydietData', trackmydietData);

function trackmydietData ($http, authentication) {

  var getDietPrograms = function() {
    return $http.get('/api/dietPrograms');
  };

  var getDietProgramById = function(dietprogramid) {
    return $http.get('/api/dietPrograms/' + dietprogramid);
  };

  var addDietProgram = function(data) {
    return $http.post('/api/dietProgram', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  var getProducts = function() {
    return $http.get('/api/products');
  };

  var getProductById = function(productid) {
    return $http.get('/api/products/' + productid);
  };

  var getProductsByDietProgramName = function(dietName) {
    return $http.get('/api/products/diet/' + dietName);
  };

  var addProduct = function(data) {
    console.log("addProduct in service");
    return $http.post('/api/product', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
      }
    });
  };

  var getShopById = function (shopid) {
    return $http.get('/api/shops/' + shopid);
  };

  var addDiary = function(data) {
    console.log("in addDiary");
    return $http.post('/api/diary/add', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  var addMealPlan = function(data) {
    return $http.post('/api/diary/plan', data, {
      headers: {
        Authorization: 'Bearer ' + authentication.getToken()
        }
     });
  };

  return {
    getDietPrograms: getDietPrograms,
    getDietProgramById: getDietProgramById,
    addDietProgram: addDietProgram,
    getProducts: getProducts,
    getProductById: getProductById,
    getProductsByDietProgramName: getProductsByDietProgramName,
    addProduct: addProduct,
    getShopById: getShopById,
    addDiary: addDiary,
    addMealPlan: addMealPlan
  };
}
