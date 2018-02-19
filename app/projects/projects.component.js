'use strict';

const amsPaths = [
  "../../assets/pictures/ams-home.png",
  "../../assets/pictures/ams-particulate-select.png",
  "../../assets/pictures/ams-inquiry-submit.png",
  "../../assets/pictures/ams-viewinquiries.png"
];

const trippinPaths = [
  "../../assets/pictures/trippin-login.png",
  "../../assets/pictures/trippin-online-dashboard.png",
  "../../assets/pictures/trippin-online-trip-view.png"
]

const amsContent = "Air Management Specialists' website is a personal project using React that demonstrates an easy to use wizard and a robust filter toolbar.";
const trippinContent = "Trippin' is an online travel planner that uses several Material-Ui components as well as Yelp's api. It is a group project that uses React.";

angular.module('projects').component('projects', {
  templateUrl: 'app/projects/projects.template.html',
  controller: ($scope)=>{
    $scope.pathIndex = 0;
    $scope.project = amsPaths;
    $scope.projectContent = amsContent;

    $scope.incrementIndex = ()=>{
      $scope.pathIndex ++;
      if($scope.pathIndex >= $scope.project.length){
        $scope.pathIndex = 0;
      }
    };

    $scope.decrementIndex = ()=>{
      $scope.pathIndex --;
      if($scope.pathIndex < 0){
        $scope.pathIndex = $scope.project.length - 1;
      }
    };

    $scope.swapPaths = str=>{
      switch (str) {
        case 'ams':
          $scope.project = amsPaths;
          $scope.projectContent = amsContent;
          break;
        case 'trippin':
          $scope.project = trippinPaths;
          $scope.projectContent = trippinContent;
          break;
        default:
        $scope.project = amsPaths;
      }
    }
  }
});
