var myApp=angular.module('myApp',[]);

myApp.controller('myAppController', function($scope,$http){
    
        $scope.getItem = function () {
            $http.get("/items").then(function (res) {
                console.log(res);
                console.log("Hello");
                $scope.items = res.data;
            })
        }
        $scope.getItem();

        $scope.addItem = function () {
            $http.post("/items",$scope.item).then(function (res) {
                console.log(res);
                $scope.getItem();
            })
        }
       
        $scope.removeItem = function(item){
            console.log(item);
            $http.delete('/items/'+ item._id ).then(function (res){
               console.log(res);
               $scope.getItem();
            })
        }
        
        $scope.editItem = function(item) {
            console.log(item);
            $http.get('/items/' + item._id).then(function (res) {
              $scope.item = res.data;
            });
        };  
          
        $scope.update = function() {
            console.log($scope.item._id);
            $http.put('/items/' + $scope.item._id, $scope.item).then(function(res) {
                console.log(res);
                $scope.getItem();
            })
        };
       
 })