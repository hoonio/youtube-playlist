app.controller('DetailCtrl', ['$scope', 'videos', '$routeParams', '$sce',
  function($scope, videos, $routeParams, $sce) {
    console.log('processing detail view' + $routeParams.videoid)
    $scope.name = "My YouTube Playlist";
    $scope.detail = videos.detail($routeParams.videoid)
    $scope.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/'+$scope.detail.snippet.resourceId.videoId)
}]);
