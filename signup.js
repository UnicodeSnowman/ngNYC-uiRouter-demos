angular.module('plunker').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'signup',
      url: '/signup',
      template: '<form role="form">' + 
                    '<h1>Welcome! Let\'s get you signed up!</a></h1>' + 
                    '<ui-view></ui-view>' + 
                    '<button type="submit" class="btn btn-default" ng-click="next()">Next!</button>' +
                '</form>',
      controller: 'SignupCtrl',
      data: { next: '.name' }
    })
    .state({
        name: 'signup.name',
        url: '/name',
        template: '<div class="form-group">' +
                      '<label>Enter your name:</label>' + 
                      '<input class="form-control" ng-model="model.name" type="text">' + 
                  '</div>',
        data: { next: '^.location' }
    })
    .state({
        name: 'signup.location',
        url: '/location',
        template: '<div class="form-group">' + 
                       '<label>Enter your location:</label>' + 
                       '<input class="form-control" ng-model="model.location" type="text">' +
                   '</div>',
        data: { next: '^.favs' }
    })
//    .state({
//        name: 'signup.newthing',
//        url: '/newthing',
//        template: '<div class="form-group"><label>Enter your NewThing:</label><input class="form-control" ng-model="model.newthing" type="text"></div>',
//        data: { next: '^.favs' }
//    })
    .state({
        name: 'signup.favs',
        url: '/other',
        template: '<div class="form-group">' + 
                      '<label>Enter Favorite Things:</label>' + 
                      '<input class="form-control" ng-model="model.favs" type="text">' + 
                  '</div>',
        data: { next: '^.done' }
    })
    .state({
        name: 'signup.done',
        url: '/done',
        template: 'You are done! You filled out: <pre>{{model}}</pre>',
        data: { next: '^' }
    })
}).controller('SignupCtrl', function ($scope, $state) {
    $scope.model = {};
    $scope.next = function () {
        $state.go($state.$current.data.next);
    }
})
