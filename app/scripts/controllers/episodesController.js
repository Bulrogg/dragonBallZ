'use strict';

angular.module('dragonBallApp').controller('episodesController', ['$scope', 'episodesService', function($scope, episodesService) {

	$scope.episodes = episodesService.listeDesEpisodes;

	$scope.episodeCourant = $scope.episodes[0];

}]);