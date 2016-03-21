
/* Controllers */

var MySiteControllers = angular.module('MySiteControllers', []);

MySiteControllers.controller('ArticleListCtrl', ['$scope', 'Article',
    function($scope, Article) {
        $scope.articles = Article.query();
        console.log(Article.query())
    }]);

MySiteControllers.controller('NavCtrl', ['$scope', 'Article',
    function($scope, Article) {
    }]);

