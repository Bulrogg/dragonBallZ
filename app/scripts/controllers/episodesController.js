'use strict';

angular.module('episodes.controller', []);

angular.module('episodes.controller').controller('episodesController', ['$scope', 'episodesService', function($scope, episodesService) {

	$scope.episodes = episodesService.listeDesEpisodes;

	$scope.episodeCourant = $scope.episodes[0];

	$scope.episodeSuivant = function() {
		$scope.episodeCourant = $scope.episodes[$scope.episodes.indexOf($scope.episodeCourant) + 1];
		return false;
	};

	$scope.episodePrecedent = function() {
		$scope.episodeCourant = $scope.episodes[$scope.episodes.indexOf($scope.episodeCourant) - 1];
		return false;
	};

	$scope.estLePremierEpisode = function() {
		return $scope.episodeCourant && $scope.episodeCourant.id === '001';
	};

	$scope.estLeDernierEpisode = function() {
		return $scope.episodeCourant && $scope.episodeCourant.id === '292';
	};

}]);