var app =angular.module("Myapp");
app.directive("footerDir",function(){
    return{
        'restrict':"E",
        'templateUrl':"views/footer.html"
    };
});