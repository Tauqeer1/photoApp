/**
 * Created by Tauqeer Ahmed on 4/21/2016.
 */


angular.module('photoSharingApp')
  .factory('auth', ['$firebaseAuth', function () {
    var ref = new Firebase("https://appphotosharing.firebaseio.com");

    return {
      ref : ref
    }
  }]);
