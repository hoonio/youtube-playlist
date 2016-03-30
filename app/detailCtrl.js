app.controller('DetailCtrl', ['$scope', 'videos', '$routeParams',
  function($scope, videos, $routeParams) {
    console.log('processing detail view' + $routeParams.videoid)
    $scope.name = "My YouTube Playlist";
    $scope.detail = videos.detail($routeParams.videoid)
}]);
