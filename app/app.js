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
      .when('/video/:videoid', {
        templateUrl: 'app/detailView.html',
        controller: 'DetailCtrl',
        resolve: {
          list: ['$stateParams', 'videos', function($stateParams, videos) {
            console.log('passing ' + $stateParams.videoid)
            return videos.detail($stateParams.videoid);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
