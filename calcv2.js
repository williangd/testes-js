angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
			$teste = Math.round((((($scope.VLPRECO * $scope.VLINDICEFINANCEIRO) * $scope.VLINDICETABELAPRECO)) * $scope.VLINDICECLIENTE) * 100 )/100;
			return $teste * $scope.QTD;
        };
    });