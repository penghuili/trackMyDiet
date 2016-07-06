angular
  .module('trackmydietApp')
  .service('utils', utils);

function utils ($http, authentication) {

  var getDietPrograms = function() {
    return $http.get('/api/dietPrograms');
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
