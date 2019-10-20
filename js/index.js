var myapp = angular.module("myapp",[]);

myapp.controller("indexcontroller",function($scope){

    $scope.search=function(){
          alert("AAA");
    }

     var object1 = {
                No:"1",
                memberId:"00001",
                memberName:"user1",
                mailAddress:"sample1@gmail.com",
                phoneNum:"111-1111-1111",
                place:"000省000市000区000路",
                memberCreatedAt:"2020/01/01",
                memberStatus:"普通"
            }
   

    var object2 = {
                No:"2",
                memberId:"00002",
                memberName:"user2",
                mailAddress:"sample1@gmail.com",
                phoneNum:"111-1111-1111",
                place:"000省000市000区000路",
                memberCreatedAt:"2020/01/01",
                memberStatus:"普通"
            }
        

    var object3 = {
                No:"3",
                memberId:"00003",
                memberName:"user3",
                mailAddress:"sample1@gmail.com",
                phoneNum:"111-1111-1111",
                place:"000省000市000区000路",
                memberCreatedAt:"2020/01/01",
                memberStatus:"普通"
            }

    $scope.mylist=[object1,object2,object3];

});