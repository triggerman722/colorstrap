var DemoApp = angular.module('DemoApp', [
	'ngRoute'
]);

DemoApp.controller('DemoCtrl', function($scope) {

$scope.Math = window.Math;

$scope.colors = {

"aliceblue":"#F0F8FF", 
"antiquewhite":"#FAEBD7", 
"aqua":"#00FFFF", 
"aquamarine":"#7FFFD4", 
"azure":"#F0FFFF", 
"beige":"#F5F5DC", 
"bisque":"#FFE4C4", 
"black":"#000000", 
"blanchedalmond":"#FFEBCD", 
"blue":"#0000FF", 
"blueviolet":"#8A2BE2", 
"brown":"#A52A2A", 
"burlywood":"#DEB887", 
"cadetblue":"#5F9EA0", 
"chartreuse":"#7FFF00", 
"chocolate":"#D2691E", 
"coral":"#FF7F50", 
"cornflowerblue":"#6495ED", 
"cornsilk":"#FFF8DC", 
"crimson":"#DC143C", 
"cyan":"#00FFFF", 
"darkblue":"#00008B", 
"darkcyan":"#008B8B", 
"darkgoldenrod":"#B8860B", 
"darkgray":"#A9A9A9", 
"darkgrey":"#A9A9A9", 
"darkgreen":"#006400", 
"darkkhaki":"#BDB76B", 
"darkmagenta":"#8B008B", 
"darkolivegreen":"#556B2F", 
"darkorange":"#FF8C00", 
"darkorchid":"#9932CC", 
"darkred":"#8B0000", 
"darksalmon":"#E9967A", 
"darkseagreen":"#8FBC8F", 
"darkslateblue":"#483D8B", 
"darkslategray":"#2F4F4F", 
"darkslategrey":"#2F4F4F", 
"darkturquoise":"#00CED1", 
"darkviolet":"#9400D3", 
"deeppink":"#FF1493", 
"deepskyblue":"#00BFFF", 
"dimgray":"#696969", 
"dimgrey":"#696969", 
"dodgerblue":"#1E90FF", 
"firebrick":"#B22222", 
"floralwhite":"#FFFAF0", 
"forestgreen":"#228B22", 
"fuchsia":"#FF00FF", 
"gainsboro":"#DCDCDC", 
"ghostwhite":"#F8F8FF", 
"gold":"#FFD700", 
"goldenrod":"#DAA520", 
"gray":"#808080", 
"grey":"#808080", 
"green":"#008000", 
"greenyellow":"#ADFF2F", 
"honeydew":"#F0FFF0", 
"hotpink":"#FF69B4", 
"indianred":"#CD5C5C", 
"indigo":"#4B0082", 
"ivory":"#FFFFF0", 
"khaki":"#F0E68C", 
"lavender":"#E6E6FA", 
"lavenderblush":"#FFF0F5", 
"lawngreen":"#7CFC00", 
"lemonchiffon":"#FFFACD", 
"lightblue":"#ADD8E6", 
"lightcoral":"#F08080", 
"lightcyan":"#E0FFFF", 
"lightgoldenrodyellow":"#FAFAD2", 
"lightgray":"#D3D3D3", 
"lightgrey":"#D3D3D3", 
"lightgreen":"#90EE90", 
"lightpink":"#FFB6C1", 
"lightsalmon":"#FFA07A", 
"lightseagreen":"#20B2AA", 
"lightskyblue":"#87CEFA", 
"lightslategray":"#778899", 
"lightslategrey":"#778899", 
"lightsteelblue":"#B0C4DE", 
"lightyellow":"#FFFFE0", 
"lime":"#00FF00", 
"limegreen":"#32CD32", 
"linen":"#FAF0E6", 
"magenta":"#FF00FF", 
"maroon":"#800000", 
"mediumaquamarine":"#66CDAA", 
"mediumblue":"#0000CD", 
"mediumorchid":"#BA55D3", 
"mediumpurple":"#9370DB", 
"mediumseagreen":"#3CB371", 
"mediumslateblue":"#7B68EE", 
"mediumspringgreen":"#00FA9A", 
"mediumturquoise":"#48D1CC", 
"mediumvioletred":"#C71585", 
"midnightblue":"#191970", 
"mintcream":"#F5FFFA", 
"mistyrose":"#FFE4E1", 
"moccasin":"#FFE4B5", 
"navajowhite":"#FFDEAD", 
"navy":"#000080", 
"oldlace":"#FDF5E6", 
"olive":"#808000", 
"olivedrab":"#6B8E23", 
"orange":"#FFA500", 
"orangered":"#FF4500", 
"orchid":"#DA70D6", 
"palegoldenrod":"#EEE8AA", 
"palegreen":"#98FB98", 
"paleturquoise":"#AFEEEE", 
"palevioletred":"#DB7093", 
"papayawhip":"#FFEFD5", 
"peachpuff":"#FFDAB9", 
"peru":"#CD853F", 
"pink":"#FFC0CB", 
"plum":"#DDA0DD", 
"powderblue":"#B0E0E6", 
"purple":"#800080", 
"rebeccapurple":"#663399", 
"red":"#FF0000", 
"rosybrown":"#BC8F8F", 
"royalblue":"#4169E1", 
"saddlebrown":"#8B4513", 
"salmon":"#FA8072", 
"sandybrown":"#F4A460", 
"seagreen":"#2E8B57", 
"seashell":"#FFF5EE", 
"sienna":"#A0522D", 
"silver":"#C0C0C0", 
"skyblue":"#87CEEB", 
"slateblue":"#6A5ACD", 
"slategray":"#708090", 
"slategrey":"#708090", 
"snow":"#FFFAFA", 
"springgreen":"#00FF7F", 
"steelblue":"#4682B4", 
"tan":"#D2B48C", 
"teal":"#008080", 
"thistle":"#D8BFD8", 
"tomato":"#FF6347", 
"turquoise":"#40E0D0", 
"violet":"#EE82EE", 
"wheat":"#F5DEB3", 
"white":"#FFFFFF", 
"whitesmoke":"#F5F5F5", 
"yellow":"#FFFF00", 
"yellowgreen":"#9ACD32"};

$scope.customize = function(custom) {
	custom.contrastcolor = getcontrast(custom.color.substring(1));
	custom.bordercolor = darken(custom.color.substring(1), 80);
}
$scope.getcolorname = function() {
	if (!$scope.custom)
		return;
	if ($scope.custom.optionalname) {
		return $scope.custom.optionalname;
	} else {
		return $scope.custom.color.substring(1);
	}
}
$scope.getcontrast = function(color) {

	var bresult = true;
	var origcolor = color;
	var L1= (.241 * getRed(color) * getRed(color) + .691 * getGreen(color) * getGreen(color) + .068 * getBlue(color) * getBlue(color)) /(255*255);
	var bgcolor = 0;

	console.log(L1);
	for (var i=0; i<255;i++) {

		if (L1 > 0.245) {
			bgcolor = $scope.darken(color, 1);
		} else {
			bgcolor = $scope.lighten(color, 1);
		}	
		var L2 = (.241 * getRed(bgcolor) * getRed(bgcolor) + .691 * getGreen(bgcolor) * getGreen(bgcolor) + .068 * getBlue(bgcolor) * getBlue(color)) /(255*255);
		var ratio = (Math.max(L1, L2) + 0.065)/(Math.min(L1, L2) + 0.065);
		var threshold = (Math.round(ratio*100)/100);
		console.log(color);
		if (threshold > 4.5) {
			break;
		}
		color=bgcolor;
	}
	return color;
}

function getRed(color) {

	return Math.round(parseInt(color.substring(0,2), 16));
}
function getGreen(color) {

	return Math.round(parseInt(color.substring(2,4), 16));
}
function getBlue(color) {

	return Math.round(parseInt(color.substring(4,6), 16));
}

$scope.lighten = function(color, percent) {
	var red = getRed(color);
	var green = getGreen(color);
	var blue = getBlue(color);

	rdiff = 255-red;
	gdiff = 255-green;
	bdiff = 255-blue;

	red += Math.ceil(rdiff * percent / 100);
	green += Math.ceil(gdiff * percent / 100);
	blue += Math.ceil(bdiff * percent / 100);

	return rgbToHex(Math.min(red, 255), Math.min(green, 255), Math.min(blue, 255));
}
$scope.darken = function(color, percent) {
	var red = getRed(color);
	var green = getGreen(color);
	var blue = getBlue(color);

	red -= Math.ceil(red * percent / 100);
	green -= Math.ceil(green * percent / 100);
	blue -= Math.ceil(blue * percent / 100);

	return rgbToHex(Math.max(red, 0), Math.max(green, 0), Math.max(blue, 0));
}
function rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
		
});

DemoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider	.when('/', {templateUrl: 'lib/views/index.html', controller: 'DemoCtrl'})
			.when('/alerts', {templateUrl: 'lib/views/alerts.html', controller: 'DemoCtrl'})
			.when('/alerts-theme', {templateUrl: 'lib/views/alerts-theme.html', controller: 'DemoCtrl'})
			.when('/alerts-striped', {templateUrl: 'lib/views/alerts-striped.html', controller: 'DemoCtrl'})
			.when('/alerts-outline', {templateUrl: 'lib/views/alerts-outline.html', controller: 'DemoCtrl'})
			.when('/alerts-glow', {templateUrl: 'lib/views/alerts-glow.html', controller: 'DemoCtrl'})
			.when('/custom', {templateUrl: 'lib/views/custom.html', controller: 'DemoCtrl'})
			.when('/inputs', {templateUrl: 'lib/views/inputs.html', controller: 'DemoCtrl'})
			.when('/jumbotrons', {templateUrl: 'lib/views/jumbotrons.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-theme', {templateUrl: 'lib/views/jumbotrons-theme.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-striped', {templateUrl: 'lib/views/jumbotrons-striped.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-outline', {templateUrl: 'lib/views/jumbotrons-outline.html', controller: 'DemoCtrl'})
			.when('/jumbotrons-glow', {templateUrl: 'lib/views/jumbotrons-glow.html', controller: 'DemoCtrl'})
			.when('/labels', {templateUrl: 'lib/views/labels.html', controller: 'DemoCtrl'})
			.when('/labels-theme', {templateUrl: 'lib/views/labels-theme.html', controller: 'DemoCtrl'})
			.when('/labels-glow', {templateUrl: 'lib/views/labels-glow.html', controller: 'DemoCtrl'})
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
			.when('/buttons-glow', {templateUrl: 'lib/views/buttons-glow.html', controller: 'DemoCtrl'})
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
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
    }]);
