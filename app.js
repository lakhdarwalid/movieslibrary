var moviesApp = angular.module('moviesApp', ['ngRoute']);

moviesApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl : 'views/home.html'
        })
        .when('/moviesList', {
            templateUrl : 'views/moviesList.html',
            controller : 'moviesController'
        })
        .otherwise({
            redirectTo : '/home'
        })
}]);

moviesApp.controller('moviesController',function($scope, $http){
   $scope.message = "hey"
   // $http.get('http://127.0.0.1:5501/assets/movies.json').then(function(data){
    $http.get('https://lakhdarwalid.github.io/movieslibrary/assets/movies.json').then(function(data){
            //$scope.mydata = data;
            console.log(data.data);
            $scope.movies = data.data;
    });
});