/**
 * Created by Tauqeer Ahmed on 4/22/2016.
 */
angular.module('photoSharingApp')
  .controller('loginController', ['auth', '$ionicModal', '$state', '$ionicLoading', '$rootScope', '$scope', function (auth, $ionicModal, $state, $ionicLoading, $rootScope, $scope) {

    var _self = this;
    _self.signInUser = {};
    $ionicModal.fromTemplateUrl('templates/signup.html', {



      _self: $scope

    }).then(function (modal) {
      _self.modal = modal;
    });
    _self.createNewUser = function () {
      console.log("Working");

    };

    _self.loginWithFacebook = function () {
      auth.$authWithOAuthRedirect('facebook')
        .then(function (authData) {
          console.log("AuthData", authData);
        })
        .catch(function (error) {
          console.log("Error", error);
        })
    };
    auth.$onAuth(function (authData) {
      if (authData !== null) {
        $state.go('dashboard');
      }
      else {
        //_self.signInUser = authData;
        $state.go('login');
      }
    });

    auth.$getAuth(function(authData){
      console.log("get auth data ", authData);
    })


  }]);
