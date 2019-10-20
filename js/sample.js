var myapp = angular.module("myapp",[]);

myapp.controller("samplecontroller",function($scope){


    $scope.search = function(){
       search();
    }

    var search = function(){
        alert("bbbb")
    }


});