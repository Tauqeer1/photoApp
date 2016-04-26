/**
 * Created by Tauqeer Ahmed on 4/23/2016.
 */
angular.module('photoSharingApp')
  .controller('dashboardController', ['auth', '$ionicHistory', '$firebaseArray', '$firebaseAuth', '$cordovaCamera', '$state', function (auth, $ionicHistory, $firebaseArray, $firebaseAuth, $cordovaCamera, $state) {

    var _self = this;
    $ionicHistory.clearHistory();

    _self.images = [];

    var fb = $firebaseAuth(auth.ref);
    var fbAuth = fb.$getAuth();
    if (fbAuth) {
      var userRef = auth.ref.child("users/" + fbAuth.uid);
      var syncArray = $firebaseArray(userRef.child("images"));
      _self.images = syncArray;
    }else{
      $state.go("login");
    }

    _self.takePicture = function(){
        var options = {
          quality : 75,
          destinationType : Camera.DestinationType.DATA_URL,
          sourceType : Camera.PictureSourceType.CAMERA,
          encodingType : Camera.encodingType.JPEG,
          targetWidth : 500,
          targetHeight : 500,
          saveToPhotoAlbum : false,
          correctOrientation : true
        };
      $cordovaCamera.getPicture(options)
        .then(function(imageData){
          //_self.image = "data:image/jpeg;base64," + imageData;
          syncArray.$add({image : imageData}).then(function(){
            alert("Image Saved");
          })
        },function(error){
          console.error("Get picture Camera Error " , error);
        })
    };
    _self.uploadPicture = function(){
      var options = {
          quality : 50 ,
        destinationType : Camera.destinationType.FILE_URI,
        sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
        targetWidth : 500,
        targetHeight : 500
      };
      $cordovaCamera.getPicture(options)
        .then(function(imageData){
          //_self.image = "data:image/jpeg;base64," + imageData;
          syncArray.$add({image : imageData}).then(function(){
            alert("Image Saved");
          })
        },function(error){
          console.error("Get picture Camera Error " , error);
        })


    }



  }]);
