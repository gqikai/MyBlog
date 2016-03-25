/**
 * Created by gaoqikai on 16/3/25.
 */
angular.module("MyApp", ["ngRoute","MyController", "MyService"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: "../view/home.html",
                controller: "IndexController"
            });
    }]);