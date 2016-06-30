var demoApp = angular.module('trackmydietApp');
demoApp.controller('PermissionsForm', function ($scope) {

  // Mock data. You must receive it from your server
  $scope.mockData = {
    admin: {
      value: 'field1 value'
    },
    field3: {
      value: 'field3 value'
    },
    field4: {
      value: 'field4 value'
    }
  };

// get username
  // username is then input of this function

  $scope.displayField = function(fieldName){
    if ( $scope.mockData[fieldName] == undefined )
      return false;
    return true;
  }
});
