var cqlpApp = angular.module('cqlpApp', []);

cqlpApp.controller('CqlpCtrl', function($scope,$http) {
	$scope.choix1 = '';
	$scope.choix2 = '';
	$scope.url = '';
	
	$scope.compteur = 0;

	$scope.fetch = function() {
		var url = 'http://www.cestquoilepire.fr/webmaster.php?out=mobile';

		$http.get(url).success(function(data) {

			$scope.choix1 = data.dilemme1;
			$scope.choix2 = data.dilemme2;
			$scope.url = data.identifiant;

			$scope.compteur++;

			return false;
		}).error(function(){alert('ko')});
	};
	
});