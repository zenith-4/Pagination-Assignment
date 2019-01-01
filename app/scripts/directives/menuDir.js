var app =angular.module("Myapp");
app.directive("menuDir",function(){
    return{
        'restrict':"E",
        'templateUrl':"views/menu.html"
    };
});