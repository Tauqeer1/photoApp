/**
 * Created by Tauqeer Ahmed on 4/23/2016.
 */
angular.module('photoSharingApp')
.controller('dashboardController',['auth','$state',function(auth,$state){

  var _self = this;
  _self.auth = auth;

/*

  _self.logOut = function(){
    auth.$unauth(function(authData){




    },function(error){
      console.log(error);
    })
  }
*/


}]);
