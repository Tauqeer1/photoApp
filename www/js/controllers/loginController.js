/**
 * Created by Tauqeer Ahmed on 4/22/2016.
 */
angular.module('photoSharingApp')
  .controller('loginController', ['auth', '$ionicModal', '$state', '$ionicLoading', '$rootScope', '$scope', '$firebaseAuth', function (auth, $ionicModal, $state, $ionicLoading, $rootScope, $scope, $firebaseAuth) {
    var _self = this;
    var fbAuth = $firebaseAuth(auth.ref);
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
      fbAuth.$authWithOAuthRedirect('facebook')
        .catch(function (error) {
          console.log("Redirect Error : ", error);
        })
    };
    fbAuth.$onAuth(function (authData) {
      if (authData !== null) {
        $state.go('dashboard');
      }
      else {
        $state.go('login');
      }
    });
  }]);
