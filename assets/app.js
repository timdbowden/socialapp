var app = angular.module('app',[]);
	app.controller('PostsCtrl', function($scope, $http){
		$http.get('/api/posts')
		.success(function(posts){
			$scope.posts = posts;
		});
		$scope.addPost = function() {
			if($scope.postBody){
				$http.post('/api/posts', {
					username: 'timdbowden',
					body: $scope.postBody
				}).success(function(post){
					$scope.posts.unshift(post);
					$scope.postBody = null;
				});
			}
		}
	});