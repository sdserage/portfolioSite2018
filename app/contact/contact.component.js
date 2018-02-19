'use strict';

angular.module('contact').component('contact', {
  templateUrl: 'app/contact/contact.template.html',
  controller: ($scope)=>{

    $scope.facebook = "https://www.facebook.com/scott.serage/";
    $scope.twitter = "https://twitter.com/ScottDSerage";
    $scope.gitHub = "https://github.com/sdserage";

    $scope.linkOutside = url =>{
      $window.open(url);
    }
  }
});
