'use strict';

app.factory('Products', function(FURL, $firebaseArray, Auth) {
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  var Products = {

    all: function(){
      return products;
    },

    saveProduct: function(product, image){
      console.log('the user profile is, ', Auth.user.profile);
      };

      return products.$add(newProduct).then(function(){
        console.log('added to the database');
      })
    }

  };
  return Products;

});