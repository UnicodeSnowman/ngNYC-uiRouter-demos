angular.module('plunker').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
        name: 'home',
        url: '/',
        views: {
            'main': {
                templateUrl: '/shopping/home-ptl.html'
            }
        }
    })
    .state({
      name: 'items',
      url: '/items',
      views: {
          'main': {
              templateUrl: '/shopping/items-layout-ptl.html',
              controller: function ($scope, items) {
                $scope.items = items;
              }
          },
          'categories@items': {
              templateUrl: '/shopping/categories-ptl.html'
          },
          'content@items': {
              templateUrl: '/shopping/items-ptl.html'
          }
      },
      resolve: {
          items: function (Item) {
              console.log('fatching items...');
              return Item.all();
          } 
      }
    })
    .state({
        name: 'items.detail',
        url: '/:id',
        views: {
            'content@items': {
                templateUrl: '/shopping/item-ptl.html',
                controller: function ($scope, item) {
                    $scope.item = item;
                }
            }
        },
        resolve: {
            item: function (Item, $stateParams) {
                return Item.find($stateParams.id);
            }
        }
    });
});

angular.module('plunker').factory('Item', function () {
    var items = [
        { id: 1, name: 'Falafel', img: '/shopping/falafel.jpg', price: 1.99 },
        { id: 2, name: 'Tacos', img: '/shopping/tacos.jpg', price: 2.99  },
        { id: 3, name: 'Bananas', img: '/shopping/bananas.jpg', price: 0.99 },
        { id: 4, name: 'Burger', img: '/shopping/burger.jpg', price: 4.99 },
        { id: 5, name: 'Pizza', img: '/shopping/pizza.jpg', price: 3.99 },
        { id: 6, name: 'Burrito', img: '/shopping/burrito.jpg', price: 8.99 }
    ]
    return {
        all: function () {
            return items;
        },
        find: function (id) {
           return items.filter(function (item) {
               return item.id == id;
           })[0];
        }
    }
});
