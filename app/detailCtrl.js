angular.module('app').controller('DetailCtrl', ['$scope',
  function($scope) {
    console.log('processing detail view')
    $scope.name = "My YouTube Playlist";
}]);
