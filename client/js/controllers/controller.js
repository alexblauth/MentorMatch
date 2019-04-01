angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    var emailUser;
    var nameUser;
    /* Unique identifier for current user */
    $scope.currentUserEmail = undefined;

    $scope.detailedInfo = undefined;

    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.addListing = function(listing) {
      /* Save the article using the Listings factory */
      Listings.create(listing)
          .then(function(response) {
            location.reload();
          }, function(error) {
            $scope.error = 'Unable to add listing!' + error;
          });
      $scope.listings.push(listing);
    };

    $scope.deleteListing = function(id) {
      Listings.delete(id)
          .then(function(response) {
            location.reload();
          }, function(error) {
            $scope.error = 'Unable to delete listing!' + error;
          });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.login = function(emailParam){
      $scope.currentUserEmail = emailParam; //Set currentUserEmail scope variable
      console.log("We are in angular login function now!");
      console.log("Email passed in: " + emailParam);
      var emailAlreadyInDB = false;


      angular.forEach($scope.listings, function(value,key){
        if(value.email == emailParam){
          emailAlreadyInDB = true;
          console.log("Found email in database!");
        }
      })

      //If email is already in database, show user information
      if(emailAlreadyInDB){
        console.log("Email already in DB");

        //*****TODO******


      }else{  //ELSE, create new user
        console.log("Email not found in DB. Adding listing now...");
        var listing = {
          email: emailParam //Initialize email attribute
                            //All other attributes are left undefined
        };
        $scope.addListing(listing);
      }
    }

    // $scope.emailuser = email;
    console.log("nameUser" + emailUser);
    $scope.sendEmail = function(){
      // var linkto = "mailto:"
      //             +email
      //             + "&subject=Feedback!"
      //             + "&body=Mentor"
      // ;s
      var email = "otherMentorOrMentee@email.com";
      var linkto = 'mailto:' + email + '?subject=[MentorMatch]&body=Mentor/Mentee excelled at:%0A%0A%0AThere was room for improvement with:';

      window.open(linkto);
    }
  }



]);



var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '94097431082-u080o437bpmes48td7lh5ojcungl8hsn.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('customBtn'));
  });
};


function attachSignin(element)
{
  auth2.attachClickHandler(element, {},
      function (googleUser)
      {
        console.log("Button clicked!\n Email: " + googleUser.getBasicProfile().getEmail());
        var email = googleUser.getBasicProfile().getEmail();  //Retrieve current user email
        angular.element($('#MainWrap')).scope().login(email); //Pass email into angular function (login)

      }, function (error)
      {
        alert(JSON.stringify(error, undefined, 2));
      });
}

startApp();