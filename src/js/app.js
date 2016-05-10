(function () {
    'use strict';
     
    var app = angular.module('application', []);
    app.controller('appController', function ($scope, $http, $window) {

        $scope.input_data = {};
        $scope.datas = [];

        $scope.user_data ;
        $scope.courses ;
        $scope.search ;
        // $scope.course = {"A", "B", "C"};
        
        $http({
            method: "GET",
            url: "http://52.37.98.127:3000/v1/5610545781?pin=5555"
        }).then(function success (response) {
            // var result = response.data;
            $scope.user_data = response.data;
        });

        // $http({
        //     method: "GET",
        //     url: "json/skecourses-gh-pages/list.json"
        // }).then(function success (data) {
        //     // var result = response.data;
        //     console.log(data);
        // });

        $http({
            method: "GET",
            url: "https://whsatku.github.io/skecourses/combined.json"
        }).then(function success (response) {
            // var result = response.data;
            $scope.courses = $.map(response.data, function(value, index) {return [value];})
            // $scope.user_data = response.data;
        });

        $scope.login_submit = function(datas) {
            // $scope.datas.push($scope.input_data);
            // console.log($scope.datas[0].id);
            // console.log('yes');
            // console.log($scope.user_data);

            if($scope.user_data.user.id == $scope.input_data.id
                && $scope.user_data.user.password == $scope.input_data.password)
                $window.location.href = 'main.html';
            else
                alert('wrong');

        };
        $scope.test_click = function() {
            // console.log('yah');
            $window.location.href = 'profile.html';
        };

    });
     
})();