var round = function(num) {
    //return +(Math.round(num + "e+2")  + "e-2");
    return num.toFixed(2);
}

$("#VLPRECO").val(2.343);
$("#VLINDICEFINANCEIRO").val(1);
$("#VLINDICETABELAPRECO").val(1);
$("#VLINDICECLIENTE").val(1);
$("#UNIDADE").val(1);
$("#QUANTIDADE").val(1);

$("button").click(function (){
	console.clear();
	var VLPRECO = $("#VLPRECO").val();
	var VLINDICEFINANCEIRO = $("#VLINDICEFINANCEIRO").val();
	var VLINDICETABELAPRECO = $("#VLINDICETABELAPRECO").val();
	var VLINDICECLIENTE = $("#VLINDICECLIENTE").val();
	var UNIDADE = $("#UNIDADE").val();
	var QUANTIDADE = $("#QUANTIDADE").val();
	var RESULTADO = $("#result");
	//console.log(RESULTADO);
	r = VLPRECO * VLINDICEFINANCEIRO;
    console.log("Preço * VLINDICEFINANCEIRO: " + r);
    r *= VLINDICETABELAPRECO;
    console.log("R * VLINDICETABELAPRECO: " + r);
    console.log("R * VLINDICECLIENTE: " + r);
    r = round(r * VLINDICECLIENTE);
    console.log("R * VLINDICECLIENTE (round): " + r);
    r *= UNIDADE;
    console.log("R * UNIDADE (" + UNIDADE +"): "+ + r);
    total = round((r * QUANTIDADE));
    console.log("R * QUANTIDADE (" + QUANTIDADE +") (round): "+ total);
    //console.log(`Teste ${QUANTIDADE}`)
    RESULTADO.text(round(r * QUANTIDADE));

});