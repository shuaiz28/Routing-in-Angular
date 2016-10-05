var app = angular.module('routingApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            css: 'styleSheets/main.css'
        })
        .when('/page1', {
            templateUrl: 'pages/page1.html',
            controller: 'controller1',
            css: 'styleSheets/page1.css'
        })
        .when('/page2', {
            templateUrl: 'pages/page2.html',
            controller: 'controller2',
            css: 'styleSheets/page2.css'
        })
        .when('/page3', {
            templateUrl: 'pages/page3.html',
            controller: 'controller3',
            css: 'styleSheets/page3.css'
        })
})