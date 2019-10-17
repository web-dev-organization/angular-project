var myapp = angular.module("myapp",[]);

myapp.controller("samplecontroller",function($scope){

    $scope.sample = "abc"

    $scope.showSample = function(){
        alert($scope.sample);
    }




    
    $scope.setTrue = function(){
        $scope.ngif = true;
    }

    $scope.setFalse = function(){
        $scope.ngif = false;
    }

});