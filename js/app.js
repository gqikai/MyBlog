var mySite = angular.module('mySite', [
    'ngRoute',
    'MySiteControllers',
    'MySiteServices'
]);

mySite.config(['$routeProvider',
    function($routeProvider) {
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
          controller: 'ArticleListCtrl',
          templateUrl: 'view/article-list.html'
      })
    .otherwise({redirectTo: '/'});
}])
