angular.module('profiles').controller('ProfilesController', ['$scope', 'Profiles',
  function($scope, Profiles) {
    /* Get all the profiles, then bind it to the scope */
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
      //$scope.detailedInfo._id++;
      Profiles.update($scope.detailedInfo)
              .then(function(response) {
                location.reload();
              }, function(error) {
                $scope.error = 'Unable to add listing!' + error;
              });
              $scope.profiles.push($scope.detailedInfo);
              $scope.detailedInfo = {};
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
