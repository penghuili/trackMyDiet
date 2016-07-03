angular
    .module('trackmydietApp')
    .controller('productsHomeCtrl', function ($scope, trackmydietData){

        var vm = this;
        vm.pageHeader =  "Products";

        trackmydietData.getAllProducts()
            .success(function(data) {
                $scope.products = data;
                console.log('products');
                console.log($scope.products);
        })
            .error(function (e) {
                vm.message = "Sorry, something's gone wrong, please try again later";
            });
         
            // $scope.products = [
        //     {id: 0, name: "product1 milk", brand: "REWE", image:"https://img.rewe-static.de/2165358/22374095_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%",glutenfree: true, kcal: 100, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
        //     {id: 1, name: "product2", brand: "qwerty", image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
        //     {id: 2, name: "product3",brand: "REWE",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100, vegan:false,vegetarian:true, halal:true, dietProgram:"123"},
        //     {id: 3, name: "product4 milk", brand: "REWE",image:"https://img.rewe-static.de/0990026/7558700_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
        //     {id: 4, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 5, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 6, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 7, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 8, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 9, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 10, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 11, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 12, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 13, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 14, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
        //     {id: 15, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, vegan:true, vegetarian:true, halal:false, dietProgram:"123"}
        // ];
});
