
/* Services */

var MySiteServices = angular.module('MySiteServices', ['ngResource']);

MySiteServices.factory('Article', ['$resource',
    function($resource){
        return $resource('articles/:articleID.json', {}, {
            query: {method:'GET', params:{articleID:'articles'}, isArray:true}
        });
    }]);
