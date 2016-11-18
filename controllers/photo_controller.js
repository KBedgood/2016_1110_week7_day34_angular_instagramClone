/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The CONTROLLER is always read first – it's like my normal JS file.
Handles any interaction with the user and taking data from the factory and presenting it back to user...
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     /*----------------------------------------------------------------------------------------------------------------------------------------------------
     Save all inventory data into an array...
     ------------------------------------------------------------------------------------------------------------------------------------------------------*/

     angular
          .module('kristieglam')
          .controller('photoController', function(API, $state) {

               let vm = this;

               // alert("TEST");

               // vm.alert = function(){
               //  alert("TEST");
               // }

               /*----------------------------------------------------------------------------------------------------------------------------------------------------
               Pushes user info onto object on submit...
               ------------------------------------------------------------------------------------------------------------------------------------------------------*/
               vm.submit = function(content) {
                    vm.content = '';
                    vm.items = todo.addData(content);
               }

               vm.delete = function(id) {
                    vm.items = todo.deleteData(id);
               }

               /*----------------------------------------------------------------------------------------------------------------------------------------------------
               getPhotos for view...
               ------------------------------------------------------------------------------------------------------------------------------------------------------*/
               let promise = API.getPhotos();

               promise.then(function(returnedData) {
                    console.log(returnedData);
                    vm.returnedPhotos = returnedData.data.images;
               })

               vm.onDoubleClickLike = function(id, photo) {
                    let obj = {
                         imageid: id,
                    }
                    vm.clickedHeart = API.likeImage(obj);
                    photo.likes++;
               }

               // vm.onClickDetails = function(id, photo) {
               //      $state.go('details', { id: id });
               // }

               vm.addPhoto = function(form) {
                    // alert("TEST");
                    let image = {
                         title: form.title,
                         url: form.url,
                         description: form.description
                    };

                    let promise = API.postImage(image);
                    promise.then(function(response) {
                         console.log(response)
                         vm.form = {}; // resets, clears the form out
                         window.location.assign("/#/") // redirects to home page after submit
                    });
               }
          })

     .controller('IDController', function(API, $state, $stateParams) {

          let vm = this;

          let id = $stateParams.id;

          let photo = API.getSingleImage(id);
          photo.then(function(response) {
               // console.log(returnedPhotos);
               vm.returnedPhotos = response.data;

          })
     });

})();
