var app = angular.module('app', ['ngRoute']);
app.config([
  '$routeProvider',
  function($routeProvider) {
    console.log('run app')
    $routeProvider
      .when('/', {
        templateUrl: 'app/listView.html',
        controller: 'ListCtrl',
        resolve: {
          listPromise: ['videos', function(videos) {
            return videos.list();
          }]
        }
      })
      .when('/:videoid', {
        templateUrl: 'app/detailView.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
