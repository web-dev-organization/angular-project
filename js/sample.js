var myapp = angular.module("myapp",[]);

myapp.controller("samplecontroller",function($scope){

    $scope.tableDisplayFlag = false;

    const memberLeverList = {
        "NM":"普通",
        "SL":"白银",
        "GD":"黄金",
        "DY":"钻石",
    }
    
    $scope.search = function(){
        if(validationCheck()){
            doSearch();
        }
    }

    var doSearch = function(){
        $scope.tableDisplayFlag = true;
        var infoList = [object1, object2, object3, object4, object5, object6, object7, object8, object9,]
        $scope.response = {
            status:200,
            data:infoList,
        };
    }

    $scope.clear = function(){
        $scope.Msg = {};
        $scope.memberId = null;
        $scope.memberName = null;
        $scope.memberLevel = null;
        $scope.memberCreatedAt = null;
        $scope.memberCreatedTo = null;
    }

    $scope.showMemberLevel = function($_memberLevel){
        return memberLeverList[$_memberLevel];
    }

    var validationCheck = function(){

        $scope.Msg = {}

        var result = true;

        if(!isValidMemberId($scope.memberId)){
            $scope.Msg.memberIdErrorMsg = "会员id必须为五位数！！"
        }

        if(!isValidMemberLevel($scope.memberLevel)){
            $scope.Msg.memberLevelErrorMsg = "请输入正确的会员等级!";
        }

        if(!isValidDate($scope.memberCreatedAt) || !isValidDate($scope.memberCreatedTo)){
            $scope.Msg.memberCreatedDateErrorMsg = "请输入正确的日期格式!";
        }

        if(!angular.equals($scope.Msg,{})){
            result = false;
        }

        return result;
    }


    var isNull = function($_object){
    }

    var isValidMemberId = function($_memberId){
        return $_memberId == 1;
    }

    var isValidMemberLevel = function($_memberLevel){
        return $_memberLevel == 1;
    }

    var isValidDate = function($_date){
        return $_date == 1;
    }



/**
 * DataBase 
 */
    var object1 = {
        No:"1",
        memberId:"00001",
        memberName:"user1",
        mailAddress:"sample1@gmail.com",
        phoneNum:"111-1111-1111",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/01",
        memberLevel:"GD"
    }

    var object2 = {
        No:"2",
        memberId:"00002",
        memberName:"user2",
        mailAddress:"sample2@gmail.com",
        phoneNum:"111-1111-2222",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/02",
        memberLevel:"GD"
    }
    
    var object3 = {
        No:"3",
        memberId:"00003",
        memberName:"user3",
        mailAddress:"sample3@gmail.com",
        phoneNum:"111-1111-3333",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/03",
        memberLevel:"DY"
    }

    var object4 = {
        No:"4",
        memberId:"00004",
        memberName:"user4",
        mailAddress:"sample4@gmail.com",
        phoneNum:"111-1111-4444",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/04",
        memberLevel:"NM"
    }

    var object5 = {
        No:"5",
        memberId:"00005",
        memberName:"user5",
        mailAddress:"sample5@gmail.com",
        phoneNum:"111-1111-5555",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/05",
        memberLevel:"SL"
    }

    var object6 = {
        No:"6",
        memberId:"00006",
        memberName:"user6",
        mailAddress:"sample6@gmail.com",
        phoneNum:"111-1111-6666",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/06",
        memberLevel:"DY"
    }

    var object7 = {
        No:"7",
        memberId:"00007",
        memberName:"user7",
        mailAddress:"sample7@gmail.com",
        phoneNum:"111-1111-7777",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/07",
        memberLevel:"GD"
    }

    var object8 = {
        No:"8",
        memberId:"00008",
        memberName:"user8",
        mailAddress:"sample8@gmail.com",
        phoneNum:"111-1111-8888",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/08",
        memberLevel:"SL"
    }

    var object9 = {
        No:"9",
        memberId:"00009",
        memberName:"user9",
        mailAddress:"sample9@gmail.com",
        phoneNum:"111-1111-9999",
        place:"000省000市000区000路",
        memberCreatedAt:"2020/01/09",
        memberLevel:"NM"
    }

}
);