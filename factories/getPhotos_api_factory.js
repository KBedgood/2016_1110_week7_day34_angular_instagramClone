/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The FACTORY manipulates data (adding / deleting to array, marking as complete...)
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     angular
          .module('kristieglam')
          .factory('API', function($http) {
               const getPhotos = function() {
                    var promise = $http({
                         method: 'GET',
                         Headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: 'http://instagramcloneclass.herokuapp.com/images'
                    });
                    return promise;
               }

               const getSingleImage = function(id) {
                    var call = $http({
                         method: 'GET',
                         headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: 'http://instagramcloneclass.herokuapp.com/images/${{id}}',
                    });
                    return promise;
               }

               return {
                    getPhotos,
                    getSingleImage
               }
          });

})();
