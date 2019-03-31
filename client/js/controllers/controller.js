//var myVar = require('../../server/controllers/server.controller.js');
angular.module('profiles').controller('ProfilesController', ['$scope', 'Profiles',
  function($scope, Profiles) {
    /* Get all the profiles, then bind it to the scope */
    var prof = this;
    Profiles.getAll().then(function(response) {
      $scope.profiles = response.data;
      }, function(error) {
      console.log('Unable to retrieve profiles:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
        /* Save the article using the Profiles factory */
        Profiles.create($scope.newListing)
                .then(function(response) {
                  location.reload();
                }, function(error) {
                  $scope.error = 'Unable to add listing!' + error;
                });
      $scope.profiles.push($scope.newListing);
      $scope.newListing = {};
    };

    $scope.updateListing = function() {
      console.log($scope.detailedInfo.name);
      var id = 0;
      

      /* we will want to update by email once thats in the schema
      just change the value.name to value.email*/
      angular.forEach($scope.profiles, function(value, key){
        if(value.name == $scope.detailedInfo.name)
          id = value._id;
        });
      


      /* Create new date via update */
      Profiles.update($scope.detailedInfo)
              .then(function(response) {
                console.log(response);
                //location.reload();
                /* Delete old data */
                Profiles.delete(id)
                        .then(function(response) {
                          location.reload();
                        }, function(error) {
                          $scope.error = 'Unable to delete listing!' + error;
                        });
              }, function(error) {
                $scope.error = 'Unable to add lyour person isting!' + error;
              });



    };


    $scope.deleteListing = function(id) {
      Profiles.delete(id)
      .then(function(response) {
        location.reload();
      }, function(error) {
        $scope.error = 'Unable to delete listing!' + error;
      });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.profiles[index];
    };
  }



]);
