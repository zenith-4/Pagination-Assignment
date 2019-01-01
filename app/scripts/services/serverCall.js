"use strict"
var app = angular.module("Myapp");
app.service("serverCall",function($http){
    this.sendReq=function(url,method,scb,ecb){
        $http({
            'url':url,
            'method':method
        })
        .then(function(res){scb(res)},function(res){ecb([])});
    };
});