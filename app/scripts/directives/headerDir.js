var app =angular.module("Myapp");
app.directive("headerDir",function(){
    return{
        'restrict':"E",
        'templateUrl':"views/header.html"
    };
});