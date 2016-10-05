# Routing-in-Angular
Routing means navigating to different pages in our app. In AngularJS, we can use ngRoute module to do routing, and also keep out app as a Single Page Application(with no page loading).

We need:

1. include angular-route.js.
  - < script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></ script>
2. add ngRoute as a dependency in the app. 
  - var app = angular.module("myApp", ["ngRoute"]);
  
ngRoute module provide $routeProvider, which is used to configure different routes in the app. It provides several methods:

1. .when()
2. .otherwise()

in each method, we can

1. templateUrl: define what page to dispaly.
2. controller: define a controller for each view.

The container for routing in index.html: ng-view directive.(3 ways)
<div ng-view></div>
<ng-view></ng-view>
<div class="ng-view"></div>

