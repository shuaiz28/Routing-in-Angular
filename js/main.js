var app = angular.module('routingApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html'
        })
        .when('/page1', {
            templateUrl: 'pages/page1.html',
            controller: 'controller1'
        })
        .when('/page2', {
            templateUrl: 'pages/page2.html',
            controller: 'controller2'
        })
        .when('/page3', {
            templateUrl: 'pages/page3.html',
            controller: 'controller3'
        })
})