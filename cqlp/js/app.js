var cqlpApp = angular.module('cqlpApp', []);

cqlpApp.controller('CqlpCtrl', function($scope,$http) {
	$scope.choix1 = '';
	$scope.url1 = [];
	
	$scope.compteur = 0;

	$scope.fetch = function() {
		var url = 'http://www.cestquoilepire.fr/webmaster.php?out=json';

		$http.get(url).success(function(data) {

			$scope.choix1 = data.dilemme1;
			//$scope.url1 = data.url1;

			$scope.compteur++;

			return false;
		}).error(function(){alert('ko')});
	};
	
});