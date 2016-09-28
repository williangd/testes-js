angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
			$r = $scope.VLPRECO * $scope.VLINDICEFINANCEIRO;
			$r = $r * $scope.VLINDICETABELAPRECO;
			$r = $r * $scope.VLINDICECLIENTE
			//$result = Math.round(( $result * 100 )/100);
			$r = ( $r * 100 )/100;
			console.log(r);
			$r = $r * $scope.UNIDADE;
			//return ($r * $scope.QTD).toFixed(2);
			return ($r * $scope.QTD);
        };
    });
});