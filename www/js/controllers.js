angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ExercisesCtrl', function($scope, ExercisesService) {
  $scope.exercises = ExercisesService.getExercises();
})

.controller('ExerciseCtrl', function($scope, $stateParams, $ionicModal, $timeout, ExercisesService) {

  $scope.exercise = ExercisesService.getExercise($stateParams.exerciseId);

  $scope.openVideoModal = function(exercise) {
    $scope.currentExercise = exercise;
    $scope.videoModal.show();

    if (ionic.Platform.isAndroid()){
      $scope.androidPlatform = true;
    } else {
      $scope.androidPlatform = false;
    }
    console.log("androidPlatform: " + $scope.androidPlatform);

    $timeout(function(){
      var videoPlayerFrame = angular.element(document.getElementById('videoplayerscreen'));
      videoPlayerFrame[0].addEventListener("timeupdate", function() {
        if (videoPlayerFrame[0].duration > 0
            && Math.round(videoPlayerFrame[0].duration) - Math.round(videoPlayerFrame[0].currentTime) == 0) {

          //if loop atribute is set, restart video
          if (videoPlayerFrame[0].loop) {
            videoPlayerFrame[0].currentTime = 0;
          }
        }
      }, false);

      videoPlayerFrame[0].addEventListener("canplay", function(){
        videoPlayerFrame[0].removeEventListener("canplay", this, false);
        videoPlayerFrame[0].play();
        videoPlayerFrame.css('opacity','1');
      }, false);

      videoPlayerFrame[0].play();
    }, 100);

  //var calcHeight = (angular.element(document.getElementsByClassName('modal')).prop('offsetHeight'))   * .7;
  //calcHeight = calcHeight +'px';

  $scope.showVideo = true;

  };
  $scope.cancelVideoModal = function() {
    $scope.videoModal.hide();
  };

  $ionicModal.fromTemplateUrl('show-video.html', function(modal) {
    $scope.videoModal = modal;
  }, {
    scope:$scope,
    animation: 'fade-implode',
    focusFirstInput: false,
    backdropClickToClose: false,
    hardwareBackButtonClose: true
  });

});


