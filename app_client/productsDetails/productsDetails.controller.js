angular
    .module('trackmydietApp')
    .controller('productsDetailsCtrl', function ($scope){

        $scope.dummyData = [
            {id: 0 , name: "product1 Rama", brand: "REWE", image:"https://img.rewe-static.de/2165358/22374095_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%",glutenfree: true, kcal: 100, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
            {id: 1 , name: "product2", brand: "qwerty", image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
            {id: 2 , name: "product3",brand: "REWE",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100,fat:"2%", glutenfree: true, vegan:false,vegetarian:true, halal:true, dietProgram:"123"},
            {id: 3 , name: "product4 Rama", brand: "REWE",image:"https://img.rewe-static.de/0990026/7558700_digital-image.png?resize=260px:260px", kcal: 100, kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:true, dietProgram:"123"},
            {id: 4 , name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 5 , name: "product6", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 6 , name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 7 , name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 8 , name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 9 , name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:false, halal:false, dietProgram:"123"},
            {id: 10, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 11, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 12, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 13, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 14, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"},
            {id: 15, name: "product5", brand: "abc",image:"https://img.rewe-static.de/6337279/3559990_digital-image.png?resize=260px:260px", kcal: 100, fat:"2%", glutenfree: true, vegan:true, vegetarian:true, halal:false, dietProgram:"123"}
        ];

        $scope.product = $scope.dummyData[0];
        var vm = this;
        vm.pageHeader =  $scope.product.name;
        
        $scope.shops = [
            {id:0, name: "LIDL", price: 0.7, link:"https://shop.rewe.de/kochen-backen/backkakao/dr-oetker-kakao-zum-backen-100g/PD960141"},
            {id:1, name: "REWE", price: 0.98, link:"https://shop.rewe.de/kochen-backen/backkakao/dr-oetker-kakao-zum-backen-100g/PD960141"},
            {id:2, name: "Aldi", price: 0.65, link:"https://shop.rewe.de/kochen-backen/backkakao/dr-oetker-kakao-zum-backen-100g/PD960141"},
            {id:3, name: "ABC", price: 0.7, link:"https://shop.rewe.de/kochen-backen/backkakao/dr-oetker-kakao-zum-backen-100g/PD960141"}
        ]

        $scope.reverse = true;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
    });