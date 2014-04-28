scienceApp.filter('replace', function() {
	return function (input){
		return input.replace('stupidity', 'ego');
	};
});

// Controller included to supply data
scienceApp.controller('stringData', ['$scope', function ($scope) {
    $scope.string = "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.";
}]);