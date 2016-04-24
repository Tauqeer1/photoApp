/**
 * Created by Tauqeer Ahmed on 4/21/2016.
 */

angular.module('photoSharingApp')

  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl :'templates/login.html',
        controller : 'loginController',
        controllerAs : 'loginCtrl'
      })
      .state('dashboard',{
        url:'/dashboard',
        templateUrl : 'templates/dash.html',
        controller : 'dashboardController',
        controllerAs : 'dashCtrl'
      })





    $urlRouterProvider.otherwise('/login')

  }]);
