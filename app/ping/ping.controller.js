(function () {

  'use strict';

  angular
    .module('app')
    .controller('PingController', pingController);

  pingController.$inject = ['$http', 'authService'];

  function pingController($http, authService) {

    var API_URL = 'http://api.github.com/gists/public';
    var vm = this;
    vm.auth = authService;
    vm.message = '';
    vm.ping = function() {
      vm.message = '';
      $http.get(API_URL).then(function(result) {
        vm.message = result.data;
        console.log(result.data);
      }, function(error) {
        vm.message = error;
      });
    }
    
  //   $scope.data = {};

  // $http.get(dataUrl)
  //       .success(function(data){
  //            $scope.data.product = data;
             
  //       })
 // $scope.SendData = function () {
 //           // use $.param jQuery function to serialize data from JSON 
 //            var data = $.param({
 //                fName: $scope.firstName,
 //                lName: $scope.lastName
 //            });

 var data = {
         "description": "the description for this gist",
           "public": true,
           "files": {
           "file1.txt": {
         "content": "String file contents"
         }
        }
      }
     

    vm.securedPing = function() {
      vm.message = '';
      $http.post("http://api.github.com/gists", JSON.stringify(data)).then(function(result) {
        vm.message = result.data;
        console.log(result.data);
      }, function(error) {
        vm.message = error;
      });
    }

  }

})();