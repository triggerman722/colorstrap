var DemoApp = angular.module('DemoApp', [
	'ngRoute'
]);

DemoApp.controller('DemoCtrl', function($scope, $routeParams, $location, $route, $sce) {
		
		
});

DemoApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider	.when('/', {templateUrl: 'lib/views/index.html', controller: 'DemoCtrl'})
			.when('/alerts', {templateUrl: 'lib/views/alerts.html', controller: 'DemoCtrl'})
			.when('/alerts-theme', {templateUrl: 'lib/views/alerts-theme.html', controller: 'DemoCtrl'})
			.when('/alerts-striped', {templateUrl: 'lib/views/alerts-striped.html', controller: 'DemoCtrl'})
			.when('/alerts-outline', {templateUrl: 'lib/views/alerts-outline.html', controller: 'DemoCtrl'})
			.when('/alerts-glow', {templateUrl: 'lib/views/alerts-glow.html', controller: 'DemoCtrl'})
			.when('/inputs', {templateUrl: 'lib/views/inputs.html', controller: 'DemoCtrl'})
			.when('/jumbotrons', {templateUrl: 'lib/views/jumbotrons.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-theme', {templateUrl: 'lib/views/jumbotrons-theme.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-striped', {templateUrl: 'lib/views/jumbotrons-striped.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-outline', {templateUrl: 'lib/views/jumbotrons-outline.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-glow', {templateUrl: 'lib/views/jumbotrons-glow.html', controller: 'DemoCtrl'})
			.when('/labels', {templateUrl: 'lib/views/labels.html', controller: 'DemoCtrl'})
			.when('/labels-theme', {templateUrl: 'lib/views/labels-theme.html', controller: 'DemoCtrl'})
			.when('/labels-outline', {templateUrl: 'lib/views/labels-outline.html', controller: 'DemoCtrl'})
			.when('/labels-striped', {templateUrl: 'lib/views/labels-striped.html', controller: 'DemoCtrl'})
			.when('/list-groups', {templateUrl: 'lib/views/list-groups.html', controller: 'DemoCtrl'})
			.when('/list-groups-striped', {templateUrl: 'lib/views/list-groups-striped.html', controller: 'DemoCtrl'})
			.when('/list-groups-theme', {templateUrl: 'lib/views/list-groups-theme.html', controller: 'DemoCtrl'})
			.when('/list-groups-outline', {templateUrl: 'lib/views/list-groups-outline.html', controller: 'DemoCtrl'})
			.when('/buttons', {templateUrl: 'lib/views/buttons.html', controller: 'DemoCtrl'})
			.when('/buttons-theme', {templateUrl: 'lib/views/buttons-theme.html', controller: 'DemoCtrl'})
			.when('/buttons-striped', {templateUrl: 'lib/views/buttons-striped.html', controller: 'DemoCtrl'})
			.when('/buttons-outline', {templateUrl: 'lib/views/buttons-outline.html', controller: 'DemoCtrl'})
			.when('/backgrounds', {templateUrl: 'lib/views/backgrounds.html', controller: 'DemoCtrl'})
			.when('/backgrounds-striped', {templateUrl: 'lib/views/backgrounds-striped.html', controller: 'DemoCtrl'})
			.when('/modals', {templateUrl: 'lib/views/modals.html', controller: 'DemoCtrl'})
			.when('/modals-striped', {templateUrl: 'lib/views/modals-striped.html', controller: 'DemoCtrl'})
			.when('/panels', {templateUrl: 'lib/views/panels.html', controller: 'DemoCtrl'})
			.when('/panels-theme', {templateUrl: 'lib/views/panels-theme.html', controller: 'DemoCtrl'})
			.when('/panels-outline', {templateUrl: 'lib/views/panels-outline.html', controller: 'DemoCtrl'})
			.when('/panels-striped', {templateUrl: 'lib/views/panels-striped.html', controller: 'DemoCtrl'})
			.when('/progress-bars', {templateUrl: 'lib/views/progress-bars.html', controller: 'DemoCtrl'})
			.when('/progress-bars-striped', {templateUrl: 'lib/views/progress-bars-striped.html', controller: 'DemoCtrl'})
			.when('/text', {templateUrl: 'lib/views/text.html', controller: 'DemoCtrl'})
                ;
    }]);
