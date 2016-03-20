angular.module('mysite', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'IndexController',
      templateUrl: 'view/index.html'
    })
    .when('/index', {
        controller: 'IndexController',
        templateUrl: 'view/index.html'
    })
      .when('/aboutMe', {
          controller: 'AboutMeController',
          templateUrl: 'view/aboutMe.html'
      })
      .when('/blog', {
          controller: 'IndexController',
          templateUrl: 'view/blog.html'
      })
    .otherwise({redirectTo: '/'});
}])

.controller('IndexController', function($scope) {
  // define controller to prevent console error
})

.controller('AboutMeController', function($scope) {
    // define controller to prevent console error
})

.controller('NavController', function($scope,$location) {
    $scope.jump = function () {
        alert('helo')
    }
})

.controller('InboxController', function($scope, $routeParams, $location) {
  $scope.name = $routeParams.name;
    $scope.clickMe = function () {
        $location.path('/inbox/:alice')
    }

});