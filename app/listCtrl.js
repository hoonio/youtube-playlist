app.controller('ListCtrl', ['$scope', 'videos',
  function($scope, videos) {
    console.log('processing list view')
    $scope.name = "My YouTube Playlist";
    $scope.feed = videos.feed
}]);
