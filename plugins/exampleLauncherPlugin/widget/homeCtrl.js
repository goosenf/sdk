﻿var $home = angular.module('home',[]);

$home.controller('homeCtrl', ['$scope'
    , function ($scope) {
        $scope.logoUrl = "http://startupweekend.org/wp-content/blogs.dir/1/files/2013/04/CokeLogo1.png";
        $scope.images = ["http://www.pd4pic.com/images/black-design-banner-blank-ornate-decoration.png"
            ,"http://www.pd4pic.com/images/fancy-design-banner-curved-blank-decoration.png"];

        $scope.appContentId = 123;
        var widgets = [
            {title:"widget1", widgetId:'examplePlugin', icon:"http://www.graphicsfuel.com/wp-content/uploads/2012/07/steel-app-icon-512.png", requiresConnection:false }
            ,{title:"widget2", widgetId:'examplePlugin' , icon:"http://www.canadatechblog.com/wp-content/uploads/2013/08/mzl.iqdiiykr.png", requiresConnection:true}
        ];

        $scope.widgets=widgets;
    }
]);