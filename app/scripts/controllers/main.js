'use strict';

angular.module('emojilizerApp').controller('MainCtrl', function ($scope, emojiService) {

	$scope.input = '';
	$scope.output = '';

	$scope.$watch('input', function(newVal) {
		$scope.output = emojiService.convert(newVal);
	});

});