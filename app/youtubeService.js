angular.module('app').factory('videos', ['$http', function($http) {
  const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'

  var o = {
    feed: []
  };

  o.list = function() {
    return $http.get(url).success(function(data) {
      console.log(data)
      angular.copy(data.items, o.feed);
    });
  };

  o.detail = function(id) {
    console.log(id + ' requested')
    console.log(o.feed)
    let selectedVideo
    o.feed.map((video) => {
      console.log('comparing ' + video + id)
      if (video.snippet.resourceId.videoId == id) {
        selectedVideo = video
      }
    })
    return selectedVideo
  };

  return o;
}]);
