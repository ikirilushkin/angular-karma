(function () {
    angular.module('app', [])
        .controller('MainController', [function(){
            console.log(2);
        }])
        .controller('PasswordController', ['$scope', function($scope){
			$scope.temp = 'temp';
            $scope.password = '';
            $scope.grade = function (){
                var size = $scope.password.length;
                if (size > 8) {
                    $scope.strength = 'strong';
                } else if (size > 3){
                    $scope.strength = 'medium';
                } else {
                    $scope.strength = 'weak';
                }
            }
        }]);
})();