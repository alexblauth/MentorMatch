angular.module('profiles', []).factory('Profiles', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/profiles');
    },

  	create: function(profile) {
  	  return $http.post('/api/profiles', profile);
      },

//Update function needed
    update: function(profile) {
      return $http.put('/api/profiles', profile);
    },

    delete: function(id) {
       return $http.delete('/api/profiles/' + id);
      }
    };

  return methods;
});
