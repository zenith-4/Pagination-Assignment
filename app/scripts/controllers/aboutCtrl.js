"use strict"
var app = angular.module("Myapp");
app.controller("aboutCtrl",function($scope,serverCall){
  $scope.fnGetpic=function(){
    serverCall.sendReq("http://jsonplaceholder.typicode.com/photos","get",function(res){
      $scope.data=res.data.slice(0,100);
      $scope.totalData=res.data;
      $scope.perpage=100;
      $scope.totalpage=$scope.totalData.length/$scope.perpage;
    },function(res){
      $scope.data=res;
    });
  };
  $scope.currpage=1;
  $scope.totalpage=0;
  $scope.prepareData=function(){
    var end=($scope.perpage*$scope.currpage);
    var start= end - $scope.perpage;
    $scope.data=$scope.totalData.slice(start,end);
  };
  $scope.fnNext=function(){
    ++$scope.currpage;
    $scope.prepareData();
  };
  $scope.fnPre=function(){
    --$scope.currpage;
    $scope.prepareData();
  };
  $scope.fnGoto=function(){
    $scope.go = Number(document.getElementById('go').value);
    console.log($scope.go)
    $scope.currpage = $scope.go;
    // $scope.prepareData();
    // $scope.currpage=$scope.goto;
    $scope.prepareData();
  }; 
});