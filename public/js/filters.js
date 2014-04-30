scienceApp.filter('replace', function() {
	return function (input){
		return input.replace('stupidity', 'ego')
					.replace('test','wee');
	};
});

// Controller included to supply data
scienceApp.controller('stringData', ['$scope', function ($scope) {
    $scope.scientists = [
    {name: "Albert Einstein", picture:"http://http://content8.flixster.com/rtactor/42/23/42230_pro.jpg", quote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe. test"},
    {name: "Stephen Hawking", picture:"https://image.guim.co.uk/sys-images/Guardian/About/General/2013/12/6/1386350771830/Stephen-Hawking-009.jpg", quote: "Another quote goes here. Such smart. Much stupidity wow. test"}
    ];

}]);