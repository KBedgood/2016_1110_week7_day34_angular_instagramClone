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

               // Get Images:
               // Type: GET
               // URL: http://instagramcloneclass.herokuapp.com/images
               // Header: X_CSRF_TOKEN
               const getPhotos = function() {
                    var promise = $http({
                         method: 'GET',
                         headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: 'http://instagramcloneclass.herokuapp.com/images'
                    });
                    return promise;
               }

               // Get Single Image:
               // Type: GET
               // URL: http: //instagramcloneclass.herokuapp.com/images/IMAGE_ID_HERE
               // Header: X_CSRF_TOKEN
               const getSingleImage = function(id) {
                    var promise = $http({
                         method: 'GET',
                         headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: `http://instagramcloneclass.herokuapp.com/images/${id}`,
                    });
                    return promise;
               }

               // Creating an image:
               // Type: POST
               // URL : http://instagramcloneclass.herokuapp.com/image/post
               // Data: title,description,url 
               // Header: X_CSRF_TOKEN
               const postImage = function(newImage) {
                    var promise = $http({
                         method: 'POST',
                         data: newImage,
                         headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: 'http://instagramcloneclass.herokuapp.com/image/post',
                    });
                    return promise;
               }

               // Like Image:
               // Type: POST
               // URL: http://instagramcloneclass.herokuapp.com/images/vote
               // Data: imageid
               const likeImage = function(imageid) {
                    var promise = $http({
                         method: 'POST',
                         data: imageid,
                         headers: { 'X_CSRF_TOKEN': 'kristie' },
                         url: 'http://instagramcloneclass.herokuapp.com/images/vote',
                    });
                    return promise;
               }

               return {
                    getPhotos,
                    getSingleImage,
                    postImage,
                    likeImage
               }
          });

})();
