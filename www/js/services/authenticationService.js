/**
 * Created by Tauqeer Ahmed on 4/21/2016.
 */


angular.module('photoSharingApp')
  .factory('auth', ['$firebaseAuth', function ($firebaseAuth) {

    var ref = new Firebase("https://appphotosharing.firebaseio.com");
    var userRef = ref.child('users');
    return $firebaseAuth(userRef);
  }]);
