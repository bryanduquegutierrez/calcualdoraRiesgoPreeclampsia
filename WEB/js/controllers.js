


var app = angular.module('appObstetricia', ['ui.bootstrap', 'n3-line-chart']);



angular.module('appObstetricia').controller('appCtrl', function ($scope) {





$scope.chivato;
$scope.flag_au = false;
$scope.flag_acm = false;
$scope.flag_ratio = false;

$scope.dateFormat = 'dd-M-yyyy';

	$scope.today = function() {
		var today = new Date();
		
		$scope.fechaEco = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
		
	};
//	$scope.today();
//	$scope.set_ga1();


$scope.diabetes = 0;
$scope.preclamsia = 0;
$scope.radioMultiple = 'unico';
$scope.flujoAU = 'presente';
$scope.flujoDV = 'presente';
$scope.flujoIA = 'presente';
$scope.vejigaG1 = 'normal';
$scope.vejigaG2 = 'normal';
$scope.radioFormulas = 'manual';


$scope.pesoTabs = 'numerico';



	
	$scope.alerts = [
    { type: 'danger', msg: 'Riesgo algo' },
    { type: 'success', msg: 'Prueba' }
	];
	
	$scope.addAlert = function() {
		$scope.alerts.push({msg: 'Another alert!'});
	};
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	
$scope.radioRaza = 'caucasica';


  $scope.dateOptions = {
    formatDay: 'd',
    formatMonth: 'M',
    formatYear: 'yy',
    startingDay: 1
  };

$scope.open_fur = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened_fur = !($scope.opened_fur);

};

$scope.open_fechaEco = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened_fechaEco = !($scope.opened_fechaEco);
};

$scope.radioSexo = "varon";

var predicho = $scope.semanas;
var predichoReferencia;


/*
$scope.set_ga1 = function(){
	
		
// {{(fechaEco / (3600 * 1000 * 24)) - (fur / (3600 * 1000 * 24)) | number : 0}}

	
 if (angular.isDefined($scope.fechaEco)){
var feco = $scope.fechaEco;
 feco = feco.getTime();
	$scope.minFur = feco - (3600 * 1000 * 24 * 7 * 44);

}

 if (angular.isDefined($scope.fur)){
	var fur = $scope.fur;
 fur = fur.getTime();
	$scope.maxEco = fur + (3600 * 1000 * 24 * 7 * 44);
	$scope.fechaParto = new Date(fur + (3600 * 1000 * 24 * 7 * 40));
 }
	
	if (angular.isDefined($scope.fechaEco) && angular.isDefined($scope.fur)){

		var feco = $scope.fechaEco;
		
		var fur = $scope.fur;
	
	feco = feco.getTime();
	fur = fur.getTime();

	
	var ga = (feco / (3600 * 1000 * 24))- (fur / (3600 * 1000 * 24));
	// ga = Math.round(ga);
	$scope.gaPrueba = Math.round(ga);
	var dias = Math.round(ga) % 7;
	var semanas = parseInt(Math.round(ga)/7);

	// $scope.pfeco = feco.getTime();
	
	// var semanas = parseInt(ga);
	// var dias = (ga - semanas) * 7 ;
	$scope.ga1s = semanas;
	$scope.ga1d = dias;
	$scope.ga1 = (ga/7.0).toFixed(7);
	


		// var fecha = new Date(fur + (3600 * 1000 * 24 * 7 * 40));
		// $scope.fechaParto = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();

		var fecha2 = new Date( feco ) ;
		$scope.fechaEco = fecha2.getDate() + "-" + (fecha2.getMonth() + 1) + "-" + fecha2.getFullYear();


			$scope.change_ga();
	}
}  

// $scope.set_ga2 = function(){
// var semanas2 = $scope.semanas;
// var dias2 = $scope.dias;

	// if (angular.isUndefined($scope.dias)){
// $scope.dias = 0;
	// }

// var ga2 = semanas2 + (dias2 / 7);
// $scope.ga2 = ga2.toFixed(7);
	// $scope.change_ga();
// }


	$scope.set_ga2 = function(){

		
		if (angular.isUndefined($scope.dias)){
			$scope.dias = 0;
		}
		
		var ga2 = $scope.semanas + ($scope.dias / 7);
		$scope.ga2 = ga2.toFixed(7);
		$scope.change_ga();
	}


$scope.set_ga3 = function(){
	if (angular.isDefined($scope.crl_edad)){
		var biometria = new CRL($scope.crl_edad, 0);
		var edadCorrespondiente = biometria.edadCorrespondiente();
		var semanas = parseInt(edadCorrespondiente);
		var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
		var resultado;
		resultado = "Edad gestacional de "+ semanas + "s "+ dias + "d";
		$scope.resultado_crl_edad = resultado;
		$scope.ga3 =biometria.edadCorrespondiente();
		var ga = biometria.edadCorrespondiente() * 7;
		$scope.ga3d = Math.round(ga) % 7;
		$scope.ga3s = parseInt(Math.round(ga)/7);
		
		$scope.change_ga();
		
	}
}


$scope.set_FUR_CRL = function(){
		$scope.fechaEco = new Date();
		
		var feco = $scope.fechaEco;
		feco = feco.getTime();
		
		var fecha = new Date( feco - ( (($scope.ga3s * 7) + $scope.ga3d ) * 24 * 3600 * 1000 ) ) ;
		$scope.fur = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
		
		$scope.dateFormat = 'd-M-yyyy';	
		 $scope.set_ga1();
		
		
		
		
		$scope.change_ga();		
}

$scope.change_ga = function(){
	var cga = $scope.radioGa;
	
	if (cga == "real"){
		// var ga = $scope.ga;
		// var ga1 = $scope.ga1;
		$scope.ga = $scope.ga1;	
		$scope.set_values();
		$scope.gas = $scope.ga1s;
		$scope.gad = $scope.ga1d;
	}
	
	if (cga == "prueba"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga2;
		$scope.set_values();
		$scope.gas = $scope.semanas;
		$scope.gad = $scope.dias;
	}

	if (cga == "crl"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga3;
		$scope.set_values();
		$scope.gas = $scope.ga3s;
		$scope.gad = $scope.ga3d;
	}

}
*/


$scope.set_ga1 = function(){
	
		
// {{(fechaEco / (3600 * 1000 * 24)) - (fur / (3600 * 1000 * 24)) | number : 0}}

	
 if (angular.isDefined($scope.fechaEco)){
var feco = $scope.fechaEco;
 feco = feco.getTime();
	$scope.minFur = feco - (3600 * 1000 * 24 * 7 * 44);
}

 if (angular.isDefined($scope.fur)){
	var fur = $scope.fur;
 fur = fur.getTime();
	$scope.maxEco = fur + (3600 * 1000 * 24 * 7 * 44);
	$scope.fechaParto = new Date(fur + (3600 * 1000 * 24 * 7 * 40));
 }
	
	if (angular.isDefined($scope.fechaEco) && angular.isDefined($scope.fur)){

		var feco = $scope.fechaEco;
		
		var fur = $scope.fur;
	
	feco = feco.getTime();
	fur = fur.getTime();

	
	var ga = (feco / (3600 * 1000 * 24))- (fur / (3600 * 1000 * 24));
	// ga = Math.round(ga);
	$scope.gaPrueba = Math.round(ga);
	var dias = Math.round(ga) % 7;
	var semanas = parseInt(Math.round(ga)/7);

	// $scope.pfeco = feco.getTime();
	
	// var semanas = parseInt(ga);
	// var dias = (ga - semanas) * 7 ;
	$scope.ga1s = semanas;
	$scope.ga1d = dias;
	$scope.ga1 = (ga/7.0).toFixed(7);
	$scope.change_ga();
	}
}  

// $scope.set_ga2 = function(){
// var semanas2 = $scope.semanas;
// var dias2 = $scope.dias;
// if (angular.isUndefined($scope.dias)){
			// $scope.dias = 0;
	// }
// var ga2 = semanas2 + (dias2 / 7);
// $scope.ga2 = ga2.toFixed(7);
	// $scope.change_ga();
// }

	$scope.set_ga2 = function(){

		
		if (angular.isUndefined($scope.dias)){
			$scope.dias = 0;
		}
		
		var ga2 = $scope.semanas + ($scope.dias / 7);
		$scope.ga2 = ga2.toFixed(7);
		$scope.change_ga();
	}


$scope.set_ga3 = function(){
	if (angular.isDefined($scope.crl_edad)){
		var biometria = new CRL($scope.crl_edad, 0);
		var edadCorrespondiente = biometria.edadCorrespondiente();
		var semanas = parseInt(edadCorrespondiente);
		var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
		var resultado;
		resultado = "Edad gestacional de "+ semanas + "s "+ dias + "d";
		$scope.resultado_crl_edad = resultado;
		$scope.ga3 =biometria.edadCorrespondiente();
		var ga = biometria.edadCorrespondiente() * 7;
		$scope.ga3d = Math.round(ga) % 7;
		$scope.ga3s = parseInt(Math.round(ga)/7);
		
		$scope.change_ga();
		
	}
}


$scope.set_ga4 = function(){
	if (angular.isDefined($scope.bpd_edad)){
		var biometria = new BPD($scope.bpd_edad, 0);
		var edadCorrespondiente = biometria.edadCorrespondiente();
		var semanas = parseInt(edadCorrespondiente);
		var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
		var resultado;
		resultado = "Edad gestacional de "+ semanas + "s "+ dias + "d";

		$scope.ga4 =biometria.edadCorrespondiente();
		var ga = biometria.edadCorrespondiente() * 7;
		$scope.ga4d = Math.round(ga) % 7;
		$scope.ga4s = parseInt(Math.round(ga)/7);		
		$scope.change_ga();
		
	}
}


$scope.set_ga5 = function(){
	if (angular.isDefined($scope.fl_edad)){
		var biometria = new FL($scope.fl_edad, 0);
		var edadCorrespondiente = biometria.edadCorrespondiente();
		var semanas = parseInt(edadCorrespondiente);
		var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
		var resultado;
		resultado = "Edad gestacional de "+ semanas + "s "+ dias + "d";

		$scope.ga5 =biometria.edadCorrespondiente();
		var ga = biometria.edadCorrespondiente() * 7;
		$scope.ga5d = Math.round(ga) % 7;
		$scope.ga5s = parseInt(Math.round(ga)/7);
		
		$scope.change_ga();
		
	}
}


$scope.set_FUR_CRL = function(){
		//$scope.fechaEco = new Date();
		
		var feco = $scope.fechaEco;
		
		if (!angular.isDefined(feco) || !angular.isDefined($scope.bpd_edad)){
		$scope.fechaEco = new Date();
		feco = $scope.fechaEco;
		}
		feco = feco.getTime();
		
		$scope.fur = new Date( feco - ( (($scope.ga3s * 7) + $scope.ga3d ) * 24 * 3600 * 1000 ) ) ;

		$scope.dateFormat = 'dd-MM-yyyy';	
		$scope.set_ga1();
		$scope.change_ga();		
}

$scope.set_FUR_BPD = function(){
		//$scope.fechaEco = new Date();
		
		var feco = $scope.fechaEco;
		
		if (!angular.isDefined(feco) || !angular.isDefined($scope.bpd_edad)){
		$scope.fechaEco = new Date();
		feco = $scope.fechaEco;
		}
		feco = feco.getTime();
		
		$scope.fur = new Date( feco - ( (($scope.ga4s * 7) + $scope.ga4d ) * 24 * 3600 * 1000 ) ) ;

		$scope.dateFormat = 'dd-MM-yyyy';	
		$scope.set_ga1();
		$scope.change_ga();		
}

$scope.set_FUR_FL = function(){
		//$scope.fechaEco = new Date();
		
		var feco = $scope.fechaEco;
		
		if (!angular.isDefined(feco) || !angular.isDefined($scope.fl_edad) ){
		$scope.fechaEco = new Date();
		feco = $scope.fechaEco;
		}
		feco = feco.getTime();
		
		$scope.fur = new Date( feco - ( (($scope.ga5s * 7) + $scope.ga5d ) * 24 * 3600 * 1000 ) ) ;

		$scope.dateFormat = 'dd-MM-yyyy';	
		$scope.set_ga1();
		$scope.change_ga();		
}

$scope.change_ga = function(){
	var cga = $scope.radioGa;
	
	if (cga == "real"){
		// var ga = $scope.ga;
		// var ga1 = $scope.ga1;
		$scope.ga = $scope.ga1;	
		$scope.set_values();
		$scope.gas = $scope.ga1s;
		$scope.gad = $scope.ga1d;
	}
	
	if (cga == "prueba"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga2;
		$scope.set_values();
		$scope.gas = $scope.semanas;
		$scope.gad = $scope.dias;
	}

	if (cga == "crl"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga3;
		$scope.set_values();
		$scope.gas = $scope.ga3s;
		$scope.gad = $scope.ga3d;
	}
	
 		if (cga == "bpd"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga4;
		$scope.set_values();
		$scope.gas = $scope.ga4s;
		$scope.gad = $scope.ga4d;
	}
	
		if (cga == "fl"){
		// var ga = $scope.ga;
		// var ga2 = $scope.ga2;
		$scope.ga = $scope.ga5;
		$scope.set_values();
		$scope.gas = $scope.ga5s;
		$scope.gad = $scope.ga5d;
	}

}


$scope.set_tabs_peso = function(){	
	if ($scope.pesoTabs == "biometrias"){
		$scope.peso_numerico_isCollapsed = true;
		$scope.peso_biometrias_isCollapsed = false;
	}
	if ($scope.pesoTabs == "numerico"){
		$scope.peso_biometrias_isCollapsed = true;
		$scope.peso_numerico_isCollapsed = false;
	}
}

$scope.set_formulas = function(){

var ac = $scope.ac, bpd = $scope.bpd, hc = $scope.hc, fl = $scope.fl;

if ( angular.isDefined(ac) && angular.isDefined(fl) ){
$scope.Warsof_ac_fl = Warsof_ac_fl(ac, fl);
$scope.Hadlock_ac_fl = Hadlock_ac_fl(ac, fl);
$scope.Woo_ac_fl = Woo_ac_fl(ac, fl);
}

if ( angular.isDefined(ac) && angular.isDefined(bpd) ){
$scope.Warsof_ac_bpd = Warsof_ac_bpd(ac, bpd);
$scope.Shepard_ac_bpd = Shepard_ac_bpd(ac, bpd);
$scope.Jordaan_ac_bpd = Jordaan_ac_bpd(ac, bpd);
$scope.Hadlock_ac_bpd = Hadlock_ac_bpd(ac, bpd);
$scope.Woo_ac_bpd = Woo_ac_bpd(ac, bpd);
$scope.Vintzileos_ac_bpd = Vintzileos_ac_bpd(ac, bpd);
$scope.Hsieh_ac_bpd = Hsieh_ac_bpd(ac, bpd);
}

if ( angular.isDefined(ac) && angular.isDefined(hc) ){
$scope.Jordaan_ac_hc = Jordaan_ac_hc(ac, hc);
$scope.Hadlock_ac_hc = Hadlock_ac_hc(ac, hc);
}

if ( angular.isDefined(ac) && angular.isDefined(bpd) && angular.isDefined(fl) ){
$scope.Hadlock_ac_bpd_fl = Hadlock_ac_bpd_fl(ac, bpd, fl);
$scope.Woo_ac_bpd_fl = Woo_ac_bpd_fl(ac, bpd, fl);
$scope.Shinozuka_ac_bpd_fl = Shinozuka_ac_bpd_fl(ac, bpd, fl);
$scope.Hsieh_ac_bpd_fl = Hsieh_ac_bpd_fl(ac, bpd, fl);
}

if ( angular.isDefined(ac) && angular.isDefined(hc) && angular.isDefined(fl) ){
$scope.Hadlock_ac_hc_fl = Hadlock_ac_hc_fl(ac, hc, fl);
$scope.Ott_ac_hc_fl = Ott_ac_hc_fl(ac, hc, fl);
$scope.Combs_ac_hc_fl = Combs_ac_hc_fl(ac, hc, fl);
}

if ( angular.isDefined(ac) && angular.isDefined(hc) && angular.isDefined(bpd) ){
$scope.Jordaan_ac_hc_bpd = Jordaan_ac_hc_bpd(ac, hc, bpd);
}

if ( angular.isDefined(ac) && angular.isDefined(hc) && angular.isDefined(bpd) && angular.isDefined(fl) ){
$scope.Hadlock_ac_hc_bpd_fl = Hadlock_ac_hc_bpd_fl(ac, hc, bpd, fl);
}



}









$scope.set_values = function(){

	$scope.set_values_biometrias();
	$scope.set_pesos();
	$scope.set_per();
	$scope.set_values_huesos();	
	$scope.set_values_doppler();
	$scope.set_pesos_lancet();
	$scope.set_cardiaco2();
	
}

	$scope.set_values_biometrias = function(){
		$scope.set_crl();
		$scope.set_bpd();
		$scope.set_ac();
		$scope.set_fl();
		$scope.set_hc();
	}
	
	$scope.set_values_huesos = function(){
		$scope.set_humero();
		$scope.set_cubito();
		$scope.set_radio();
		$scope.set_femur();
		$scope.set_tibia();
		$scope.set_perone();
		$scope.set_pie();	
	}


	
	$scope.set_values_doppler = function(){
			if (angular.isDefined($scope.auip)){
		$scope.set_au();
			}
			if (angular.isDefined($scope.acmip)){	
		$scope.set_acm();
			}
			if ((angular.isDefined($scope.auip)) && (angular.isDefined($scope.acmip))){
		$scope.set_ratio();
			}
			if ((angular.isDefined($scope.auiip)) && (angular.isDefined($scope.audip))){
		$scope.set_uterinas();
			}
			if (angular.isDefined($scope.dvip)){	
		$scope.set_dv();
			}
			if (angular.isDefined($scope.iaip)){	
		$scope.set_ia();
			}
		$scope.set_velocidad_mca();
		$scope.set_transfusion();

$scope.chivato = $scope.flag_au;
		
		if (($scope.percentilPatologico_au >= 90) || ($scope.percentilPatologico_acm <= 10) || ($scope.percentilPatologico_ratio >= 90) || ($scope.percentilPatologico_ratio <= 10)){
			$scope.pasos_doppler2_isCollapsed = false;
			}else{
			$scope.pasos_doppler2_isCollapsed = true;
		}
		

		


		
		
		
		}
	

$scope.set_pesos = function(){
	if (angular.isDefined($scope.ac) && angular.isDefined($scope.fl) && angular.isDefined($scope.ga)){
		$scope.set_pesoHadlock1();
	}
	if (angular.isDefined($scope.ac) && angular.isDefined($scope.hc) && angular.isDefined($scope.fl) && angular.isDefined($scope.ga)){
		$scope.set_pesoHadlock2();
	}
	// if (angular.isDefined($scope.ac) && angular.isDefined($scope.ga)){
		// $scope.set_pesoCampbell();
	// }
	if (angular.isDefined($scope.ac) && angular.isDefined($scope.bpd) && angular.isDefined($scope.ga)){
		$scope.set_pesoShepard();
		//$scope.set_pesoMerz();
	}	
	if (angular.isDefined($scope.ac) && angular.isDefined($scope.fl) && angular.isDefined($scope.bpd) && angular.isDefined($scope.ga)){
		$scope.set_pesoHadlock3();
	}
	
	
	if ($scope.radioFormulas == "Hadlock1"){
		var ac = new AC($scope.ac, $scope.ga);
		var fl = new FL($scope.fl, $scope.ga);
		var peso = new EFW_Hadlock1(ac, fl);
		$scope.peso = peso.efw.toFixed(0);
	}
	
	if ($scope.radioFormulas == "Hadlock2"){
		var ac = new AC($scope.ac, $scope.ga);
		var hc = new HC($scope.hc, $scope.ga);
		var fl = new FL($scope.fl, $scope.ga);
		var peso = new EFW_Hadlock2(ac, hc, fl);
		$scope.peso = peso.efw.toFixed(0);
	}
	
	if ($scope.radioFormulas == "Hadlock3"){
		var ac = new AC($scope.ac, $scope.ga);
		var fl = new FL($scope.fl, $scope.ga);
		var bpd = new BPD($scope.bpd, $scope.ga);
		var peso = new EFW_Hadlock3(ac, fl, bpd);
		$scope.peso = peso.efw.toFixed(0);
	}
	
	if ($scope.radioFormulas == "Shepard"){
		var ac = new AC($scope.ac, $scope.ga);
		var bpd = new BPD($scope.bpd, $scope.ga);
		var peso = new EFW_Shepard(ac, bpd);
		$scope.peso = peso.efw.toFixed(0);
	}

	if ($scope.radioFormulas == "manual"){
 		$scope.peso = $scope.pesoManual;
			$scope.set_per();
	}
	
 	if (angular.isDefined($scope.ac)){
		$scope.set_per();
	}   	

	
	
	
}

$scope.set_per = function(){
	//$scope.set_percentiles();
	$scope.set_percentiles_HUGH();
	$scope.set_clinic($scope.peso);
	$scope.set_clinicV2($scope.peso);
	
	if  ($scope.percentilReferencia_clinic<=10){
		$scope.mensajePeso = "Peso con percentil de riesgo.";
		$scope.mensajeDoppler1 = "Se precisa doppler de arterias umbilical y cerebral media.";
		$scope.pasos_doppler1_isCollapsed = false;
		}else{
		$scope.mensajePeso = "";
		$scope.mensajeDoppler1 = "";
		$scope.pasos_doppler1_isCollapsed = true;
	}
	
	
}


/*
 * 
 * 
 * UNICOS
 * eg = 0.00920217;
 * eg2 = 0.00645354;
 * eg3 = -0.00010245;
 * sexo = 0.03942451;
 * constante = 3.9486685;
 * mse = 0.12801644;
 * 
 * 
 * GEMELOS
 * eg = -0.4602458;
 * eg2 = 0.01879654;
 * eg3 = -0.00020637;
 * sexo = 0.04579971;
 * constante = 9.6297115;
 * mse = 0.1391164;
 * 
 * TRIPLES
 * eg = 2.0200247;
 * eg2 = -0.05827472;
 * eg3 = 0.00058056;
 * sexo = 0.11269155;
 * constante = -16.676953;
 * mse = 0.16071315;
 * 
 * */

$scope.set_percentiles_HUGH = function(){

var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse;

var ga = $scope.ga;

if ($scope.radioSexo == "varon"){
	sex = 1;
}
	
		if ($scope.radioMultiple == "unico"){
		eg = 0.00920217;
		eg2 = 0.00645354;
		eg3 = -0.00010245;
		sexo = 0.03942451;
		constante = 3.9486685;
		mse = 0.12801644;
		
		}else if ($scope.radioMultiple == "doble"){
		eg = -0.4602458;
		eg2 = 0.01879654;
		eg3 = -0.00020637;
		sexo = 0.04579971;
		constante = 9.6297115;
		mse = 0.1391164;
		
		}else if ($scope.radioMultiple == "triple"){
		eg = 2.0200247;
		eg2 = -0.05827472;
		eg3 = 0.00058056;
		sexo = 0.11269155;
		constante = -16.676953;
		mse = 0.16071315;
	}
	
		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		
	zscore = ( Math.log($scope.peso) - pesoReferencia ) / mse;
	
	
	var percentil = getZPercent(zscore);
	
	var type;
	if ((percentil <= 5) || (percentil >= 95)) {
		type = 'danger';
    } else if ((percentil <= 10) || (percentil >= 90)) {
		type = 'warning';
    } else {
		type = 'success';
    }
	
	if ($scope.radioMultiple == "unico"){
    $scope.showWarningReferenciaV2 = (type === 'danger' || type === 'warning');
	$scope.typeRefV2 = type;
	$scope.zscoreReferenciaAbsV2 = Math.abs(zscore);
	$scope.zscoreReferenciaV2 = zscore;
	$scope.percentilReferenciaV2 = percentil.toFixed(0);
	$scope.pesoReferenciaV2 = Math.exp(pesoReferencia);	
	}


	$scope.typeRefV2_M = type;
	$scope.zscoreReferenciaAbsV2_M = Math.abs(zscore);
	$scope.zscoreReferenciaV2_M = zscore;
	$scope.percentilReferenciaV2_M = percentil.toFixed(0);
	$scope.pesoReferenciaV2_M = Math.exp(pesoReferencia);			
}
 



 

$scope.set_percentiles = function(){

var peso, ga, csex, cmul, cdiab, cprec, craza;

var eg, eg2, eg3, diab, prec, sex, caucasica, centroamericana, arabe, africana, asiatica, otras, nodisp, unico, doble, triple, constante, mse;

var pesoReferencia, percentilReferencia, zscoreReferencia, percentilReferencia2, zscoreReferencia2, pesoPatologico, percentilPatologico, zscorePatologico, pesoPatologico2, percentilPatologico2, zscorePatologico2;

eg = -0.35394279;
eg2 = 0.01686536;
eg3 = -0.00020047;
diab = 0.08583533;
prec = -0.07804432;
sex = 0.03977715;
centroamericana = 0.04631731;
arabe = 0.04539226;
africana = 0.02321966;
asiatica = 0.04427766;
otras = -0.02445283;
nodisp = 0.01470967;
unico = 0.0;
doble = -0.0269;
triple = -0.14423951;
constante = 8.09591;
mse = 0.13217893;

	// var semanas = $scope.semanas;
	// var dias = $scope.dias;
	// var ga = semanas + (dias / 7);

	var ga = $scope.ga;

	var peso = $scope.peso;
	var peso2 = $scope.peso2;
	
	var csex = $scope.radioSexo;
	var csex2 = $scope.radioSexo2;
	
	var cdiab = $scope.diabetes;
	var cprec = $scope.preclamsia;	
	
	var cmul1 = $scope.radioMultiple;	
	
	var craza = $scope.radioRaza;	
	
	var p50 = constante + eg*$scope.ga + eg2*$scope.ga*$scope.ga + eg3*$scope.ga*$scope.ga*$scope.ga;
	
	pesoReferencia = p50;

	if (cmul1 == "unico"){
		pesoReferencia = pesoReferencia + unico;
	}else if (cmul1 == "doble"){
		pesoReferencia = pesoReferencia + doble;
	}else if (cmul1 == "triple"){
		pesoReferencia = pesoReferencia + triple;
	}
	
	zscoreReferencia = ( Math.log(peso) - pesoReferencia ) / mse;
	var zscoreReferenciaAbs = Math.abs(zscoreReferencia);	
	percentilReferencia = getZPercent(zscoreReferencia);

	zscoreReferencia2 = ( Math.log(peso2) - pesoReferencia ) / mse;
	var zscoreReferenciaAbs2 = Math.abs(zscoreReferencia2);
	
	percentilReferencia2 = getZPercent(zscoreReferencia2);
	
	
	///	Tratamiento de los datos para el primer gestante.
	
	pesoPatologico = constante + eg*$scope.ga + eg2*$scope.ga*$scope.ga + eg3*$scope.ga*$scope.ga*$scope.ga;
	
	if (cdiab == true){
		pesoPatologico = pesoPatologico + diab;
	}

	if (cprec == true){
		pesoPatologico = pesoPatologico + prec;
	}	
	
	if (csex == "varon"){
		pesoPatologico = pesoPatologico + sex;
	}

	if (cmul1 == "unico"){
		pesoPatologico = pesoPatologico + unico;
	}else if (cmul1 == "doble"){
		pesoPatologico = pesoPatologico + doble;
	}else if (cmul1 = "triple"){
		pesoPatologico = pesoPatologico + triple;
	}
	
	if (craza == "caucasica"){
		pesoPatologico = pesoPatologico;
	}else if (craza == "centroamericana"){
		pesoPatologico = pesoPatologico + centroamericana;
	}else if (craza == "arabe"){
		pesoPatologico = pesoPatologico + arabe;
	}else if (craza == "africana"){
		pesoPatologico = pesoPatologico + africana;
	}else if (craza == "asiatica"){
		pesoPatologico = pesoPatologico + asiatica;
	}else if (craza == "otras"){
		pesoPatologico = pesoPatologico + otras;
	}else if (craza == "nodisp"){
		pesoPatologico = pesoPatologico + nodisp;
	}

	zscorePatologico = (Math.log(peso) - pesoPatologico) / mse;
	var zscorePatologicoAbs = Math.abs(zscorePatologico);
	percentilPatologico = getZPercent(zscorePatologico);



	
	///	Tratamiento de los datos para el primer gestante.

	pesoPatologico2 = constante + eg*$scope.ga + eg2*$scope.ga*$scope.ga + eg3*$scope.ga*$scope.ga*$scope.ga;
	
	if (cdiab == true){
		pesoPatologico2 = pesoPatologico2 + diab;
	}

	if (cprec == true){
		pesoPatologico2 = pesoPatologico2 + prec;
	}	
	
	if (csex2 == "varon"){
		pesoPatologico2 = pesoPatologico2 + sex;
	}

	if (cmul1 == "unico"){
		pesoPatologico2 = pesoPatologico2 + unico;
	}else if (cmul1 == "doble"){
		pesoPatologico2 = pesoPatologico2 + doble;
	}else if (cmul1 = "triple"){
		pesoPatologico2 = pesoPatologico2 + triple;
	}
	
	if (craza == "caucasica"){
		pesoPatologico2 = pesoPatologico2;
	}else if (craza == "centroamericana"){
		pesoPatologico2 = pesoPatologico2 + centroamericana;
	}else if (craza == "arabe"){
		pesoPatologico2 = pesoPatologico2 + arabe;
	}else if (craza == "africana"){
		pesoPatologico2 = pesoPatologico2 + africana;
	}else if (craza == "asiatica"){
		pesoPatologico2 = pesoPatologico2 + asiatica;
	}else if (craza == "otras"){
		pesoPatologico2 = pesoPatologico2 + otras;
	}else if (craza == "nodisp"){
		pesoPatologico2 = pesoPatologico2 + nodisp;
	}

	zscorePatologico2 = (Math.log(peso2) - pesoPatologico2) / mse;
	var zscorePatologicoAbs2 = Math.abs(zscorePatologico2);
	percentilPatologico2 = getZPercent(zscorePatologico2);



	
	

	pesoReferencia = Math.exp(pesoReferencia);
	pesoPatologico = Math.exp(pesoPatologico);
	pesoPatologico2 = Math.exp(pesoPatologico2);


	var diferencia = peso - pesoReferencia;
	var diferencia2 = peso2 - pesoReferencia;
	var discordancia = (Math.abs(peso - pesoReferencia) * 100) / Math.max(peso, pesoReferencia);
	var discordancia2 = (Math.abs(peso2 - pesoReferencia) * 100) / Math.max(peso2, pesoReferencia);
	var diferenciaGemelar = Math.abs(peso - peso2);
	var discordanciaGemelar = (Math.abs(peso - peso2) * 100) / Math.max(peso, peso2);
	


    var typeRef, typeRef2, type, type2, typeGemelar;

	if ((percentilReferencia <= 5) || (percentilReferencia >= 95)) {
      typeRef = 'danger';
    } else if ((percentilReferencia <= 10) || (percentilReferencia >= 90)) {
      typeRef = 'warning';
    } else {
      typeRef = 'success';
    }

	if ((percentilReferencia2 <= 5) || (percentilReferencia2 >= 95)) {
      typeRef2 = 'danger';
    } else if ((percentilReferencia2 <= 10) || (percentilReferencia2 >= 90)) {
      typeRef2 = 'warning';
    } else {
      typeRef2 = 'success';
    }
	
    if ((percentilPatologico <= 5) || (percentilPatologico >= 95)) {
      type = 'danger';
    } else if ((percentilPatologico <= 10) || (percentilPatologico >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }	

    if ((percentilPatologico2 <= 5) || (percentilPatologico2 >= 95)) {
      type2 = 'danger';
    } else if ((percentilPatologico2 <= 10) || (percentilPatologico2 >= 90)) {
      type2 = 'warning';
    } else {
      type2 = 'success';
    }	

    if (discordanciaGemelar >= 25){
      typeGemelar = 'danger';
    } else if (discordanciaGemelar >= 20) {
      typeGemelar = 'warning';
    } else {
      typeGemelar = 'success';
    }
	
	
    $scope.showWarningRef = (typeRef === 'danger' || typeRef === 'warning');
    $scope.showWarningRef2 = (typeRef2 === 'danger' || typeRef2 === 'warning');
    $scope.showWarning = (type === 'danger' || type === 'warning');
    $scope.showWarning2 = (type2 === 'danger' || type2 === 'warning');
    $scope.showWarningGemelar = (typeGemelar === 'danger' || typeGemelar === 'warning');
	
    $scope.typeRef = typeRef;
    $scope.typeRef2 = typeRef2;
    $scope.type = type;
    $scope.type2 = type2;
    $scope.typeGemelar = typeGemelar;
	
	var gregorio = new Gregorio_zs($scope.peso, $scope.ga, $scope.radioSexo);
	
    $scope.percentilReferencia = gregorio.percentil;
	$scope.zscoreReferencia = gregorio.zscore;
	$scope.zscoreReferenciaAbs = Math.abs(gregorio.zscore);
    $scope.pesoReferencia = gregorio.media_esperada;
	$scope.typeRef = getProgressbarType(gregorio.percentil);

    $scope.percentilReferencia2 = percentilReferencia2;
	$scope.zscoreReferencia2 = zscoreReferencia2;
	$scope.zscoreReferenciaAbs2 = zscoreReferenciaAbs2;
	
    $scope.percentilPatologico = percentilPatologico;
    $scope.zscorePatologico = zscorePatologico;
    $scope.zscorePatologicoAbs = zscorePatologicoAbs;
    $scope.pesoPatologico = pesoPatologico;
	
    $scope.percentilPatologico2 = percentilPatologico2;
    $scope.zscorePatologico2 = zscorePatologico2;
    $scope.zscorePatologicoAbs2 = zscorePatologicoAbs2;
    $scope.pesoPatologico2 = pesoPatologico2;
	
	$scope.diferencia = diferencia;
	$scope.diferencia2 = diferencia2;
	$scope.discordancia = discordancia;
	$scope.discordancia2 = discordancia2;
	$scope.diferenciaGemelar = diferenciaGemelar;
	$scope.discordanciaGemelar = discordanciaGemelar;
	

}


$scope.set_pesos_lancet = function(){
	var peso = $scope.peso, ga = $scope.ga, sexo = $scope.radioSexo;
	
if (peso && angular.isDefined(sexo) ){

	var gregorio = new Gregorio_zs(peso, $scope.ga, $scope.radioSexo);
	var gregorio2 = new Gregorio2_zs(peso, $scope.ga, $scope.radioSexo);
	var barcelona = new Barcelona_zs(peso, $scope.ga, $scope.radioSexo);	
	var talavera = new Talavera_zs(peso, $scope.ga, $scope.radioSexo);
	var fuenlabrada = new Fuenlabrada_zs(peso, $scope.ga, $scope.radioSexo);
	var mancha_centro = new Mancha_Centro_zs(peso, $scope.ga, 'varon');
	
    $scope.percentilReferencia = gregorio.percentil;
	$scope.zscoreReferencia = gregorio.zscore;
	$scope.zscoreReferenciaAbs = Math.abs(gregorio.zscore);
    $scope.pesoReferencia = gregorio.media_esperada;
	$scope.typeRef = getProgressbarType(gregorio.percentil);
	
	$scope.percentilReferenciaV2 = gregorio2.percentil;
	$scope.zscoreReferenciaV2 = gregorio2.zscore;
	$scope.zscoreReferenciaAbsV2 = Math.abs(gregorio2.zscore);
    $scope.pesoReferenciaV2 = gregorio2.media_esperada;
	$scope.typeRefV2 = getProgressbarType(gregorio2.percentil);
	
    $scope.percentilReferencia_clinicV2 = barcelona.percentil;
	$scope.zscoreReferencia_clinicV2 = barcelona.zscore;
	$scope.zscoreReferenciaAbs_clinicV2 = Math.abs(barcelona.zscore);
    $scope.pesoReferencia_clinicV2 = barcelona.media_esperada;
	$scope.type_clinicV2 = getProgressbarType(barcelona.percentil);
	
    $scope.percentilTalavera = talavera.percentil;
	$scope.zscoreTalavera = talavera.zscore;
	$scope.zscoreTalaveraAbs = Math.abs(talavera.zscore);
    $scope.pesoTalavera = talavera.media_esperada;
	$scope.typeTalavera = getProgressbarType(talavera.percentil);
	
	$scope.percentilFuenlabrada = fuenlabrada.percentil;
	$scope.zscoreFuenlabrada = fuenlabrada.zscore;
	$scope.zscoreFuenlabradaAbs = Math.abs(fuenlabrada.zscore);
    $scope.pesoFuenlabrada = fuenlabrada.media_esperada;
	$scope.typeFuenlabrada = getProgressbarType(fuenlabrada.percentil);
	
	$scope.percentilManchaCentro = mancha_centro.percentil;
	$scope.zscoreManchaCentro = mancha_centro.zscore;
	$scope.zscoreManchaCentroAbs = Math.abs(mancha_centro.zscore);
    $scope.pesoManchaCentro = mancha_centro.media_esperada;
	$scope.typeManchaCentro = getProgressbarType(mancha_centro.percentil);
	
	
	if ($scope.radioMultiple == "unico"){
	$scope.percentilReferenciaV2_M = gregorio2.percentil;
	$scope.zscoreReferenciaV2_M = gregorio2.zscore;
	$scope.zscoreReferenciaAbsV2_M = Math.abs(gregorio2.zscore);
    $scope.pesoReferenciaV2_M = gregorio2.media_esperada;
	$scope.typeRefV2_M = getProgressbarType(gregorio2.percentil);
	
    $scope.percentilReferencia_clinicV2_M = barcelona.percentil;
	$scope.zscoreReferencia_clinicV2_M = barcelona.zscore;
	$scope.zscoreReferenciaAbs_clinicV2_M = Math.abs(barcelona.zscore);
    $scope.pesoReferencia_clinicV2_M = barcelona.media_esperada;
	$scope.type_clinicV2_M = getProgressbarType(barcelona.percentil);
	}
	
	if ($scope.radioMultiple == "doble"){
		var barcelona = new Barcelona_zs_gemelos(peso, $scope.ga, $scope.radioSexo);
    $scope.percentilReferencia_clinicV2_M = barcelona.percentil;
	$scope.zscoreReferencia_clinicV2_M = barcelona.zscore;
	$scope.zscoreReferenciaAbs_clinicV2_M = Math.abs(barcelona.zscore);
    $scope.pesoReferencia_clinicV2_M = barcelona.media_esperada;
	$scope.type_clinicV2_M = getProgressbarType(barcelona.percentil);
	}

}
}

$scope.set_gemelos = function(){

}




$scope.set_clinic = function(peso){
	
	var zscore = clinic_zs(peso, $scope.radioSexo, $scope.ga);
	var percentil = getZPercent(zscore);
	
	var type;
	if ((percentil <= 5) || (percentil >= 95)) {
      type = 'danger';
    } else if ((percentil <= 10) || (percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_clinic = (type === 'danger' || type === 'warning');
	$scope.type_clinic = type;
	$scope.zscoreReferenciaAbs_clinic = Math.abs(zscore);
	$scope.zscoreReferencia_clinic = zscore;
	$scope.percentilReferencia_clinic = percentil.toFixed(0);
	$scope.pesoReferencia_clinic = clinic_p50(peso, $scope.radioSexo, $scope.ga);
}

	$scope.set_clinicV2 = function(peso){
		
		var zscore, percentil;
		
			if ($scope.radioMultiple == "unico"){
		
		zscore = clinic_zs(peso, $scope.radioSexo, $scope.ga);
		percentil = getZPercent(zscore);
		$scope.pesoReferencia_clinicV2 = clinic_p50(peso, $scope.radioSexo, $scope.ga);
			}else if ($scope.radioMultiple == "doble"){
				zscore = clinic_zs_gemelos(peso, $scope.radioSexo, $scope.ga);
				percentil = getZPercent(zscore);
				$scope.pesoReferencia_clinicV2 = clinic_p50_gemelos(peso, $scope.radioSexo, $scope.ga);
	}else {
				zscore = 0;
				percentil = 0;
				$scope.pesoReferencia_clinicV2 = 0;
	}
		var type;
		if ((percentil <= 5) || (percentil >= 95)) {
			type = 'danger';
		} else if ((percentil <= 10) || (percentil >= 90)) {
			type = 'warning';
		} else {
			type = 'success';
		}
		
		
		
	if ($scope.radioMultiple == "unico"){
		$scope.showWarning_clinicV2 = (type === 'danger' || type === 'warning');
		$scope.type_clinicV2 = type;
		$scope.zscoreReferenciaAbs_clinicV2 = Math.abs(zscore);
		$scope.zscoreReferencia_clinicV2 = zscore;
		$scope.percentilReferencia_clinicV2 = percentil.toFixed(0);
	}
		
		
		$scope.showWarning_clinicV2 = (type === 'danger' || type === 'warning');
		$scope.type_clinicV2_M = type;
		$scope.zscoreReferenciaAbs_clinicV2_M = Math.abs(zscore);
		$scope.zscoreReferencia_clinicV2_M = zscore;
		$scope.percentilReferencia_clinicV2_M = percentil.toFixed(0);

	}



$scope.set_pesoHadlock1 = function(){
	var ac = new AC($scope.ac, $scope.ga);
	var fl = new FL($scope.fl, $scope.ga);	
	if (angular.isDefined(ac) && angular.isDefined(fl) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Hadlock1(ac, fl, $scope.ga);

		$scope.peso_Hadlock1 = efwPrueba.efw.toFixed(0);
		$scope.resultado_Hadlock1_peso = efwPrueba.efw.toFixed(2) +"gr.";
		$scope.resultado_Hadlock1_edad = efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d";
	}else{
		$scope.resultado_Hadlock1_peso = " :( ";
	}
}

$scope.set_pesoHadlock2 = function(){
	var ac = new AC($scope.ac, $scope.ga);
	var hc = new HC($scope.hc, $scope.ga);
	var fl = new FL($scope.fl, $scope.ga);	
	if (angular.isDefined(ac) && angular.isDefined(hc) && angular.isDefined(fl) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Hadlock2(ac, hc, fl, $scope.ga);
		$scope.resultado_Hadlock2_peso = efwPrueba.efw.toFixed(2) +"gr.";
		$scope.resultado_Hadlock2_edad = efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d";
	}else{
		$scope.resultado_Hadlock2_peso = " :( ";
	}
}

$scope.set_pesoHadlock3 = function(){
	var ac = new AC($scope.ac, $scope.ga);
	var fl = new FL($scope.fl, $scope.ga);
	var bpd = new BPD($scope.bpd, $scope.ga);	
	if (angular.isDefined(ac) && angular.isDefined(fl) && angular.isDefined(bpd) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Hadlock3(ac, fl, bpd, $scope.ga);
		$scope.resultado_Hadlock3_peso = efwPrueba.efw.toFixed(2) +"gr.";
		$scope.resultado_Hadlock3_edad = efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d";
	}else{
		$scope.resultado_Hadlock3_peso = " :( ";
	}
}

$scope.set_pesoCampbell = function(){
	var ac = new AC($scope.ac, $scope.ga);
	if (angular.isDefined(ac) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Campbell(ac, $scope.ga);

		// $scope.peso_Hadlock2 = "Peso: " + efwPrueba.efw + ". DS: " + efwPrueba.ds + ". (ac: " + efwPrueba.ac.dato + ", fl: " + efwPrueba.fl.dato + ")";
		$scope.resultado_Campbell = efwPrueba.efw.toFixed(2) +"gr. (" + efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d)";
	}else{
		$scope.resultado_Campbell = " :( ";
	}
}

$scope.set_pesoShepard = function(){
	var ac = new AC($scope.ac, $scope.ga);
	var bpd = new BPD($scope.bpd, $scope.ga);	
	if (angular.isDefined(ac) && angular.isDefined(bpd) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Shepard(ac, bpd, $scope.ga);
		$scope.resultado_Shepard_peso = efwPrueba.efw.toFixed(2) +"gr.";
		$scope.resultado_Shepard_edad = efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d";
	}else{
		$scope.resultado_Shepard_peso = " :( ";
	}
}

$scope.set_pesoMerz = function(){
	var ac = new AC($scope.ac, $scope.ga);
	var bpd = new BPD($scope.bpd, $scope.ga);	
	if (angular.isDefined(ac) && angular.isDefined(bpd) && angular.isDefined($scope.ga)){
		var efwPrueba = new EFW_Merz(ac, bpd, $scope.ga);

		// $scope.peso_Hadlock2 = "Peso: " + efwPrueba.efw + ". DS: " + efwPrueba.ds + ". (ac: " + efwPrueba.ac.dato + ", fl: " + efwPrueba.fl.dato + ")";
		$scope.resultado_Merz = efwPrueba.efw.toFixed(2) +"gr. (" + efwPrueba.edadCorrespondienteSemanas + "s + " + efwPrueba.edadCorrespondienteDias + "d)";
	}else{
		$scope.resultado_Merz = " :( ";
	}
}



// $scope.set_pesoHadlock2 = function(){
	// var ac = $scope.ac;
	// var fl = $scope.fl;
	// var bpd = $scope.bpd;
	// if (angular.isDefined(ac) && angular.isDefined(fl) && angular.isDefined(bpd)){
		// var p = hadlock2(ac, fl, bpd);
		// $scope.peso_Hadlock2 = p;
	// }
// }

$scope.set_crl = function(){
	if (!angular.isUndefined($scope.crl)){
var biometria = new CRL($scope.crl, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_crl = resultado;


var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_crl = (type === 'danger' || type === 'warning');
	$scope.type_crl = type;
	$scope.zscorePatologicoAbs_crl = Math.abs(biometria.zscore);
	$scope.zscorePatologico_crl = biometria.zscore;
	$scope.percentilPatologico_crl = biometria.percentil.toFixed(0);
}
}

$scope.set_bpd = function(){
	if (!angular.isUndefined($scope.bpd)){
var biometria = new BPD($scope.bpd, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_bpd = resultado;

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_bpd = (type === 'danger' || type === 'warning');
	$scope.type_bpd = type;
	$scope.zscorePatologicoAbs_bpd = Math.abs(biometria.zscore);
	$scope.zscorePatologico_bpd = biometria.zscore;
	$scope.percentilPatologico_bpd = biometria.percentil.toFixed(0);

}
}

$scope.set_ac = function(){
	if (!angular.isUndefined($scope.ac)){
var biometria = new AC($scope.ac, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_ac = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_ac = (type === 'danger' || type === 'warning');
	$scope.type_ac = type;
	$scope.zscorePatologicoAbs_ac = Math.abs(biometria.zscore);
	$scope.zscorePatologico_ac = biometria.zscore;
	$scope.percentilPatologico_ac = biometria.percentil.toFixed(0);

}
}

$scope.set_fl = function(){
		if (!angular.isUndefined($scope.fl)){
var biometria = new FL($scope.fl, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_fl = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_fl = (type === 'danger' || type === 'warning');
	$scope.type_fl = type;
	$scope.zscorePatologicoAbs_fl = Math.abs(biometria.zscore);
	$scope.zscorePatologico_fl = biometria.zscore;
	$scope.percentilPatologico_fl = biometria.percentil.toFixed(0);

}
}

$scope.set_hc = function(){
	if (!angular.isUndefined($scope.hc)){
var biometria = new HC($scope.hc, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_hc = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_hc = (type === 'danger' || type === 'warning');
	$scope.type_hc = type;
	$scope.zscorePatologicoAbs_hc = Math.abs(biometria.zscore);
	$scope.zscorePatologico_hc = biometria.zscore;
	$scope.percentilPatologico_hc = biometria.percentil.toFixed(0);
}
}

$scope.set_humero = function(){
	if (!angular.isUndefined($scope.hum)){
		var biometria = new Humero($scope.hum, $scope.ga);
		var edadCorrespondiente = biometria.edadCorrespondiente();
		var semanas = parseInt(edadCorrespondiente);
		var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
		var resultado;
resultado =  semanas + "s "+ dias + "d";
		$scope.resultado_hum = resultado;
		
var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_hum = (type === 'danger' || type === 'warning');
	$scope.type_hum = type;
	$scope.zscorePatologicoAbs_hum = Math.abs(biometria.zscore);
	$scope.zscorePatologico_hum = biometria.zscore;
	$scope.percentilPatologico_hum = biometria.percentil.toFixed(0);
	}
}

$scope.set_cubito = function(){
		if (!angular.isUndefined($scope.cub)){
var biometria = new Cubito($scope.cub, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_cub = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_cub = (type === 'danger' || type === 'warning');
	$scope.type_cub = type;
	$scope.zscorePatologicoAbs_cub = Math.abs(biometria.zscore);
	$scope.zscorePatologico_cub = biometria.zscore;
	$scope.percentilPatologico_cub = biometria.percentil.toFixed(0);

}
}

$scope.set_radio = function(){
	if (!angular.isUndefined($scope.rad)){
var biometria = new Radio($scope.rad, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_rad = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_rad = (type === 'danger' || type === 'warning');
	$scope.type_rad = type;
	$scope.zscorePatologicoAbs_rad = Math.abs(biometria.zscore);
	$scope.zscorePatologico_rad = biometria.zscore;
	$scope.percentilPatologico_rad = biometria.percentil.toFixed(0);

}
}

$scope.set_femur = function(){
	if (!angular.isUndefined($scope.fem)){
var biometria = new Femur($scope.fem, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_fem = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_fem = (type === 'danger' || type === 'warning');
	$scope.type_fem = type;
	$scope.zscorePatologicoAbs_fem = Math.abs(biometria.zscore);
	$scope.zscorePatologico_fem = biometria.zscore;
	$scope.percentilPatologico_fem = biometria.percentil.toFixed(0);

}
}

$scope.set_tibia = function(){
	if (!angular.isUndefined($scope.tib)){
		var biometria = new Tibia($scope.tib, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_tib = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_tib = (type === 'danger' || type === 'warning');
	$scope.type_tib = type;
	$scope.zscorePatologicoAbs_tib = Math.abs(biometria.zscore);
	$scope.zscorePatologico_tib = biometria.zscore;
	$scope.percentilPatologico_tib = biometria.percentil.toFixed(0);

}
}
$scope.set_perone = function(){
		if (!angular.isUndefined($scope.per)){
var biometria = new Perone($scope.per, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_per = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_per = (type === 'danger' || type === 'warning');
	$scope.type_per = type;
	$scope.zscorePatologicoAbs_per = Math.abs(biometria.zscore);
	$scope.zscorePatologico_per = biometria.zscore;
	$scope.percentilPatologico_per = biometria.percentil.toFixed(0);

}
}

$scope.set_pie = function(){
	if (!angular.isUndefined($scope.pie)){
var biometria = new Pie($scope.pie, $scope.ga);
var edadCorrespondiente = biometria.edadCorrespondiente();
var semanas = parseInt(edadCorrespondiente);
var dias = Math.round((edadCorrespondiente - semanas) * 7) ;
var resultado;
resultado =  semanas + "s "+ dias + "d";
$scope.resultado_pie = resultado;	

var type;
if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
      type = 'danger';
    } else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_pie = (type === 'danger' || type === 'warning');
	$scope.type_pie = type;
	$scope.zscorePatologicoAbs_pie = Math.abs(biometria.zscore);
	$scope.zscorePatologico_pie = biometria.zscore;
	$scope.percentilPatologico_pie = biometria.percentil.toFixed(0);

}
}

$scope.set_au = function(){
var ga = $scope.ga;
var dato = $scope.auip;

var ip = new UAPI(dato, ga);


$scope.resultado_au = ip.percentil.toFixed(0);

var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }

    $scope.showWarning_au = (type === 'danger' || type === 'warning');
	$scope.type_au = type;
	$scope.zscorePatologicoAbs_au = Math.abs(ip.zscore);
	$scope.zscorePatologico_au = ip.zscore;
	$scope.percentilPatologico_au = ip.percentil.toFixed(0);
	
	
		if (($scope.percentilPatologico_au>=95) || ($scope.percentilPatologico_au<=5)){
			$scope.flag_au = true;
			}else{
			$scope.flag_au= false;
		}

		
		
	var ip_gregorio = new UAPI_Unico_Gregorio(dato, ga);
		


var type;
if ((ip_gregorio.percentil <= 5) || (ip_gregorio.percentil >= 95)) {
      type = 'danger';
    } else if ((ip_gregorio.percentil <= 10) || (ip_gregorio.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }

    $scope.showWarning_au_gregorio = (type === 'danger' || type === 'warning');
	$scope.type_au_gregorio = type;
	$scope.zscorePatologicoAbs_au_gregorio = Math.abs(ip_gregorio.zscore);
	$scope.zscorePatologico_au_gregorio = ip_gregorio.zscore;
	$scope.percentilPatologico_au_gregorio = ip_gregorio.percentil.toFixed(0);
	
	
		if (($scope.percentilPatologico_au_gregorio>=95) || ($scope.percentilPatologico_au_gregorio<=5)){
			$scope.flag_au_gregorio = true;
			}else{
			$scope.flag_au_gregorio= false;
		}


		
	$scope.zscorePatologicoAbs_au_gregorio = Math.abs(ip_gregorio.zscore);
	$scope.percentilPatologico_au_gregorio = ip_gregorio.percentil.toFixed(0);
}

$scope.set_acm = function(){
var ga = $scope.ga;
var dato = $scope.acmip;
	if (!angular.isUndefined(dato)){

var ip = new MCAPI(dato, ga);

$scope.resultado_acm = ip.percentil.toFixed(0);

var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_acm = (type === 'danger' || type === 'warning');
	$scope.type_acm = type;
	$scope.zscorePatologicoAbs_acm = Math.abs(ip.zscore);
	$scope.zscorePatologico_acm = ip.zscore;
	$scope.percentilPatologico_acm = ip.percentil.toFixed(0);

	
		if (($scope.percentilPatologico_acm>=95) || ($scope.percentilPatologico_acm<=5)){
			$scope.flag_acm = true;
			}else{
			$scope.flag_acm= false;
		}
	
	
	}
	

	$scope.resultado_acm = ip.percentil.toFixed(0);
	
	
	////////////////////////////////////////// 
	
	var ip_gregorio = new MCAPI_Unico_Gregorio(dato, ga);
	

var type;
if ((ip_gregorio.percentil <= 5) || (ip_gregorio.percentil >= 95)) {
      type = 'danger';
    } else if ((ip_gregorio.percentil <= 10) || (ip_gregorio.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_acm_gregorio = (type === 'danger' || type === 'warning');
	$scope.type_acm_gregorio = type;
	$scope.zscorePatologicoAbs_acm_gregorio = Math.abs(ip_gregorio.zscore);
	$scope.zscorePatologico_acm_gregorio = ip_gregorio.zscore;
	$scope.percentilPatologico_acm_gregorio = ip_gregorio.percentil.toFixed(0);

	
		if (($scope.percentilPatologico_acm_gregorio>=95) || ($scope.percentilPatologico_acm_gregorio<=5)){
			$scope.flag_acm_gregorio = true;
			}else{
			$scope.flag_acm_gregorio= false;
		}
	

	$scope.zscorePatologicoAbs_acm_gregorio = Math.abs(ip_gregorio.zscore);
		
	$scope.percentilPatologico_acm_gregorio = ip_gregorio.percentil.toFixed(0);
	
	
	}
	
	
	
	
	
	
























$scope.set_ratio = function(){
var ga = $scope.ga;
var au = $scope.auip;
var acm = $scope.acmip;
var ratio;
	if ((angular.isDefined(au)) && (angular.isDefined(acm))){
ratio = acm/au;
var ip = new CPR(acm, au, ga);
$scope.resultado_ratio = ip.percentil.toFixed(0);

var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_ratio = (type === 'danger' || type === 'warning');
	$scope.type_ratio = type;
	$scope.zscorePatologicoAbs_ratio = Math.abs(ip.zscore);
	$scope.zscorePatologico_ratio = ip.zscore;
	$scope.percentilPatologico_ratio = ip.percentil.toFixed(0);
	$scope.ratio = ratio.toFixed(2);
	
		if (($scope.percentilPatologico_ratio>=95) || ($scope.percentilPatologico_ratio<=5)){
			$scope.flag_ratio = true;
			}else{
			$scope.flag_ratio = false;
		}
	
}
}

$scope.set_uterinas = function(){
	var ga = $scope.ga;
	var der = $scope.audip;
	var izq = $scope.auiip;
	if (angular.isDefined(der) && angular.isDefined(izq)){
		var ip = new UAAPI(der, izq, ga);
		$scope.resultado_uterinas = ip.percentil.toFixed(0);
		
		
var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_uterinas = (type === 'danger' || type === 'warning');
	$scope.type_uterinas = type;
	$scope.zscorePatologicoAbs_uterinas = Math.abs(ip.zscore);
	$scope.zscorePatologico_uterinas = ip.zscore;
	$scope.percentilPatologico_uterinas = ip.percentil.toFixed(0);
		
		
	}
}
$scope.set_dv = function(){
var ga = $scope.ga;
var dato = $scope.dvip;
	if (!angular.isUndefined(dato)){
var ip = new VDPI(dato, ga);
$scope.resultado_dv = ip.percentil.toFixed(0);

var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_dv = (type === 'danger' || type === 'warning');
	$scope.type_dv = type;
	$scope.zscorePatologicoAbs_dv = Math.abs(ip.zscore);
	$scope.zscorePatologico_dv = ip.zscore;
	$scope.percentilPatologico_dv = ip.percentil.toFixed(0);

}
}

$scope.set_ia = function(){
var ga = $scope.ga;
var dato = $scope.iaip;
	if (!angular.isUndefined(dato)){
var ip = new AIPI(dato, ga);
$scope.resultado_ia = ip.percentil.toFixed(0);	

var type;
if ((ip.percentil <= 5) || (ip.percentil >= 95)) {
      type = 'danger';
    } else if ((ip.percentil <= 10) || (ip.percentil >= 90)) {
      type = 'warning';
    } else {
      type = 'success';
    }
    $scope.showWarning_ia = (type === 'danger' || type === 'warning');
	$scope.type_ia = type;
	$scope.zscorePatologicoAbs_ia = Math.abs(ip.zscore);
	$scope.zscorePatologico_ia = ip.zscore;
	$scope.percentilPatologico_ia = ip.percentil.toFixed(0);

}
}

$scope.set_velocidad_mca = function(){
var ga = $scope.ga;
var dato = $scope.mcapsv;
	if (!angular.isUndefined(dato)){
var mca = new velocidad_MCA(dato, ga);
var resultado = "Velocidad esperada: "+mca.velocidadEsperada.toFixed(2)+". MoM = "+mca.mom.toFixed(2)+" . ";

var type;
	if (mca.mom > 1.6) {
		resultado += "Anemia severa.";
		type = 'danger';
		$scope.tipoAnemia = "Anemia sereva.";
		} else if (mca.mom > 1.5) {
		resultado += "Anemia moderada.";
		type = 'warning';
		$scope.tipoAnemia = "Anemia moderada.";
	} else if (mca.mom > 1.3) {
		resultado += "Anemia leve.";
		type = 'success';
		$scope.tipoAnemia = "Anemia leve.";
	} else if (mca.mom <= 1.3) {
		resultado += "No hay anemia.";
		type = 'info';
		$scope.tipoAnemia = "No hay anemia.";
	}

$scope.resultado_mcapsv = resultado;	
$scope.mcaVelocidadEsperada = mca.velocidadEsperada.toFixed(2);
$scope.mcaMOM = mca.mom.toFixed(2);
	
    $scope.showWarning_anemia = (type === 'danger' || type === 'warning' || type === 'success');
	$scope.type_anemia = type;
	$scope.mom_anemia = mca.mom.toFixed(2)


}
}

$scope.set_transfusion = function(){
	var ga = $scope.ga;
	var don = $scope.hem_don;
	var esp = $scope.hem_esp;
	var obs = $scope.hem_obs;
	if (angular.isDefined(don) && angular.isDefined(esp) && angular.isDefined(obs)){
		var ml = transfusion_ml(don, esp, obs, ga);
		$scope.resultado_transfusion = ml;
	}
}





$scope.set_cervix = function(){
	
	if ($scope.cervix < 15 ){
		$scope.resultado_cervix = "Parto <7 días: 5.71 (3.77 - 8.65).    Parto <34 sem.: 4.31 (2.73 - 6.82) ";
	} else if (($scope.cervix >= 15) && ($scope.cervix < 20)){
		$scope.resultado_cervix = "Parto <7 días: 3.74 (2.77 - 5.05).    Parto <34 sem.: 6.04 (0.85 - 43.1) ";
	}else if (($scope.cervix >= 20) && ($scope.cervix <= 25)){
		$scope.resultado_cervix = "Parto <7 días: 2.77 (2.15 - 3.59).    Parto <34 sem.: 2.22 (1.43 - 3.44) ";
	}
	
	if (angular.isDefined($scope.edadMaterna)){
			
			var resultado = -2.88;
			
			resultado = resultado + (($scope.edadMaterna) * -0.04);
			
			if ($scope.cervix_longitud) resultado = resultado + 1.46;
			if ($scope.cervix_consistencia) resultado =resultado + 1.59;
			if ($scope.cervix_apertura) resultado = resultado + -0.78;
			if ($scope.cervix_ruptura) resultado = resultado + 3.96;
			if ($scope.cervix_ausencia_contracciones) resultado = resultado -0.89;
			if ($scope.cervix_test_negativo) resultado = resultado + -3.19;

			$scope.resultado_cervix = 100*(Math.pow(Math.E, resultado)) / (1 + Math.pow(Math.E, resultado));
			
			
		var resultad = 0.06;
		
		resultad = resultad + (($scope.edadMaterna) * 0.96);
		
		if ($scope.cervix_longitud) resultad = resultad + 4.16;
		if ($scope.cervix_consistencia) resultad =resultad + 4.89;
		if ($scope.cervix_apertura) resultad = resultad + 0.46;
		if ($scope.cervix_ruptura) resultad = resultad + 52.37;
		if ($scope.cervix_ausencia_contracciones) resultad = resultad + 0.41;
		if ($scope.cervix_test_negativo) resultad = resultad + 0.04;
		
		$scope.cervix_prueba = (resultad);
			
			
			// $scope.cervix_prueba = $scope.ga * 0.29 + $scope.ga*$scope.ga * (-0.019);
			
			
			
			
			
	}
	
	
}



	$scope.set_monochorionic = function(){
		
		// var discordanciaGemelar = (Math.abs(peso - peso2) * 100) / Math.max(peso, peso2);
		
		if ((((Math.max($scope.amnioticoG1, $scope.amnioticoG2) > 80) && ($scope.ga < 20)) || (Math.max($scope.amnioticoG1, $scope.amnioticoG2) > 100))  && ((Math.min($scope.amnioticoG1, $scope.amnioticoG2) < 20))){
			$scope.flagSTFF = true;
			}else {
			$scope.flagSTFF = false;
		}
		


		if (($scope.ga<24) || ((Math.max($scope.pesoG1, $scope.pesoG2)) < 500)){
			if (((Math.abs($scope.acG1 - $scope.acG2) * 100) / Math.max($scope.acG1, $scope.acG2)) > 20){
				$scope.discordanciachunga = ((Math.abs($scope.acG1 - $scope.acG2) * 100) / Math.max($scope.acG1, $scope.acG2));
				$scope.flagCIRS = true;
			}else {
				$scope.flagCIRS = false;
			}
			
			
		}else if ($scope.ga>=24){

			if (((Math.abs($scope.pesoG1 - $scope.pesoG2) * 100) / Math.max($scope.pesoG1, $scope.pesoG2)) > 20){
				$scope.discordanciachunga = ((Math.abs($scope.pesoG1 - $scope.pesoG2) * 100) / Math.max($scope.pesoG1, $scope.pesoG2));
				$scope.flagCIRS = true;
			}else {
				$scope.flagCIRS = false;
			}
			

		}else {
			$scope.flagCIRS = false;
		}

		if ((angular.isDefined($scope.mcaG1))&&(angular.isDefined($scope.mcaG2))){
			var ga = $scope.ga;
			var dato = Math.max($scope.mcaG1, $scope.mcaG2);
			var mca = new velocidad_MCA(dato, ga);
			$scope.momchungo = mca.mom;
			if (mca.mom > 1.5){
				$scope.flagAnemia = true;
			}else{
				$scope.flagAnemia = false;
			}
		}
	
	}

	
	
	
	
	
	
	
$scope.set_cardiaco_aortic_valve = function(){
	if (angular.isDefined($scope.aortic_valve)){
		var prueba = new AorticValve($scope.aortic_valve * 0.1, $scope.ga);
		$scope.showWarning_aortic_valve = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_aortic_valve = prueba.type;
		$scope.zscorePatologico_aortic_valve = prueba.zscore;
		$scope.zscorePatologicoAbs_aortic_valve = Math.abs(prueba.zscore);
		$scope.percentilPatologico_aortic_valve = prueba.percentil.toFixed(0);
		$scope.resultado_aortic_valve = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_pulmonary_valve = function(){
	if (angular.isDefined($scope.pulmonary_valve)){
		var prueba = new PulmonaryValve($scope.pulmonary_valve * 0.1, $scope.ga);
		$scope.showWarning_pulmonary_valve = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_pulmonary_valve = prueba.type;
		$scope.zscorePatologico_pulmonary_valve = prueba.zscore;
		$scope.zscorePatologicoAbs_pulmonary_valve = Math.abs(prueba.zscore);
		$scope.percentilPatologico_pulmonary_valve = prueba.percentil.toFixed(0);
		$scope.resultado_pulmonary_valve = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_ascending_aorta = function(){
	if (angular.isDefined($scope.ascending_aorta)){
		var prueba = new AscendingAorta($scope.ascending_aorta * 0.1, $scope.ga);
		$scope.showWarning_ascending_aorta = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_ascending_aorta = prueba.type;
		$scope.zscorePatologico_ascending_aorta = prueba.zscore;
		$scope.zscorePatologicoAbs_ascending_aorta = Math.abs(prueba.zscore);
		$scope.percentilPatologico_ascending_aorta = prueba.percentil.toFixed(0);
		$scope.resultado_ascending_aorta = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_main_pulmonary_artery = function(){
	if (angular.isDefined($scope.main_pulmonary_artery)){
		var prueba = new MainPulmonaryArtery($scope.main_pulmonary_artery * 0.1, $scope.ga);
		$scope.showWarning_main_pulmonary_artery = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_main_pulmonary_artery = prueba.type;
		$scope.zscorePatologico_main_pulmonary_artery = prueba.zscore;
		$scope.zscorePatologicoAbs_main_pulmonary_artery = Math.abs(prueba.zscore);
		$scope.percentilPatologico_main_pulmonary_artery = prueba.percentil.toFixed(0);
		$scope.resultado_main_pulmonary_artery = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_tricuspid_valve = function(){
	if (angular.isDefined($scope.tricuspid_valve)){
		var prueba = new TricuspidValve($scope.tricuspid_valve * 0.1, $scope.ga);
		$scope.showWarning_tricuspid_valve = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_tricuspid_valve = prueba.type;
		$scope.zscorePatologico_tricuspid_valve = prueba.zscore;
		$scope.zscorePatologicoAbs_tricuspid_valve = Math.abs(prueba.zscore);
		$scope.percentilPatologico_tricuspid_valve = prueba.percentil.toFixed(0);
		$scope.resultado_tricuspid_valve = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_mitral_valve = function(){
	if (angular.isDefined($scope.mitral_valve)){
		var prueba = new MitralValve($scope.mitral_valve * 0.1, $scope.ga);
		$scope.showWarning_mitral_valve = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_mitral_valve = prueba.type;
		$scope.zscorePatologico_mitral_valve = prueba.zscore;
		$scope.zscorePatologicoAbs_mitral_valve = Math.abs(prueba.zscore);
		$scope.percentilPatologico_mitral_valve = prueba.percentil.toFixed(0);
		$scope.resultado_mitral_valve = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_r_ventricle_ed_dimension = function(){
	if (angular.isDefined($scope.r_ventricle_ed_dimension)){
		var prueba = new RVentricleEDDimension($scope.r_ventricle_ed_dimension * 0.1, $scope.ga);
		$scope.showWarning_r_ventricle_ed_dimension = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_r_ventricle_ed_dimension = prueba.type;
		$scope.zscorePatologico_r_ventricle_ed_dimension = prueba.zscore;
		$scope.zscorePatologicoAbs_r_ventricle_ed_dimension = Math.abs(prueba.zscore);
		$scope.percentilPatologico_r_ventricle_ed_dimension = prueba.percentil.toFixed(0);
		$scope.resultado_r_ventricle_ed_dimension = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_l_ventricle_ed_dimension = function(){
	if (angular.isDefined($scope.l_ventricle_ed_dimension)){
		var prueba = new LVentricleEDDimension($scope.l_ventricle_ed_dimension * 0.1, $scope.ga);
		$scope.showWarning_l_ventricle_ed_dimension = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_l_ventricle_ed_dimension = prueba.type;
		$scope.zscorePatologico_l_ventricle_ed_dimension = prueba.zscore;
		$scope.zscorePatologicoAbs_l_ventricle_ed_dimension = Math.abs(prueba.zscore);
		$scope.percentilPatologico_l_ventricle_ed_dimension = prueba.percentil.toFixed(0);
		$scope.resultado_l_ventricle_ed_dimension = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_r_ventricle_inlet = function(){
	if (angular.isDefined($scope.r_ventricle_inlet)){
		var prueba = new RVentricleInlet($scope.r_ventricle_inlet * 0.1, $scope.ga);
		$scope.showWarning_r_ventricle_inlet = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_r_ventricle_inlet = prueba.type;
		$scope.zscorePatologico_r_ventricle_inlet = prueba.zscore;
		$scope.zscorePatologicoAbs_r_ventricle_inlet = Math.abs(prueba.zscore);
		$scope.percentilPatologico_r_ventricle_inlet = prueba.percentil.toFixed(0);
		$scope.resultado_r_ventricle_inlet = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_l_ventricle_inlet = function(){
	if (angular.isDefined($scope.l_ventricle_inlet)){
		var prueba = new LVentricleInlet($scope.l_ventricle_inlet * 0.1, $scope.ga);
		$scope.showWarning_l_ventricle_inlet = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_l_ventricle_inlet = prueba.type;
		$scope.zscorePatologico_l_ventricle_inlet = prueba.zscore;
		$scope.zscorePatologicoAbs_l_ventricle_inlet = Math.abs(prueba.zscore);
		$scope.percentilPatologico_l_ventricle_inlet = prueba.percentil.toFixed(0);
		$scope.resultado_l_ventricle_inlet = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_r_ventricle_area = function(){
	if (angular.isDefined($scope.r_ventricle_area)){
		var prueba = new RVentricleArea($scope.r_ventricle_area * 0.1, $scope.ga);
		$scope.showWarning_r_ventricle_area = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_r_ventricle_area = prueba.type;
		$scope.zscorePatologico_r_ventricle_area = prueba.zscore;
		$scope.zscorePatologicoAbs_r_ventricle_area = Math.abs(prueba.zscore);
		$scope.percentilPatologico_r_ventricle_area = prueba.percentil.toFixed(0);
		$scope.resultado_r_ventricle_area = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_l_ventricle_area = function(){
	if (angular.isDefined($scope.l_ventricle_area)){
		var prueba = new LVentricleArea($scope.l_ventricle_area * 0.1, $scope.ga);
		$scope.showWarning_l_ventricle_area = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_l_ventricle_area = prueba.type;
		$scope.zscorePatologico_l_ventricle_area = prueba.zscore;
		$scope.zscorePatologicoAbs_l_ventricle_area = Math.abs(prueba.zscore);
		$scope.percentilPatologico_l_ventricle_area = prueba.percentil.toFixed(0);
		$scope.resultado_l_ventricle_area = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_descending_aorta = function(){
	if (angular.isDefined($scope.descending_aorta)){
		var prueba = new DescendingAorta($scope.descending_aorta * 0.1, $scope.ga);
		$scope.showWarning_descending_aorta = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_descending_aorta = prueba.type;
		$scope.zscorePatologico_descending_aorta = prueba.zscore;
		$scope.zscorePatologicoAbs_descending_aorta = Math.abs(prueba.zscore);
		$scope.percentilPatologico_descending_aorta = prueba.percentil.toFixed(0);
		$scope.resultado_descending_aorta = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_inferior_vena_cava = function(){
	if (angular.isDefined($scope.inferior_vena_cava)){
		var prueba = new InferiorVenaCava($scope.inferior_vena_cava * 0.1, $scope.ga);
		$scope.showWarning_inferior_vena_cava = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_inferior_vena_cava = prueba.type;
		$scope.zscorePatologico_inferior_vena_cava = prueba.zscore;
		$scope.zscorePatologicoAbs_inferior_vena_cava = Math.abs(prueba.zscore);
		$scope.percentilPatologico_inferior_vena_cava = prueba.percentil.toFixed(0);
		$scope.resultado_inferior_vena_cava = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_r_pulmonary_artery = function(){
	if (angular.isDefined($scope.r_pulmonary_artery)){
		var prueba = new RPulmonaryArtery($scope.r_pulmonary_artery * 0.1, $scope.ga);
		$scope.showWarning_r_pulmonary_artery = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_r_pulmonary_artery = prueba.type;
		$scope.zscorePatologico_r_pulmonary_artery = prueba.zscore;
		$scope.zscorePatologicoAbs_r_pulmonary_artery = Math.abs(prueba.zscore);
		$scope.percentilPatologico_r_pulmonary_artery = prueba.percentil.toFixed(0);
		$scope.resultado_r_pulmonary_artery = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_l_pulmonary_artery = function(){
	if (angular.isDefined($scope.l_pulmonary_artery)){
		var prueba = new LPulmonaryArtery($scope.l_pulmonary_artery * 0.1, $scope.ga);
		$scope.showWarning_l_pulmonary_artery = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_l_pulmonary_artery = prueba.type;
		$scope.zscorePatologico_l_pulmonary_artery = prueba.zscore;
		$scope.zscorePatologicoAbs_l_pulmonary_artery = Math.abs(prueba.zscore);
		$scope.percentilPatologico_l_pulmonary_artery = prueba.percentil.toFixed(0);
		$scope.resultado_l_pulmonary_artery = "Media: " + (prueba.media * 10);
	}
}	

$scope.set_cardiaco_arterial_duct = function(){
	if (angular.isDefined($scope.arterial_duct)){
		var prueba = new ArterialDuct($scope.arterial_duct * 0.1, $scope.ga);
		$scope.showWarning_arterial_duct = (prueba.type === 'danger' || prueba.type === 'warning');
		$scope.type_arterial_duct = prueba.type;
		$scope.zscorePatologico_arterial_duct = prueba.zscore;
		$scope.zscorePatologicoAbs_arterial_duct = Math.abs(prueba.zscore);
		$scope.percentilPatologico_arterial_duct = prueba.percentil.toFixed(0);
		$scope.resultado_arterial_duct = "Media: " + (prueba.media * 10);
	}
}








$scope.estudio_formulas = function(){
	var peso;
	
	// M-m / M
	
	if ($scope.estudioFormulas == 'Hadlock_ac_fl'){
		peso = $scope.Hadlock_ac_fl;
	} else if ($scope.estudioFormulas == 'Jordaan_ac_hc'){
		peso = $scope.Jordaan_ac_hc;
	} else if ($scope.estudioFormulas == 'Hadlock_ac_hc'){
		peso = $scope.Hadlock_ac_hc;
	}

	
	if (angular.isDefined(peso)){
		$scope.discordancia_Hadlock_ac_fl = ((peso - $scope.Hadlock_ac_fl) * 100) / peso;
		$scope.discordancia_Jordaan_ac_hc = ((peso - $scope.Jordaan_ac_hc) * 100) / peso;
		$scope.discordancia_Hadlock_ac_hc = ((peso - $scope.Hadlock_ac_hc) * 100) / peso;
		
		
	}
		
}




$scope.set_estudio_paises = function(){

var pesoMaterno = $scope.pesoMaterno, alturaMaterna = $scope.alturaMaterna, origen = $scope.origenMaterno, paridad = $scope.paridadMaterna , sexo = $scope.sexoPaises;

var ga = $scope.ga, peso = $scope.peso;

var resultado = 0;
	
	if ( angular.isDefined(pesoMaterno) && angular.isDefined(alturaMaterna)  ){
		$scope.resultado_Irlanda = TOWirlanda(alturaMaterna, pesoMaterno, origen, paridad, sexo);
		$scope.resultado_Australia = TOWaustralia(alturaMaterna, pesoMaterno, origen, paridad, sexo);
		$scope.resultado_Nueva_Zelanda = TOWnuevazelanda(alturaMaterna, pesoMaterno, origen, paridad, sexo);
		$scope.resultado_USA = TOWusa(alturaMaterna, pesoMaterno, origen, paridad, sexo);
		$scope.resultado_Reino_Unido = TOWreinounido(alturaMaterna, pesoMaterno, origen, paridad, sexo);
		
			if ( angular.isDefined(peso)  ){

				var espana = new TOWespana(alturaMaterna, pesoMaterno, origen, paridad, sexo, ga, peso);
				
				$scope.zscorePatologicoAbs_Espana = Math.abs(espana.zscore);
				$scope.zscorePatologicoAbs_Espana_mod = Math.abs(espana.zscore_mod);

				$scope.resultado_Espana = "cte: " + espana.cte.toFixed(0) + " zscore:" + espana.zscore.toFixed(1) + ", percentil: " + espana.percentil.toFixed(0) + ", p10: " + espana.p10.toFixed(0) + ", p90: " + espana.p90.toFixed(0);				
				$scope.resultado_Espana_mod = "cte: " + espana.cteFinal.toFixed(0) + " zscore:" + espana.zscore_mod.toFixed(1) + ", percentil: " + espana.percentil_mod.toFixed(0) + ", p10: " + espana.p10_mod.toFixed(0) + ", p90: " + espana.p90_mod.toFixed(0);	
		
				$scope.type_Espana= espana.type;
				$scope.type_Espana_mod= espana.type_mod;
				
				
				
				
				
				var irlanda = new TOWirlanda(alturaMaterna, pesoMaterno, origen, paridad, sexo, ga, peso);
				
				$scope.zscorePatologicoAbs_Irlanda = Math.abs(irlanda.zscore);
				$scope.zscorePatologicoAbs_Irlanda_mod = Math.abs(irlanda.zscore_mod);

				$scope.resultado_Irlanda = "cte: " + irlanda.cte.toFixed(0) + " zscore:" + irlanda.zscore.toFixed(1) + ", percentil: " + irlanda.percentil.toFixed(0) + ", p10: " + irlanda.p10.toFixed(0) + ", p90: " + irlanda.p90.toFixed(0);				
				$scope.resultado_Irlanda_mod = "cte: " + irlanda.cteFinal.toFixed(0) + " zscore:" + irlanda.zscore_mod.toFixed(1) + ", percentil: " + irlanda.percentil_mod.toFixed(0) + ", p10: " + irlanda.p10_mod.toFixed(0) + ", p90: " + irlanda.p90_mod.toFixed(0);	
		
				$scope.type_Irlanda= irlanda.type;
				$scope.type_Irlanda_mod= irlanda.type_mod;
				
				
		
				
				var reinounido = new TOWreinounido(alturaMaterna, pesoMaterno, origen, paridad, sexo, ga, peso);
				
				$scope.zscorePatologicoAbs_Reino_Unido = Math.abs(reinounido.zscore);
				$scope.zscorePatologicoAbs_Reino_Unido_mod = Math.abs(reinounido.zscore_mod);

				$scope.resultado_Reino_Unido = "cte: " + reinounido.cte.toFixed(0) + " zscore:" + reinounido.zscore.toFixed(1) + ", percentil: " + reinounido.percentil.toFixed(0) + ", p10: " + reinounido.p10.toFixed(0) + ", p90: " + reinounido.p90.toFixed(0);				
				$scope.resultado_Reino_Unido_mod = "cte: " + reinounido.cteFinal.toFixed(0) + " zscore:" + reinounido.zscore_mod.toFixed(1) + ", percentil: " + reinounido.percentil_mod.toFixed(0) + ", p10: " + reinounido.p10_mod.toFixed(0) + ", p90: " + reinounido.p90_mod.toFixed(0);	
		
				$scope.type_Reino_Unido= reinounido.type;
				$scope.type_Reino_Unido_mod= reinounido.type_mod;
		
		
		
		
		
		
			}else $scope.resultado_Espana = "";
	}
}


$scope.set_cardiaco2 = function(){
	$scope.set_aortic_valve();
	$scope.set_pulmonary_valve();
	$scope.set_ascending_aorta();
	$scope.set_main_pulmonary_artery();
	$scope.set_tricuspid_valve();
	$scope.set_mitral_valve();
	$scope.set_right_ventricle_end_diastolic_dimension();
	$scope.set_right_ventricle_inlet();
	$scope.set_right_ventricle_area();
	$scope.set_left_ventricle_end_diastolic_dimension();
	$scope.set_left_ventricle_inlet();
	$scope.set_left_ventricle_area();
	$scope.set_descending_aorta();
	$scope.set_inferior_vena_cava();
	$scope.set_right_pulmonary_artery();
	$scope.set_left_pulmonary_artery();
	$scope.set_arterial_duct();
	$scope.set_three_vessel_isthmus();
	$scope.set_sagittal_isthmus();
	$scope.set_three_vessel_duct();
	
}

$scope.set_aortic_valve = function(){
	if (!angular.isUndefined($scope.aortic_valve)){
		var biometria = new AorticValveGA($scope.aortic_valve, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_aortic_valve_GA = type;
		$scope.zscoreAbs_aortic_valve_GA = Math.abs(biometria.zscore);
		$scope.zscore_aortic_valve_GA = biometria.zscore;
		$scope.percentil_aortic_valve_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new AorticValveBPD($scope.aortic_valve, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_aortic_valve_BPD = type;
			$scope.zscoreAbs_aortic_valve_BPD = Math.abs(biometria.zscore);
			$scope.zscore_aortic_valve_BPD = biometria.zscore;
			$scope.percentil_aortic_valve_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new AorticValveFL($scope.aortic_valve, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_aortic_valve_FL = type;
			$scope.zscoreAbs_aortic_valve_FL = Math.abs(biometria.zscore);
			$scope.zscore_aortic_valve_FL = biometria.zscore;
			$scope.percentil_aortic_valve_FL = biometria.percentil.toFixed(0);
		}

		
	}
}


$scope.set_pulmonary_valve = function(){
	if (!angular.isUndefined($scope.pulmonary_valve)){
		var biometria = new PulmonaryValveGA($scope.pulmonary_valve, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_pulmonary_valve_GA = type;
		$scope.zscoreAbs_pulmonary_valve_GA = Math.abs(biometria.zscore);
		$scope.zscore_pulmonary_valve_GA = biometria.zscore;
		$scope.percentil_pulmonary_valve_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new PulmonaryValveBPD($scope.pulmonary_valve, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_pulmonary_valve_BPD = type;
			$scope.zscoreAbs_pulmonary_valve_BPD = Math.abs(biometria.zscore);
			$scope.zscore_pulmonary_valve_BPD = biometria.zscore;
			$scope.percentil_pulmonary_valve_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new PulmonaryValveFL($scope.pulmonary_valve, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_pulmonary_valve_FL = type;
			$scope.zscoreAbs_pulmonary_valve_FL = Math.abs(biometria.zscore);
			$scope.zscore_pulmonary_valve_FL = biometria.zscore;
			$scope.percentil_pulmonary_valve_FL = biometria.percentil.toFixed(0);
		}

		
	}
}



$scope.set_ascending_aorta = function(){
	if (!angular.isUndefined($scope.ascending_aorta)){
		var biometria = new AscendingAortaGA($scope.ascending_aorta, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_ascending_aorta_GA = type;
		$scope.zscoreAbs_ascending_aorta_GA = Math.abs(biometria.zscore);
		$scope.zscore_ascending_aorta_GA = biometria.zscore;
		$scope.percentil_ascending_aorta_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new AscendingAortaBPD($scope.ascending_aorta, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_ascending_aorta_BPD = type;
			$scope.zscoreAbs_ascending_aorta_BPD = Math.abs(biometria.zscore);
			$scope.zscore_ascending_aorta_BPD = biometria.zscore;
			$scope.percentil_ascending_aorta_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new AscendingAortaFL($scope.ascending_aorta, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_ascending_aorta_FL = type;
			$scope.zscoreAbs_ascending_aorta_FL = Math.abs(biometria.zscore);
			$scope.zscore_ascending_aorta_FL = biometria.zscore;
			$scope.percentil_ascending_aorta_FL = biometria.percentil.toFixed(0);
		}

		
	}
}


$scope.set_main_pulmonary_artery = function(){
	if (!angular.isUndefined($scope.main_pulmonary_artery)){
		var biometria = new MainPulmonaryArteryGA($scope.main_pulmonary_artery, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_main_pulmonary_artery_GA = type;
		$scope.zscoreAbs_main_pulmonary_artery_GA = Math.abs(biometria.zscore);
		$scope.zscore_main_pulmonary_artery_GA = biometria.zscore;
		$scope.percentil_main_pulmonary_artery_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new MainPulmonaryArteryBPD($scope.main_pulmonary_artery, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_main_pulmonary_artery_BPD = type;
			$scope.zscoreAbs_main_pulmonary_artery_BPD = Math.abs(biometria.zscore);
			$scope.zscore_main_pulmonary_artery_BPD = biometria.zscore;
			$scope.percentil_main_pulmonary_artery_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new MainPulmonaryArteryFL($scope.main_pulmonary_artery, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_main_pulmonary_artery_FL = type;
			$scope.zscoreAbs_main_pulmonary_artery_FL = Math.abs(biometria.zscore);
			$scope.zscore_main_pulmonary_artery_FL = biometria.zscore;
			$scope.percentil_main_pulmonary_artery_FL = biometria.percentil.toFixed(0);
		}

		
	}
}


$scope.set_tricuspid_valve = function(){
	if (!angular.isUndefined($scope.tricuspid_valve)){
		var biometria = new TricuspidValveGA($scope.tricuspid_valve, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_tricuspid_valve_GA = type;
		$scope.zscoreAbs_tricuspid_valve_GA = Math.abs(biometria.zscore);
		$scope.zscore_tricuspid_valve_GA = biometria.zscore;
		$scope.percentil_tricuspid_valve_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new TricuspidValveBPD($scope.tricuspid_valve, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_tricuspid_valve_BPD = type;
			$scope.zscoreAbs_tricuspid_valve_BPD = Math.abs(biometria.zscore);
			$scope.zscore_tricuspid_valve_BPD = biometria.zscore;
			$scope.percentil_tricuspid_valve_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new TricuspidValveFL($scope.tricuspid_valve, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_tricuspid_valve_FL = type;
			$scope.zscoreAbs_tricuspid_valve_FL = Math.abs(biometria.zscore);
			$scope.zscore_tricuspid_valve_FL = biometria.zscore;
			$scope.percentil_tricuspid_valve_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_mitral_valve = function(){
	if (!angular.isUndefined($scope.mitral_valve)){
		var biometria = new MitralValveGA($scope.mitral_valve, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_mitral_valve_GA = type;
		$scope.zscoreAbs_mitral_valve_GA = Math.abs(biometria.zscore);
		$scope.zscore_mitral_valve_GA = biometria.zscore;
		$scope.percentil_mitral_valve_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new MitralValveBPD($scope.mitral_valve, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_mitral_valve_BPD = type;
			$scope.zscoreAbs_mitral_valve_BPD = Math.abs(biometria.zscore);
			$scope.zscore_mitral_valve_BPD = biometria.zscore;
			$scope.percentil_mitral_valve_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new MitralValveFL($scope.mitral_valve, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_mitral_valve_FL = type;
			$scope.zscoreAbs_mitral_valve_FL = Math.abs(biometria.zscore);
			$scope.zscore_mitral_valve_FL = biometria.zscore;
			$scope.percentil_mitral_valve_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_right_ventricle_end_diastolic_dimension = function(){
	if (!angular.isUndefined($scope.right_ventricle_end_diastolic_dimension)){
		var biometria = new RightVentricleEndDiastolicDimensionGA($scope.right_ventricle_end_diastolic_dimension, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_right_ventricle_end_diastolic_dimension_GA = type;
		$scope.zscoreAbs_right_ventricle_end_diastolic_dimension_GA = Math.abs(biometria.zscore);
		$scope.zscore_right_ventricle_end_diastolic_dimension_GA = biometria.zscore;
		$scope.percentil_right_ventricle_end_diastolic_dimension_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new RightVentricleEndDiastolicDimensionBPD($scope.right_ventricle_end_diastolic_dimension, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_end_diastolic_dimension_BPD = type;
			$scope.zscoreAbs_right_ventricle_end_diastolic_dimension_BPD = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_end_diastolic_dimension_BPD = biometria.zscore;
			$scope.percentil_right_ventricle_end_diastolic_dimension_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new RightVentricleEndDiastolicDimensionFL($scope.right_ventricle_end_diastolic_dimension, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_end_diastolic_dimension_FL = type;
			$scope.zscoreAbs_right_ventricle_end_diastolic_dimension_FL = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_end_diastolic_dimension_FL = biometria.zscore;
			$scope.percentil_right_ventricle_end_diastolic_dimension_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_left_ventricle_end_diastolic_dimension = function(){
	if (!angular.isUndefined($scope.left_ventricle_end_diastolic_dimension)){
		var biometria = new LeftVentricleEndDiastolicDimensionGA($scope.left_ventricle_end_diastolic_dimension, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_left_ventricle_end_diastolic_dimension_GA = type;
		$scope.zscoreAbs_left_ventricle_end_diastolic_dimension_GA = Math.abs(biometria.zscore);
		$scope.zscore_left_ventricle_end_diastolic_dimension_GA = biometria.zscore;
		$scope.percentil_left_ventricle_end_diastolic_dimension_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new LeftVentricleEndDiastolicDimensionBPD($scope.left_ventricle_end_diastolic_dimension, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_end_diastolic_dimension_BPD = type;
			$scope.zscoreAbs_left_ventricle_end_diastolic_dimension_BPD = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_end_diastolic_dimension_BPD = biometria.zscore;
			$scope.percentil_left_ventricle_end_diastolic_dimension_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new LeftVentricleEndDiastolicDimensionFL($scope.left_ventricle_end_diastolic_dimension, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_end_diastolic_dimension_FL = type;
			$scope.zscoreAbs_left_ventricle_end_diastolic_dimension_FL = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_end_diastolic_dimension_FL = biometria.zscore;
			$scope.percentil_left_ventricle_end_diastolic_dimension_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_right_ventricle_inlet = function(){
	if (!angular.isUndefined($scope.right_ventricle_inlet)){
		var biometria = new RightVentricleInletGA($scope.right_ventricle_inlet, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_right_ventricle_inlet_GA = type;
		$scope.zscoreAbs_right_ventricle_inlet_GA = Math.abs(biometria.zscore);
		$scope.zscore_right_ventricle_inlet_GA = biometria.zscore;
		$scope.percentil_right_ventricle_inlet_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new RightVentricleInletBPD($scope.right_ventricle_inlet, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_inlet_BPD = type;
			$scope.zscoreAbs_right_ventricle_inlet_BPD = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_inlet_BPD = biometria.zscore;
			$scope.percentil_right_ventricle_inlet_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new RightVentricleInletFL($scope.right_ventricle_inlet, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_inlet_FL = type;
			$scope.zscoreAbs_right_ventricle_inlet_FL = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_inlet_FL = biometria.zscore;
			$scope.percentil_right_ventricle_inlet_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_left_ventricle_inlet = function(){
	if (!angular.isUndefined($scope.left_ventricle_inlet)){
		var biometria = new LeftVentricleInletGA($scope.left_ventricle_inlet, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_left_ventricle_inlet_GA = type;
		$scope.zscoreAbs_left_ventricle_inlet_GA = Math.abs(biometria.zscore);
		$scope.zscore_left_ventricle_inlet_GA = biometria.zscore;
		$scope.percentil_left_ventricle_inlet_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new LeftVentricleInletBPD($scope.left_ventricle_inlet, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_inlet_BPD = type;
			$scope.zscoreAbs_left_ventricle_inlet_BPD = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_inlet_BPD = biometria.zscore;
			$scope.percentil_left_ventricle_inlet_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new LeftVentricleInletFL($scope.left_ventricle_inlet, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_inlet_FL = type;
			$scope.zscoreAbs_left_ventricle_inlet_FL = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_inlet_FL = biometria.zscore;
			$scope.percentil_left_ventricle_inlet_FL = biometria.percentil.toFixed(0);
		}		
	}
}


$scope.set_right_ventricle_area = function(){
	if (!angular.isUndefined($scope.right_ventricle_area)){
		var biometria = new RightVentricleAreaGA($scope.right_ventricle_area, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_right_ventricle_area_GA = type;
		$scope.zscoreAbs_right_ventricle_area_GA = Math.abs(biometria.zscore);
		$scope.zscore_right_ventricle_area_GA = biometria.zscore;
		$scope.percentil_right_ventricle_area_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new RightVentricleAreaBPD($scope.right_ventricle_area, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_area_BPD = type;
			$scope.zscoreAbs_right_ventricle_area_BPD = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_area_BPD = biometria.zscore;
			$scope.percentil_right_ventricle_area_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new RightVentricleAreaFL($scope.right_ventricle_area, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_ventricle_area_FL = type;
			$scope.zscoreAbs_right_ventricle_area_FL = Math.abs(biometria.zscore);
			$scope.zscore_right_ventricle_area_FL = biometria.zscore;
			$scope.percentil_right_ventricle_area_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_left_ventricle_area = function(){
	if (!angular.isUndefined($scope.left_ventricle_area)){
		var biometria = new LeftVentricleAreaGA($scope.left_ventricle_area, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_left_ventricle_area_GA = type;
		$scope.zscoreAbs_left_ventricle_area_GA = Math.abs(biometria.zscore);
		$scope.zscore_left_ventricle_area_GA = biometria.zscore;
		$scope.percentil_left_ventricle_area_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new LeftVentricleAreaBPD($scope.left_ventricle_area, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_area_BPD = type;
			$scope.zscoreAbs_left_ventricle_area_BPD = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_area_BPD = biometria.zscore;
			$scope.percentil_left_ventricle_area_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new LeftVentricleAreaFL($scope.left_ventricle_area, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_ventricle_area_FL = type;
			$scope.zscoreAbs_left_ventricle_area_FL = Math.abs(biometria.zscore);
			$scope.zscore_left_ventricle_area_FL = biometria.zscore;
			$scope.percentil_left_ventricle_area_FL = biometria.percentil.toFixed(0);
		}		
	}
}


$scope.set_descending_aorta = function(){
	if (!angular.isUndefined($scope.descending_aorta)){
		var biometria = new DescendingAortaGA($scope.descending_aorta, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_descending_aorta_GA = type;
		$scope.zscoreAbs_descending_aorta_GA = Math.abs(biometria.zscore);
		$scope.zscore_descending_aorta_GA = biometria.zscore;
		$scope.percentil_descending_aorta_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new DescendingAortaBPD($scope.descending_aorta, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_descending_aorta_BPD = type;
			$scope.zscoreAbs_descending_aorta_BPD = Math.abs(biometria.zscore);
			$scope.zscore_descending_aorta_BPD = biometria.zscore;
			$scope.percentil_descending_aorta_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new DescendingAortaFL($scope.descending_aorta, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_descending_aorta_FL = type;
			$scope.zscoreAbs_descending_aorta_FL = Math.abs(biometria.zscore);
			$scope.zscore_descending_aorta_FL = biometria.zscore;
			$scope.percentil_descending_aorta_FL = biometria.percentil.toFixed(0);
		}		
	}
}


$scope.set_inferior_vena_cava = function(){
	if (!angular.isUndefined($scope.inferior_vena_cava)){
		var biometria = new InferiorVenaCavaGA($scope.inferior_vena_cava, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_inferior_vena_cava_GA = type;
		$scope.zscoreAbs_inferior_vena_cava_GA = Math.abs(biometria.zscore);
		$scope.zscore_inferior_vena_cava_GA = biometria.zscore;
		$scope.percentil_inferior_vena_cava_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new InferiorVenaCavaBPD($scope.inferior_vena_cava, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_inferior_vena_cava_BPD = type;
			$scope.zscoreAbs_inferior_vena_cava_BPD = Math.abs(biometria.zscore);
			$scope.zscore_inferior_vena_cava_BPD = biometria.zscore;
			$scope.percentil_inferior_vena_cava_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new InferiorVenaCavaFL($scope.inferior_vena_cava, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_inferior_vena_cava_FL = type;
			$scope.zscoreAbs_inferior_vena_cava_FL = Math.abs(biometria.zscore);
			$scope.zscore_inferior_vena_cava_FL = biometria.zscore;
			$scope.percentil_inferior_vena_cava_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_right_pulmonary_artery = function(){
	if (!angular.isUndefined($scope.right_pulmonary_artery)){
		var biometria = new RightPulmonaryArteryGA($scope.right_pulmonary_artery, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_right_pulmonary_artery_GA = type;
		$scope.zscoreAbs_right_pulmonary_artery_GA = Math.abs(biometria.zscore);
		$scope.zscore_right_pulmonary_artery_GA = biometria.zscore;
		$scope.percentil_right_pulmonary_artery_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new RightPulmonaryArteryBPD($scope.right_pulmonary_artery, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_pulmonary_artery_BPD = type;
			$scope.zscoreAbs_right_pulmonary_artery_BPD = Math.abs(biometria.zscore);
			$scope.zscore_right_pulmonary_artery_BPD = biometria.zscore;
			$scope.percentil_right_pulmonary_artery_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new RightPulmonaryArteryFL($scope.right_pulmonary_artery, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_right_pulmonary_artery_FL = type;
			$scope.zscoreAbs_right_pulmonary_artery_FL = Math.abs(biometria.zscore);
			$scope.zscore_right_pulmonary_artery_FL = biometria.zscore;
			$scope.percentil_right_pulmonary_artery_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_left_pulmonary_artery = function(){
	if (!angular.isUndefined($scope.left_pulmonary_artery)){
		var biometria = new LeftPulmonaryArteryGA($scope.left_pulmonary_artery, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_left_pulmonary_artery_GA = type;
		$scope.zscoreAbs_left_pulmonary_artery_GA = Math.abs(biometria.zscore);
		$scope.zscore_left_pulmonary_artery_GA = biometria.zscore;
		$scope.percentil_left_pulmonary_artery_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new LeftPulmonaryArteryBPD($scope.left_pulmonary_artery, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_pulmonary_artery_BPD = type;
			$scope.zscoreAbs_left_pulmonary_artery_BPD = Math.abs(biometria.zscore);
			$scope.zscore_left_pulmonary_artery_BPD = biometria.zscore;
			$scope.percentil_left_pulmonary_artery_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new LeftPulmonaryArteryFL($scope.left_pulmonary_artery, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_left_pulmonary_artery_FL = type;
			$scope.zscoreAbs_left_pulmonary_artery_FL = Math.abs(biometria.zscore);
			$scope.zscore_left_pulmonary_artery_FL = biometria.zscore;
			$scope.percentil_left_pulmonary_artery_FL = biometria.percentil.toFixed(0);
		}		
	}
}



$scope.set_arterial_duct = function(){
	if (!angular.isUndefined($scope.arterial_duct)){
		var biometria = new ArterialDuctGA($scope.arterial_duct, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_arterial_duct_GA = type;
		$scope.zscoreAbs_arterial_duct_GA = Math.abs(biometria.zscore);
		$scope.zscore_arterial_duct_GA = biometria.zscore;
		$scope.percentil_arterial_duct_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.bpd)){
			var biometria = new ArterialDuctBPD($scope.arterial_duct, $scope.bpd);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_arterial_duct_BPD = type;
			$scope.zscoreAbs_arterial_duct_BPD = Math.abs(biometria.zscore);
			$scope.zscore_arterial_duct_BPD = biometria.zscore;
			$scope.percentil_arterial_duct_BPD = biometria.percentil.toFixed(0);
		}
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new ArterialDuctFL($scope.arterial_duct, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_arterial_duct_FL = type;
			$scope.zscoreAbs_arterial_duct_FL = Math.abs(biometria.zscore);
			$scope.zscore_arterial_duct_FL = biometria.zscore;
			$scope.percentil_arterial_duct_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_three_vessel_isthmus = function(){
	if (!angular.isUndefined($scope.three_vessel_isthmus)){
		var biometria = new ThreeVesselIsthmusGA($scope.three_vessel_isthmus, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_three_vessel_isthmus_GA = type;
		$scope.zscoreAbs_three_vessel_isthmus_GA = Math.abs(biometria.zscore);
		$scope.zscore_three_vessel_isthmus_GA = biometria.zscore;
		$scope.percentil_three_vessel_isthmus_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new ThreeVesselIsthmusFL($scope.three_vessel_isthmus, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_three_vessel_isthmus_FL = type;
			$scope.zscoreAbs_three_vessel_isthmus_FL = Math.abs(biometria.zscore);
			$scope.zscore_three_vessel_isthmus_FL = biometria.zscore;
			$scope.percentil_three_vessel_isthmus_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_sagittal_isthmus = function(){
	if (!angular.isUndefined($scope.sagittal_isthmus)){
		var biometria = new SagittalIsthmusGA($scope.sagittal_isthmus, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_sagittal_isthmus_GA = type;
		$scope.zscoreAbs_sagittal_isthmus_GA = Math.abs(biometria.zscore);
		$scope.zscore_sagittal_isthmus_GA = biometria.zscore;
		$scope.percentil_sagittal_isthmus_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new SagittalIsthmusFL($scope.sagittal_isthmus, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_sagittal_isthmus_FL = type;
			$scope.zscoreAbs_sagittal_isthmus_FL = Math.abs(biometria.zscore);
			$scope.zscore_sagittal_isthmus_FL = biometria.zscore;
			$scope.percentil_sagittal_isthmus_FL = biometria.percentil.toFixed(0);
		}		
	}
}

$scope.set_three_vessel_duct = function(){
	if (!angular.isUndefined($scope.three_vessel_duct)){
		var biometria = new ThreeVesselDuctGA($scope.three_vessel_duct, $scope.ga);
		var type;
		if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
			type = 'danger';
			} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
			type = 'warning';
			} else {
			type = 'success';
		}
		$scope.type_three_vessel_duct_GA = type;
		$scope.zscoreAbs_three_vessel_duct_GA = Math.abs(biometria.zscore);
		$scope.zscore_three_vessel_duct_GA = biometria.zscore;
		$scope.percentil_three_vessel_duct_GA = biometria.percentil.toFixed(0);
		
		if (!angular.isUndefined($scope.fl)){
			var biometria = new ThreeVesselDuctFL($scope.three_vessel_duct, $scope.fl);
			var type;
			if ((biometria.percentil <= 5) || (biometria.percentil >= 95)) {
				type = 'danger';
				} else if ((biometria.percentil <= 10) || (biometria.percentil >= 90)) {
				type = 'warning';
				} else {
				type = 'success';
				}
			$scope.type_three_vessel_duct_FL = type;
			$scope.zscoreAbs_three_vessel_duct_FL = Math.abs(biometria.zscore);
			$scope.zscore_three_vessel_duct_FL = biometria.zscore;
			$scope.percentil_three_vessel_duct_FL = biometria.percentil.toFixed(0);
		}		
	}
}


}); // FIN




