
window.onload = function() {

  let listUser = angular.element(document.getElementById("MainWrap")).scope().listings;

  console.log("listuSer is: " + listUser);

  let $scope = angular.element(document.getElementById("MainWrap")).scope();

  listUser.forEach(function(value)
  {
    if (value.email == localStorage["useremail"])
    {
      console.log("found");

      localStorage.setItem("ethnicity", JSON.stringify(
          {"value":value.ethnicity.value, "score": value.ethnicity.score}));
      localStorage["ethnicity"] = {"value":value.ethnicity.value,
        "score": value.ethnicity.score};

      // console.log("ethnicity is: " + localStorage["ethnicity"].value + "score:   " + localStorage["ethnicity"].score);

      localStorage.setItem("sexualOrientation", JSON.stringify(
          {"value":value.sexualOrientation.value, "score": value.sexualOrientation.score}));
      localStorage["sexualOrientation"] = {"value":value.sexualOrientation.value,
        "score": value.sexualOrientation.score};

      localStorage.setItem("gender", JSON.stringify(
          {"value":value.gender.value, "score": value.gender.score}));
      localStorage["gender"] = {"value":value.gender.value,
        "score": value.gender.score};

      localStorage.setItem("industry", JSON.stringify(
          {"value":value.industry.value, "score": value.industry.score}));
      localStorage["industry"] = {"value":value.industry.value,
        "score": value.industry.score};

      localStorage.setItem("mentorStrength1", JSON.stringify(
          {"value":value.mentorStrength1.value, "score": value.mentorStrength1.score}));
      localStorage["mentorStrength1"] = {"value":value.mentorStrength1.value,
        "score": value.industry.score};

      localStorage.setItem("mentorStrength2", JSON.stringify(
          {"value":value.mentorStrength2.value, "score": value.mentorStrength2.score}));
      localStorage["mentorStrength2"] = {"value":value.mentorStrength2.value,
        "score": value.mentorStrength2.score};

      localStorage.setItem("mentorStrength3", JSON.stringify(
          {"value":value.mentorStrength3.value, "score": value.mentorStrength3.score}));
      localStorage["mentorStrength3"] = {"value":value.mentorStrength3.value,
        "score": value.mentorStrength3.score};

      localStorage.setItem("mentorGoal1", JSON.stringify(
          {"value":value.mentorGoal1.value, "score": value.mentorGoal1.score}));
      localStorage["mentorGoal1"] = {"value":value.mentorGoal1.value,
        "score": value.mentorGoal1.score};

      localStorage.setItem("mentorGoal2", JSON.stringify(
          {"value":value.mentorGoal2.value, "score": value.mentorGoal2.score}));
      localStorage["mentorGoal2"] = {"value":value.mentorGoal2.value,
        "score": value.mentorGoal2.score};

      localStorage.setItem("mentorGoal3", JSON.stringify(
          {"value":value.mentorGoal3.value, "score": value.mentorGoal3.score}));
      localStorage["mentorGoal3"] = {"value":value.mentorGoal3.value,
        "score": value.mentorGoal3.score};

      localStorage.setItem("bio", value.bio);
      localStorage["bio"] = value.bio;

      localStorage.setItem("isMentor", value.isMentor);
      localStorage["isMentor"] = value.isMentor;

      localStorage.setItem("isMentee", value.isMentee);
      localStorage["isMentee"] = value.isMentee;

      localStorage.setItem("location", JSON.stringify(
          {"city":value.location.city, "state":value.location.state,
                 "country":value.location.country, "score": value.location.score}));
      localStorage["location"] = {"city":value.location.city, "state":value.location.state,
        "country":value.location.country, "score": value.location.score};

      localStorage.setItem("language", value.language.value);

      // localStorage["language"] = value.language.value;
      // $scope.detailedInfo.location.score = value.location.score;
      // $scope.detailedInfo.location.city = value.location.city;
      // $scope.detailedInfo.location.state = value.location.state;
      // $scope.detailedInfo.location.country = value.location.country;
      // $scope.detailedInfo.ethnicity.value = value.ethnicity.value;
      // $scope.detailedInfo.ethnicity.score = value.ethnicity.score;
      // $scope.detailedInfo.sexualOrientation.value = value.sexualOrientation.value;
      // $scope.detailedInfo.sexualOrientation.value = value.sexualOrientation.score;
      // $scope.detailedInfo.gender.value = value.gender.value;
      // $scope.detailedInfo.gender.score = value.gender.score;
      // $scope.detailedInfo.industry.value = value.industry.value;
      // $scope.detailedInfo.industry.score = value.industry.score;
      // $scope.detailedInfo.bio = value.bio;
      // $scope.detailedInfo.isMentor = value.isMentor;
      // $scope.detailedInfo.isMentee = value.isMentee;
      // $scope.detailedInfo.mentorStrength1.value = value.mentorStrength1.value;
      // $scope.detailedInfo.mentorStrength1.score = value.mentorStrength1.score;
      // $scope.detailedInfo.mentorStrength2.value = value.mentorStrength2.value;
      // $scope.detailedInfo.mentorStrength2.score = value.mentorStrength2.score;
      // $scope.detailedInfo.mentorStrength3.value = value.mentorStrength3.value;
      // $scope.detailedInfo.mentorStrength3.score = value.mentorStrength3.score;
      // $scope.detailedInfo.menteeGoal1.value = value.menteeGoal1.value;
      // $scope.detailedInfo.menteeGoal1.score = value.menteeGoal1.score;
      // $scope.detailedInfo.menteeGoal2.value = value.menteeGoal2.value;
      // $scope.detailedInfo.menteeGoal2.score = value.menteeGoal2.score;
      // $scope.detailedInfo.menteeGoal3.value = value.menteeGoal3.value;
      // $scope.detailedInfo.menteeGoal3.score = value.menteeGoal3.score;
      // $scope.detailedInfo.language.value = value.language.value;
  //
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
  //     localStorage.setItem("ethinicity_value", value.ethnicity.value);
    }
  });

   console.log("local storage has: " + localStorage.getItem('useremail'));
  if (localStorage['useremail'] == "" || localStorage['useremail'] == null)
  {
    document.getElementById('customBtn').style.display= "block";
    document.getElementById('logoutBtn').style.display= "none";
  }
  else
  {
    document.getElementById('customBtn').style.display= "none";
    document.getElementById('logoutBtn').style.display= "block";
  }
    // ...
}
angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings)
  {

    /* Unique identifier for current user */
    $scope.jobOther;


    $scope.detailedInfo = {
      email: "",
      name: {
        value: "",
        score: 0
      },
      ethnicity: {
        value: "",
        score: 0
      },
      sexualOrientation: {
        value: "",
        score: 0
      },
      gender: {
        value: "",
        score: 0
      },
      industry: {
        value: "",
        score: 0
      },
      bio: "",
      isMentor: "",
      mentorStrength1: {
        value: "",
        score: 0
      },
      mentorStrength2: {
        value: "",
        score: 0
      },
      mentorStrength3: {
        value: "",
        score: 0
      },
      isMentee: "",
      menteeGoal1: {
        value: "",
        score: 0
      },
      menteeGoal2: {
        value: "",
        score: 0
      },
      menteeGoal3: {
        value: "",
        score: 0
      },
      language: {
        value: "",
        score: 0
      },
      location: {
        country: "",
        state: "",
        city: "",
        score: 0
      }


    };

    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function (response)
    {
      $scope.listings = response.data;
    }, function (error)
    {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.addListing = function (listing)
    {
      /* Save the article using the Listings factory */
      Listings.create(listing)
          .then(function (response)
          {
            location.reload();
          }, function (error)
          {
            $scope.error = 'Unable to add listing!' + error;
          });
      $scope.listings.push(listing);
    };


    $scope.updateListing = function ()
    {
      console.log($scope.detailedInfo);
      var id = 0;


      /* we will want to update by email once thats in the schema
      just change the value.name to value.email*/
      angular.forEach($scope.listings, function (value, key)
      {
        if (value.email == $scope.detailedInfo.email)
          id = value._id;
      });
      console.log(id);


      /* Create new date via update */
      Listings.create($scope.detailedInfo)
          .then(function (response)
          {
            console.log(response);
            //location.reload();
            /* Delete old data */
            Listings.delete(id)
                .then(function (response)
                {
                  location.reload();
                }, function (error)
                {
                  $scope.error = 'Unable to delete listing!' + error;
                });
          }, function (error)
          {
            $scope.error = 'Unable to add person listing!' + error;
          });
    };


    $scope.deleteListing = function (id)
    {
      Listings.delete(id)
          .then(function (response)
          {
            location.reload();
          }, function (error)
          {
            $scope.error = 'Unable to delete listing!' + error;
          });
    };

    $scope.getDetail = function ()
    {
      $scope.login();
    }

    $scope.login = function (emailParam, nameParam)
    {
      $scope.detailedInfo.email = emailParam; //Set currentUserEmail scope variable
      $scope.detailedInfo.name.value = nameParam;
      $scope.googlebuttontext = "Log out";

      localStorage.setItem('useremail', emailParam);
      localStorage['useremail'] = emailParam;


      console.log("We are in angular login function now!");

      console.log("Email passed in: " + emailParam);
      console.log("Name passed in: " + nameParam);

      var emailAlreadyInDB = false;
      document.getElementById('customBtn').style.display = "none";
      document.getElementById('logoutBtn').style.display = "block";

      angular.forEach($scope.listings, function (value, key)
      {
        if (value.email == localStorage["emailuser"])
        {

          emailAlreadyInDB = true;
          console.log("User found. Email already in DB");
          //If email is already in database, show user information in profile form
          $scope.detailedInfo.ethnicity.value = value.ethnicity.value;
          $scope.detailedInfo.ethnicity.score = value.ethnicity.score;
          $scope.detailedInfo.sexualOrientation.value = value.sexualOrientation.value;
          $scope.detailedInfo.sexualOrientation.value = value.sexualOrientation.score;
          $scope.detailedInfo.gender.value = value.gender.value;
          $scope.detailedInfo.gender.score = value.gender.score;
          $scope.detailedInfo.industry.value = value.industry.value;
          $scope.detailedInfo.industry.score = value.industry.score;
          $scope.detailedInfo.bio = value.bio;
          $scope.detailedInfo.isMentor = value.isMentor;
          $scope.detailedInfo.isMentee = value.isMentee;
          $scope.detailedInfo.mentorStrength1.value = value.mentorStrength1.value;
          $scope.detailedInfo.mentorStrength1.score = value.mentorStrength1.score;
          $scope.detailedInfo.mentorStrength2.value = value.mentorStrength2.value;
          $scope.detailedInfo.mentorStrength2.score = value.mentorStrength2.score;
          $scope.detailedInfo.mentorStrength3.value = value.mentorStrength3.value;
          $scope.detailedInfo.mentorStrength3.score = value.mentorStrength3.score;
          $scope.detailedInfo.menteeGoal1.value = value.menteeGoal1.value;
          $scope.detailedInfo.menteeGoal1.score = value.menteeGoal1.score;
          $scope.detailedInfo.menteeGoal2.value = value.menteeGoal2.value;
          $scope.detailedInfo.menteeGoal2.score = value.menteeGoal2.score;
          $scope.detailedInfo.menteeGoal3.value = value.menteeGoal3.value;
          $scope.detailedInfo.menteeGoal3.score = value.menteeGoal3.score;
          $scope.detailedInfo.location.score = value.location.score;
          $scope.detailedInfo.location.city = value.location.city;
          $scope.detailedInfo.location.state = value.location.state;
          $scope.detailedInfo.location.country = value.location.country;
          $scope.detailedInfo.language.value = value.language.value;
        }
      })

      //if not found in database, create new object
      if (!emailAlreadyInDB)
      {
        console.log("Email not found in DB. Adding listing now...");
        var newListing = {
          email: emailParam,
          name: {
            value: nameParam,
            score: 0
          },
          ethnicity: {
            value: "",
            score: 0
          },
          sexualOrientation: {
            value: "",
            score: 0
          },
          gender: {
            value: "",
            score: 0
          },
          industry: {
            value: "",
            score: 0
          },
          bio: "",
          isMentor: "",
          mentorStrength1: {
            value: "",
            score: 0
          },
          mentorStrength2: {
            value: "",
            score: 0
          },
          mentorStrength3: {
            value: "",
            score: 0
          },
          isMentee: "",
          menteeGoal1: {
            value: "",
            score: 0
          },
          menteeGoal2: {
            value: "",
            score: 0
          },
          menteeGoal3: {
            value: "",
            score: 0
          },
          language: {
            value: "",
            score: 0
          },
          location: {
            country: "",
            state: "",
            city: "",
            score: 0
          }
        }
        $scope.addListing(newListing);
      }
    }


    // $scope.emailuser = email;

    $scope.sendEmail = function ()
    {
      // var linkto = "mailto:"
      //             +email
      //             + "&subject=Feedback!"
      //             + "&body=Mentor"
      // ;
      var linkto = 'mailto:' + email + '?subject=[MentorMatch] ' + nameUser +
          +'&body=Thank you for choosing MentorMatch!\nHere';

      $scope.sendEmail = function (emailSendTo)
      {

        var linkto = 'mailto:' + emailSendTo + '?subject=[MentorMatch]&body=Mentor/Mentee ' +
            'excelled at:%0A%0A%0AThere was room for improvement with:';
        window.open(linkto);
      }
    }

    //log out function call here
    $scope.logout = function ()
    {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function ()
      {
        console.log('User signed out.');
        localStorage['useremail'] = "";
        document.getElementById('customBtn').style.display = "block";
        document.getElementById('logoutBtn').style.display = "none";
        localStorage.clear();
      });
    }

    // console.log(localStorage.getItem('email'));
  }
]);

var googleUser = {};
var startApp = function()
{

  gapi.load('auth2', function ()
  {
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
                var email = googleUser.getBasicProfile().getEmail();  //Retrieve current user email
                var name = googleUser.getBasicProfile().getName();  //Retrieve current user email
                angular.element($('#MainWrap')).scope().login(email, name); //Pass email into angular function (login)

            }, function (error)
            {
                alert(JSON.stringify(error, undefined, 2));
            });

}

startApp();