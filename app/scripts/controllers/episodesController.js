'use strict';

angular.module('episodes.controller', []);

angular.module('episodes.controller').controller('episodesController', ['$scope', 'episodesService', function($scope, episodesService) {

	$scope.episodes = episodesService.listeDesEpisodes;

	$scope.episodeCourant = localStorage.idEpisodeCourant ? _.find($scope.episodes, function(o){return o.id===localStorage.idEpisodeCourant; }) : $scope.episodes[0];

	$scope.storeEpisodeCourant = function(ep) {
		localStorage.setItem('idEpisodeCourant', ep.id);
	};

	$scope.episodeSuivant = function() {
		$scope.episodeCourant = $scope.episodes[$scope.episodes.indexOf($scope.episodeCourant) + 1];
		$scope.storeEpisodeCourant($scope.episodeCourant);
		return false;
	};

	$scope.episodePrecedent = function() {
		$scope.episodeCourant = $scope.episodes[$scope.episodes.indexOf($scope.episodeCourant) - 1];
		$scope.storeEpisodeCourant($scope.episodeCourant);
		return false;
	};

	$scope.estLePremierEpisode = function() {
		return $scope.episodeCourant && $scope.episodeCourant.id === '001';
	};

	$scope.estLeDernierEpisode = function() {
		return $scope.episodeCourant && $scope.episodeCourant.id === '292';
	};

}]);