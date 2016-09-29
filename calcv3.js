angular.module('CalculatorApp', [])
  .controller('CalculatorController', function($scope) {

  $scope.round = function(num) {
    //return +(Math.round(num + "e+2")  + "e-2");
    return num.toFixed(2);
  }

  $scope.result = function() {
    $r = $scope.VLPRECO * $scope.VLINDICEFINANCEIRO;
    console.log("Preço * VLINDICEFINANCEIRO: " + $r);
    $r *= $scope.VLINDICETABELAPRECO;
    console.log("R * VLINDICETABELAPRECO: " + $r);
    console.log("R * VLINDICECLIENTE: " + $r);
    $r = $scope.round($r * $scope.VLINDICECLIENTE);
    console.log("R * VLINDICECLIENTE (round): " + $r);
    $r *= $scope.UNIDADE;
    console.log("R * UNIDADE (" + $scope.UNIDADE +"): "+ + $r);
    $total = $scope.round(($r * $scope.QTD));
    console.log("R * QUANTIDADE (" + $scope.QTD +") (round): "+ + $total + "\n--------------------");
    return $scope.round(($r * $scope.QTD));
  };
});
