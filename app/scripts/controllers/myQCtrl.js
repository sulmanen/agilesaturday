'use strict';

angular.module('asApp')
    .controller('myQCtrl', ['$scope', '$resource', '$timeout',
        function($scope, $resource, $timeout) {
            var queryTimeout;
            var tempQuery;
            $scope.myQCtrl = {
            	tweets: undefined,
                search: function(query) {
                    if (queryTimeout) {
                        $timeout.cancel(queryTimeout);
                    }
                    tempQuery = query;
                    queryTimeout = $timeout(function() {
                        $scope.myQCtrl.tweets = $resource('http://localhost\\:8000/q/:q')
                            .get({
                                q: query
                            });
                    }, 1000);
                }
            }
        }
    ]);
