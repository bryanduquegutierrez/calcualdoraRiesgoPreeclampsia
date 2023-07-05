
function getZPercent(z) {
	//z == number of standard deviations from the mean

	//if z is greater than 6.5 standard deviations from the mean
	//the number of significant digits will be outside of a reasonable
	//range
	if (z < -3.5)
		return 0;
	if (z > 3.5)
		return 100;

	var factK = 1;
	var sum = 0;
	var term = 1;
	var k = 0;
	var loopStop = Math.exp(-23);
	while (Math.abs(term) > loopStop) {
		term = .3989422804 * Math.pow(-1, k) * Math.pow(z, k) / (2 * k + 1) / Math.pow(2, k) * Math.pow(z, k + 1) / factK;
		sum += term;
		k++;
		factK *= k;

	}
	sum += 0.5;

	return sum * 100;
}

function getProgressbarType(percentil){
	if ((percentil <= 5) || (percentil >= 95)) {
      return "danger";
    } else if ((percentil <= 10) || (percentil >= 90)) {
      return "warning";
    } else {
      return "success";
    }
}

function nt_mom(nt, crl){
	var mean = -0.8951 + (0.02940 * crl) - (0.0001812 * crl*crl);
	var median = Math.pow(10, mean);
	var mom = nt / median;
	return mom;
}





function hc_mean(ga) {
	var mean = -28.2849 + 1.69267 * ga * ga - 0.397485 * ga * ga * Math.log(ga);
	return mean;
}

function hc_sd(ga) {
	var sd = 1.98735 + 0.0136772 * ga * ga * ga - 0.00726264 * ga * ga * ga * Math.log(ga) + 0.000976253 * ga * ga * ga * Math.pow((Math.log(ga)), 2);
	return sd;
}

function bpd_mean(ga) {
	var mean = 5.60878 + 0.158369 * ga * ga - 0.00256379 * ga * ga * ga;
	return mean;
}

function bpd_sd(ga) {
	var sd = Math.exp(0.101242 + 0.00150557 * (ga * ga * ga) - 0.000771535 * (ga * ga * ga) * Math.log(ga) + 0.0000999638 * (ga * ga * ga) * (Math.log(ga) * Math.log(ga)));
	return sd;
}

function ac_mean(ga) {
	var mean = -81.3243 + 11.6772 * ga - 0.000561865 * ga * ga * ga;
	return mean;
}

function ac_sd(ga) {
	var sd = -4.36302 + 0.121445 * ga * ga - 0.0130256 * ga * ga * ga + 0.00282143 * ga * ga * ga * Math.log(ga);
	return sd;
}

function fl_mean(ga) {
	var mean = -39.9616 + 4.32298 * ga - 0.0380156 * ga * ga;
	return mean;
}

// function fl_sd(ga){
// var sd = Math.exp( 0.605843 - 42.0014 * Math.pow(ga, -2) + 0.00000917972 * ga*ga*ga );
// return sd;
// }


function fl_sd(ga) {
	var sd = Math.pow(Math.E, 0.605843 - 42.0014 * Math.pow(ga, -2) + 0.00000917972 * ga * ga * ga);
	return sd;
}

// function hc_sd(ga){
// var sd = 1.98735 + 0.136772 * ga*ga*ga - 0.00726264 * ga*ga*ga * (Math.log(ga)/Math.log(10)) + 0.000976253 * ga*ga*ga * Math.pow((Math.log(ga)/Math.log(10) ),2);
// return sd;
// }

// function ac_sd(ga){
// var sd = -4.36302 + 0.121445 * ga*ga - 0.0130256 * ga*ga*ga + 0.00282143 * ga*ga*ga * (Math.log(ga)/Math.log(10) );
// return sd;
// }


// function crl_mean(ga){
// var mean = -50.6562 + (0.815118 * ga) + (0.00535302 * ga*ga);
// return mean;
// }

// function crl_sd(ga){
// var sd = -2.21626 + (0.0984894 * ga);
// return sd;
// }

function crl_mean(ga) {
	ga = ga * 7;
	var mean = -50.6562 + (0.815118 * ga) + (0.00535302 * ga * ga);
	return mean;
}

function crl_sd(ga) {
	ga = ga * 7;
	var sd = -2.21626 + (0.0984894 * ga);
	return sd;
}

function hum_mean(ga) {
	var mean = 11.459 * ga - 2.2362 * ga * Math.log(ga) - 63.704;
	return mean;
}

function hum_sd(ga) {
	var sd = 0.040292 * ga + 1.3464;
	return sd;
}

function cub_mean(ga) {
	var mean = (11120 / (ga * ga)) - (2146.3 / ga) + 108.94;
	return mean;
}

function cub_sd(ga) {
	var sd = 0.049218 * ga + 1.2021;
	return sd;
}

function rad_mean(ga) {
	var mean = (7983 / (ga * ga)) - (1698.6 / ga) + 91.634;
	return mean;
}

function rad_sd(ga) {
	var sd = 0.046386 * ga + 1.1933;
	return sd;
}

function fem_mean(ga) {
	var mean = 3.4162 * ga - 0.0004791 * ga * ga * ga - 32.425;
	return mean;
}

function fem_sd(ga) {
	var sd = 0.058328 * ga + 1.0605;
	return sd;
}

//	 (((14451 / (Number(ga_txt) * Number(ga_txt))) - (2553.2 / Number(ga_txt))) + 120.05))) / ((0.049978 * Number(ga_txt)) + 1.1102));

function tib_mean(ga) {
	var mean = (14451 / (ga * ga)) - (2553.2 / ga) + 120.05;
	return mean;
}

function tib_sd(ga) {
	var sd = 0.049978 * ga + 1.1102;
	return sd;
}

function per_mean(ga) {
	var mean = (13697 / (ga * ga)) - (2458.0 / ga) + 116.51;
	return mean;
}

function per_sd(ga) {
	var sd = 0.053841 * ga + 1.0451;
	return sd;
}

function pie_mean(ga) {
	var mean = 0.36909 * ga * ga - 0.084175 * ga * ga * Math.log(ga) - 14.158;
	return mean;
}

function pie_sd(ga) {
	var sd = 0.10865 * ga + 0.27971;
	return sd;
}

function uapi_mean(ga) {
	var mean = (3.55219 - (0.13558 * ga)) + (0.00174 * ga * ga);
	return mean;
}

function uapi_sd(ga) {
	var sd = 0.299;
	return sd;
}

function mcapi_mean(ga) {
	var mean = -2.7317 + (0.3335 * ga) - (0.0058 * ga * ga);
	return mean;
}

function mcapi_sd(ga) {
	var sd = -0.88005 + (0.08182 * ga) - (0.00133 * ga * ga);
	return sd;
}

function cpr_mean(ga) {
	var mean = -4.0636 + (0.383 * ga) - (0.0059 * ga * ga);
	return mean;
}

function cpr_sd(ga) {
	var sd = -0.9664 + (0.09027 * ga) - (0.0014 * ga * ga);
	return sd;
}

function avpi_mean(ga) {
	var mean = 1.39 - (0.012 * ga) + (0.0000198 * ga * ga);
	return mean;
}

function avpi_sd(ga) {
	var sd = 0.272 - (0.000259 * ga);
	return sd;
}

function vdpi_mean(ga) {
	var mean = 0.903 + (-0.0116 * ga);
	return mean;
}

function vdpi_sd(ga) {
	var sd = 0.1483;
	return sd;
}

function aipi_mean(ga) {
	var mean = 2.2562 + (0.0154 * ga);
	return mean;
}

function aipi_sd(ga) {
	var sd = 0.014199 + (0.011635 * ga);
	return sd;
}






//////////////////////////////////////////////// PESOS ///////////////////////////////////////////////////////////////////


function Hadlock_ac_fl(ac, fl) {
	var efw = Math.pow(10, 1.304 + (0.05281 * ac / 10) + (0.1938 * fl / 10) - (0.004 * ac / 10 * fl / 10) );
	return efw;
}

function Woo_ac_fl(ac, fl) {
	var efw = Math.pow(10, 0.59 + (0.008 * ac / 10) + (0.28 * fl / 10) - (0.00716 * ac / 10 * fl / 10) );
	return efw;
}

function Warsof_ac_fl(ac, fl) {
	var efw = Math.pow(Math.E, 2.792 + (0.108 * fl / Math.E) + (0.0036 * ac / Math.E * ac / Math.E) - (0.0027 * fl / Math.E * ac / Math.E) );
	return efw;
}

function Warsof_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, -1.599 + (0.144 * bpd / 10) + (0.032 * ac / 10) - (0.000111 * bpd / 10 * bpd / 10 * ac / 10) );
	return efw*1000;
}

function Shepard_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, -1.7492 + (0.166 * bpd / 10) + (0.046 * ac / 10) - (0.002546 * ac / 10 * bpd / 10) );
	return efw*1000;
}

function Jordaan_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, -1.1683 + (0.0377 * ac / 10) + (0.0950 * bpd / 10) - (0.0015 * bpd / 10 * ac / 10) );
	return efw*1000;
}

function Hadlock_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, 1.1134 + (0.05845 * ac / 10) - (0.000604 * ac / 10 * ac / 10) - (0.007365 * bpd / 10 * bpd / 10) + (0.000595 * bpd / 10 * ac / 10) + (0.1694 * bpd / 10) );
	return efw;
}

function Woo_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, 1.63 + (0.16 * bpd/10) + (0.00111 * ac / 10 * ac / 10) - (0.0000859 * bpd / 10 * ac / 10 * ac / 10) );
	return efw;
}

function Vintzileos_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, 1.879 + (0.084 *bpd/10) + (0.026*ac/10) );
	return efw;
}

function Hsieh_ac_bpd(ac, bpd) {
	var efw = Math.pow(10, 2.1315 + (0.0056541 * ac/10 * bpd/10) - (0.00015515*bpd/10*ac/10*ac/10) + (0.000019782*ac/10*ac/10*ac/10) + (0.052594*bpd/10) );
	return efw;
}

function Jordaan_ac_hc(ac, hc) {
	var efw = Math.pow(10, 0.9119 + (0.0488*hc/10) + (0.0824*ac/10) - (0.001599*hc/10*ac/10) );
	return efw;
}

function Hadlock_ac_hc(ac, hc) {
	var efw = Math.pow(10,  1.182 + (0.0273*hc/10) + (0.07057*ac/10) - (0.00063*ac/10*ac/10) -(0.0002184*hc/10*ac/10) );
	return efw;
}

function Hadlock_ac_bpd_fl(ac, bpd, fl) {
	var efw = Math.pow(10, 1.335 + (0.0316*bpd/10) + (0.0457*ac/10) + (0.1623*fl/10) );
	return efw;
}

function Woo_ac_bpd_fl(ac, bpd, fl) {
	var efw = Math.pow(10, 1.54 + (0.15*bpd/10) + (0.00111*ac/10*ac/10) - (0.0000764*bpd/10*ac/10*ac/10) + (0.05*fl/10) - (0.000992*fl/10*ac/10) );
	return efw;
}

function Shinozuka_ac_bpd_fl(ac, bpd, fl) {
	var efw = 0.23966*ac*ac*fl + 1.6230*bpd*bpd*bpd;
	return efw/1000;
}

function Hsieh_ac_bpd_fl(ac, bpd, fl) {
	var efw = Math.pow(10,  2.7193 +(0.0094962*ac/10*bpd/10) - (0.1432*fl/10) - (0.00076742*ac/10*bpd/10*bpd/10) + (0.001745*fl/10*bpd/10*bpd/10) );
	return efw;
}

function Hadlock_ac_hc_fl(ac, hc, fl) {
	var efw = Math.pow(10, 1.326 - (0.00326*ac/10*fl/10) + (0.0107*hc/10) + (0.0438*ac/10) + (0.158*fl/10) );
	return efw;
}

function Ott_ac_hc_fl(ac, hc, fl) {
	var efw = Math.pow(10, -2.0661 + (0.04355 *hc/10) + (0.05394*ac/10) - (0.0008582*hc/10*ac/10) + (1.2594*(fl/10/ac/10)) );
	return efw;
}

function Combs_ac_hc_fl(ac, hc, fl) {
	var efw = 0.23718 * ac*ac*fl + 0.03312*hc*hc*hc;
	return efw/1000;
}

function Jordaan_ac_hc_bpd(ac, hc, bpd) {
	var efw = Math.pow(10, 2.3231 + (0.02904*ac/10) + (0.0079*hc/10) - (0.0058*bpd/10) );
	return efw;
}

function Hadlock_ac_hc_bpd_fl(ac, hc, bpd, fl) {
	var efw = Math.pow(10,  1.3596 + (0.0064*hc/10) + (0.0424*ac/10) + (0.174*fl/10) + (0.00061*bpd/10*ac/10) - (0.00386*ac/10*fl/10) );
	return efw;
}








function hadlock3(ac, fl, bpd) {
	var efw = Math.pow(10, 1.335 - (0.0034 * ac / 10 * fl / 10) + (0.0316 * bpd / 10) + (0.0457 * ac / 10) + (0.1623 * fl / 10));
	return efw;
}

function hadlock1_mean(ac, fl) {
	var efw = Math.pow(10, 1.304 + (0.05281 * ac / 10) + (0.1938 * fl / 10) - (0.004 * ac / 10 * fl / 10));
	return efw;
}

function hadlock1_sd(efw) {
	if (efw < 1500) {
		return 122.0;
	} else if ((efw >= 1500) && (efw < 2000)) {
		return 186.0;
	} else if ((efw >= 2000) && (efw < 2500)) {
		return 239.0;
	} else if ((efw >= 2500) && (efw < 3000)) {
		return 272.0;
	} else if ((efw >= 3000) && (efw < 3500)) {
		return 301.0;
	} else if ((efw >= 3500) && (efw < 4000)) {
		return 350.0;
	} else if (efw >= 4000) {
		return 399.0;
	}
}

function hadlock2_mean(ac, hc, fl) {
	var efw = Math.pow(10, 1.326 - (0.00326 * ac / 10 * fl / 10) + (0.0107 * hc / 10) + (0.0438 * ac / 10) + (0.158 * fl / 10));
	return efw;
}

function hadlock2_sd(efw) {
	if (efw < 1500) {
		return 109.0;
	} else if ((efw >= 1500) && (efw < 2000)) {
		return 173.0;
	} else if ((efw >= 2000) && (efw < 2500)) {
		return 221.0;
	} else if ((efw >= 2500) && (efw < 3000)) {
		return 258.0;
	} else if ((efw >= 3000) && (efw < 3500)) {
		return 290.0;
	} else if ((efw >= 3500) && (efw < 4000)) {
		return 333.0;
	} else if (efw >= 4000) {
		return 382.0;
	}
}

function campbell_mean(ac) {
	var efw = Math.exp(((-4.564) + (0.282 * ac) - (0.00331 * Math.pow(ac, 2))));
	return efw;
}

function campbell_sd(efw) {
	if (efw < 1500) {
		return 181.0;
	} else if ((efw >= 1500) && (efw < 2000)) {
		return 242.0;
	} else if ((efw >= 2000) && (efw < 2500)) {
		return 282.0;
	} else if ((efw >= 2500) && (efw < 3000)) {
		return 317.0;
	} else if ((efw >= 3000) && (efw < 3500)) {
		return 316.0;
	} else if ((efw >= 3500) && (efw < 4000)) {
		return 325.0;
	} else if (efw >= 4000) {
		return 344.0;
	}
}

function shepard_mean(ac, bpd) {
	var efw = Math.pow(10, 1.2508 + (0.166 * bpd / 10) + (0.046 * ac / 10) - (0.002646 * ac / 10 * bpd / 10));
	return efw;
}

function shepard_sd(efw) {
	if (efw < 1500) {
		return 207.0;
	} else if ((efw >= 1500) && (efw < 2000)) {
		return 559.0;
	} else if ((efw >= 2000) && (efw < 2500)) {
		return 642.0;
	} else if ((efw >= 2500) && (efw < 3000)) {
		return 322.0;
	} else if ((efw >= 3000) && (efw < 3500)) {
		return 317.0;
	} else if ((efw >= 3500) && (efw < 4000)) {
		return 365.0;
	} else if (efw >= 4000) {
		return 408.0;
	}
}

function merz_mean(ac, bpd) {
	var efw = (-3200.40479) - (157.07186 * ac) + (15.90391 * (Math.pow(bpd, 2)));
	return efw;
}

function merz_sd(efw) {
	if (efw < 1500) {
		return 270.0;
	} else if ((efw >= 1500) && (efw < 2000)) {
		return 204.0;
	} else if ((efw >= 2000) && (efw < 2500)) {
		return 335.0;
	} else if ((efw >= 2500) && (efw < 3000)) {
		return 322.0;
	} else if ((efw >= 3000) && (efw < 3500)) {
		return 293.0;
	} else if ((efw >= 3500) && (efw < 4000)) {
		return 310.0;
	} else if (efw >= 4000) {
		return 345.0;
	}
}

function EFW_Hadlock1(ac, fl) {
	this.ac = new AC(ac.dato, ac.edad);
	this.fl = new FL(fl.dato, fl.edad);
	this.efw = hadlock1_mean(this.ac.dato, this.fl.dato);
	this.ds = hadlock1_sd(this.efw);
	this.edadCorrespondiente = ((this.ac.edadCorrespondiente() + this.fl.edadCorrespondiente()) / 2);
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = Math.floor((this.edadCorrespondiente - this.edadCorrespondienteSemanas) * 7);
}

function EFW_Hadlock2(ac, hc, fl) {
	this.ac = new AC(ac.dato, ac.edad);
	this.hc = new HC(hc.dato, hc.edad);
	this.fl = new FL(fl.dato, fl.edad);
	this.efw = hadlock2_mean(this.ac.dato, this.hc.dato, this.fl.dato);
	this.ds = hadlock2_sd(this.efw);
	this.edadCorrespondiente = ((this.ac.edadCorrespondiente() + this.hc.edadCorrespondiente() + this.fl.edadCorrespondiente()) / 3);
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = Math.floor((this.edadCorrespondiente - this.edadCorrespondienteSemanas) * 7);
}

function EFW_Hadlock3(ac, fl, bpd) {
	this.ac = new AC(ac.dato, ac.edad);
	this.fl = new FL(fl.dato, fl.edad);
	this.bpd = new BPD(bpd.dato, bpd.edad);
	this.efw = hadlock3(this.ac.dato, this.fl.dato, this.bpd.dato);
	this.edadCorrespondiente = ((this.ac.edadCorrespondiente() + this.fl.edadCorrespondiente() + this.bpd.edadCorrespondiente()) / 3);
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = Math.floor((this.edadCorrespondiente - this.edadCorrespondienteSemanas) * 7);
}

function EFW_Campbell(ac) {
	this.ac = new AC(ac.dato, ac.edad);
	this.efw = campbell_mean(this.ac.dato);
	this.ds = campbell_sd(this.efw);
	this.edadCorrespondiente = (this.ac.edadCorrespondiente());
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = Math.floor((this.edadCorrespondiente - this.edadCorrespondienteSemanas) * 7);
}

function EFW_Shepard(ac, bpd) {
	this.ac = new AC(ac.dato, ac.edad);
	this.bpd = new BPD(bpd.dato, bpd.edad);
	this.efw = shepard_mean(this.ac.dato, this.bpd.dato);
	this.ds = shepard_sd(this.efw);
	this.edadCorrespondiente = ((this.ac.edadCorrespondiente() + this.bpd.edadCorrespondiente()) / 2);
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = Math.floor((this.edadCorrespondiente - this.edadCorrespondienteSemanas) * 7);
}

function EFW_Merz(ac, bpd) {
	this.ac = new AC(ac.dato, ac.edad);
	this.bpd = new BPD(bpd.dato, bpd.edad);
	this.efw = merz_mean(this.ac.dato, this.bpd.dato);
	this.ds = merz_sd(this.efw);
	this.edadCorrespondiente = ((this.ac.edadCorrespondiente() + this.bpd.edadCorrespondiente()) / 2);
	this.edadCorrespondienteSemanas = Math.floor(this.edadCorrespondiente);
	this.edadCorrespondienteDias = parseInt(Math.round(this.edadCorrespondiente) / 7);
}

function clinic_zs(peso, sexo, ga) {

	var pp_txt = 3431.640;

	if (sexo != "varon") {
		pp_txt = pp_txt + (-103.056);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = 2.991 - (ga * 0.3185) + (ga * ga * 0.01094) - (ga * ga * ga * 0.0001055);
	var pp10c_txt = 0.86 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return z_txt;
}



function hadlock_esperado(ga){
	return Math.exp(0.578 + (0.332 * ga) - (0.00354*ga*ga));
}

function Gregorio_zs(peso, ga, sexo){

	this.media = function () {
		if (sexo == "varon"){
			return 3440.23;
		} else if (sexo == "mujer"){
			return 3308.16;
		}else {
			return 3374.82;
		}			
	};
	this.de = function () {
		if (sexo == "varon"){
			return 394.7;
		} else if (sexo == "mujer"){
			return 381.5;
		}else {
			return 393.795;
		}
	};
	this.cv = (this.de())/(this.media());	
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.media()/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (peso - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
}

function Gregorio2_zs(peso, ga, sexo){

var pesoReferencia, zscore, sexflag = 0, eg, eg2, eg3, sex, constante, mse;

if (sexo == "varon"){
	sexflag = 1;
}
	
		eg = 0.00920217;
		eg2 = 0.00645354;
		eg3 = -0.00010245;
		sex = 0.03942451;
		constante = 3.9486685;
		mse = 0.12801644;
	
	
		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sexflag * sex);
	this.media_esperada = Math.exp(pesoReferencia);		
	this.zscore = ( Math.log(peso) - pesoReferencia ) / mse;
	
	
	this.percentil = getZPercent(this.zscore);
	
		this.p10 = gregorio_p10(sexo, ga);
		this.p90 = gregorio_p90(sexo, ga);
	

/*     $scope.showWarningReferenciaV2 = (type === 'danger' || type === 'warning');
	$scope.typeRefV2 = type;
	$scope.zscoreReferenciaAbsV2 = Math.abs(zscore);
	$scope.zscoreReferenciaV2 = zscore;
	$scope.percentilReferenciaV2 = percentil.toFixed(0);
	$scope.pesoReferenciaV2 = Math.exp(pesoReferencia);	 */
}

function Barcelona_zs(peso, ga, sexo){
	
	var zscore, percentil;
		
		this.zscore = clinic_zs(peso, sexo, ga);
		this.percentil = getZPercent(this.zscore);
		this.media_esperada = clinic_p50(peso, sexo, ga);
		this.p10 = clinic_p10(sexo, ga);
		this.p90 = clinic_p90(sexo, ga);

	
}

function Barcelona_zs_gemelos(peso, ga, sexo){
	
	var zscore, percentil;
		
		this.zscore = clinic_zs_gemelos(peso, sexo, ga);
		this.percentil = getZPercent(this.zscore);
		this.media_esperada = clinic_p50_gemelos(peso, sexo, ga);
		this.p10 = clinic_p10_gemelos(sexo, ga);
		this.p90 = clinic_p90_gemelos(sexo, ga);

	
}

function Talavera_zs(peso, ga, sexo){


	this.media = function () {
		if (sexo == "varon"){
			return 3480.33;
		} else if (sexo == "mujer"){
			return 3326.044;
		}			
	};
	this.de = function () {
		if (sexo == "varon"){
			return 395.4;
		} else if (sexo == "mujer"){
			return 415.98;
		}
	};
	this.cv = (this.de())/(this.media());	
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.media()/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (peso - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
}

function Fuenlabrada_zs(peso, ga, sexo){
	this.peso = peso;
	this.ga = ga;
	this.sexo = sexo;
	this.media = function () {
		if (this.sexo == "varon"){
			return 3394.11;
		} else if (this.sexo == "mujer"){
			return 3271.64;
		}			
	};
	this.de = function () {
		if (this.sexo == "varon"){
			return 390.38;
		} else if (this.sexo == "mujer"){
			return 378.25;
		}
	};
	this.cv = (this.de())/(this.media());	
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.media()/this.esperado;
	this.media_esperada = hadlock_esperado(this.ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (this.peso - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
}

function Mancha_Centro_zs(peso, ga, sexo){
	this.peso = peso;
	this.ga = ga;
	this.sexo = sexo;
	this.media = function () {
		if (this.sexo == "varon"){
			return 3411.61;
		} else if (this.sexo == "mujer"){
			return 2365.1;
		}			
	};
	this.de = function () {
		if (this.sexo == "varon"){
			return 378.325;
		} else if (this.sexo == "mujer"){
			return 377.65;
		}
	};
	this.cv = (this.de())/(this.media());	
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.media()/this.esperado;
	this.media_esperada = hadlock_esperado(this.ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (this.peso - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
}


function gregorio_p50(sexo, ga) {
var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse;	
if (sexo == "varon"){
	sex = 1;
}

		eg = 0.00920217;
		eg2 = 0.00645354;
		eg3 = -0.00010245;
		sexo = 0.03942451;
		constante = 3.9486685;
		mse = 0.12801644;

		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		pesoReferencia = Math.exp(pesoReferencia);

		
		return pesoReferencia;
		
}

function gregorio_edadCorrespondiente_unicos(peso, sexo) {
	var medida = peso;
	var media_anterior;
	media_anterior = gregorio_p50(sexo, 1);
	var media;
	var ga,
	i;
	for (i = 7; i < 308; i++) {
		media = gregorio_p50(sexo, (i/7.0));
		if (medida < media) {
			if ((medida - media_anterior) <= (medida - media)) {
				ga = (i - 1);
				return ga / 7.0;
			} else {
				ga = i;
				return ga / 7.0;
			}
		} else
			media_anterior = gregorio_p50(sexo, (i/7.0));
	}

}


function gregorio_p10(sexo, ga) {
var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse, p10;	
if (sexo == "varon"){
	sex = 1;
}

		eg = 0.00920217;
		eg2 = 0.00645354;
		eg3 = -0.00010245;
		sexo = 0.03942451;
		constante = 3.9486685;
		mse = 0.12801644;

		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		
		p10 = (-1.28 * mse) + pesoReferencia;
		
		p10 = Math.exp(p10);
		
		return p10;
		
}

function gregorio_p90(sexo, ga) {
// var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse, p90;	
// if (sexo == "varon"){
	// sex = 1;
// }

		// eg = 0.00920217;
		// eg2 = 0.00645354;
		// eg3 = -0.00010245;
		// sexo = 0.03942451;
		// constante = 3.9486685;
		// mse = 0.12801644;

		// pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		
		// p90 = (1.28 * mse) + pesoReferencia;
		
		// p90 = Math.exp(p90);
		
		// return p90;

return (gregorio_p50(sexo, ga) + (gregorio_p50(sexo, ga) - gregorio_p10(sexo, ga)));
		
}


function clinic_p50(peso, sexo, ga) {

	var pp_txt = 3431.640;

	if (sexo != "varon") {
		pp_txt += (-103.056);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = 2.991 - (ga * 0.3185) + (ga * ga * 0.01094) - (ga * ga * ga * 0.0001055);
	var pp10c_txt = 0.86 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return p50c_txt;
}

function clinic_p10(peso, sexo, ga) {

	var pp_txt = 3431.640;

	if (sexo != "varon") {
		pp_txt += (-103.056);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = 2.991 - (ga * 0.3185) + (ga * ga * 0.01094) - (ga * ga * ga * 0.0001055);
	var pp10c_txt = 0.86 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return p10c_txt;
}

function clinic_p90(peso, sexo, ga) {
return (clinic_p50(peso, sexo, ga) + (clinic_p50(peso, sexo, ga) - clinic_p10(peso, sexo, ga)));
}


function gregorio_p50_gemelos(sexo, ga) {
var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse;	
if (sexo == "varon"){
	sex = 1;
}

		eg = -0.4602458;
		eg2 = 0.01879654;
		eg3 = -0.00020637;
		sexo = 0.04579971;
		constante = 9.6297115;
		mse = 0.1391164;

		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		pesoReferencia = Math.exp(pesoReferencia);

		
		return pesoReferencia;
		
}

function gregorio_edadCorrespondiente_gemelos(peso, sexo) {
	var medida = peso;
	var media_anterior;
	media_anterior = gregorio_p50_gemelos(sexo, 1);
	var media;
	var ga,
	i;
	for (i = 7; i < 308; i++) {
		media = gregorio_p50(sexo, (i/7.0));
		if (medida < media) {
			if ((medida - media_anterior) <= (medida - media)) {
				ga = (i - 1);
				return ga / 7.0;
			} else {
				ga = i;
				return ga / 7.0;
			}
		} else
			media_anterior = gregorio_p50_gemelos(sexo, (i/7.0));
	}

}



function gregorio_p10_gemelos(sexo, ga) {
var pesoReferencia, zscore, sex = 0, eg, eg2, eg3, sexo, constante, mse, p10;	
if (sexo == "varon"){
	sex = 1;
}

		eg = -0.4602458;
		eg2 = 0.01879654;
		eg3 = -0.00020637;
		sexo = 0.04579971;
		constante = 9.6297115;
		mse = 0.1391164;

		pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sex * sexo);
		
		p10 = (-1.28 * mse) + pesoReferencia;
		
		p10 = Math.exp(p10);
		
		return p10;
		
}

function gregorio_p90_gemelos(sexo, ga) {
return (gregorio_p50_gemelos(sexo, ga) + (gregorio_p50_gemelos(sexo, ga) - gregorio_p10_gemelos(sexo, ga)));
}



function clinic_zs_gemelos(peso, sexo, ga) {

	ga = ga*7;
	
	var pp_txt = 2953;

	if (sexo != "varon") {
		pp_txt = pp_txt + (-120);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = -0.1266838 + (ga * ga * 1.06618E-5) + (ga * ga * ga * 1.3196E-8);
	var pp10c_txt = 0.83 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return z_txt;
}

function clinic_p50_gemelos(peso, sexo, ga) {

	ga = ga*7;
	
	var pp_txt = 2953;

	if (sexo != "varon") {
		pp_txt = pp_txt + (-120);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = -0.1266838 + (ga * ga * 1.06618E-5) + (ga * ga * ga * 1.3196E-8);
	var pp10c_txt = 0.83 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return p50c_txt;
}



function clinic_p10_gemelos(peso, sexo, ga) {

	ga = ga*7;
	
	var pp_txt = 2953;

	if (sexo != "varon") {
		pp_txt = pp_txt + (-120);
	}

	var pprnd_txt = Math.round(pp_txt);
	var pp50c_txt = -0.1266838 + (ga * ga * 1.06618E-5) + (ga * ga * ga * 1.3196E-8);
	var pp10c_txt = 0.83 * pp50c_txt;
	var p50c_txt = pp_txt * pp50c_txt;
	var p10c_txt = pp_txt * pp10c_txt;
	var s_txt = (p50c_txt - p10c_txt) / 1.28;
	var error_txt = peso - (69.906 - (0.023 * peso));
	var z_txt = (error_txt - p50c_txt) / s_txt;
	return p10c_txt;
}

function clinic_p90_gemelos(peso, sexo, ga) {
return (clinic_p50_gemelos(peso, sexo, ga) + (clinic_p50_gemelos(peso, sexo, ga) - clinic_p10_gemelos(peso, sexo, ga)));
}


// Clase "zscore peso unico". Entra el peso fetal, la edad gestacional en semanas con decimales y el sexo
function Gregorio2_zs(peso, ga, sexo){
	var pesoReferencia, zscore, sexflag = 0, eg, eg2, eg3, sex, constante, mse;
	if (sexo == "varon"){
		sexflag = 1;
	}
	eg = 0.00920217;
	eg2 = 0.00645354;
	eg3 = -0.00010245;
	sex = 0.03942451;
	constante = 3.9486685;
	mse = 0.12801644;
	pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sexflag * sex);
	this.edadCorrespondiente = gregorio_edadCorrespondiente_unicos(peso, sexo);
	this.media_esperada = Math.exp(pesoReferencia);		
	this.zscore = ( Math.log(peso) - pesoReferencia ) / mse;
	this.percentil = getZPercent(this.zscore);
}


// Clase "zscore peso gemelar". Entra el peso fetal, la edad gestacional en semanas con decimales y el sexo
function Gregorio_zs_gemelos(peso, ga, sexo) {
	var pesoReferencia, zscore, sexflag = 0, eg, eg2, eg3, sex, constante, mse;	
	if (sexo == "varon"){
		sexflag = 1;
	}
	eg = -0.4602458;
	eg2 = 0.01879654;
	eg3 = -0.00020637;
	sex = 0.04579971;
	constante = 9.6297115;
	mse = 0.1391164;
	pesoReferencia = constante + (eg * ga) + (eg2 * ga*ga) + (eg3 *ga*ga*ga) + (sexflag * sex);
	pesoReferencia = Math.exp(pesoReferencia);
	this.edadCorrespondiente = gregorio_edadCorrespondiente_gemelos(peso, sexo);
	this.media_esperada = Math.exp(pesoReferencia);		
	this.zscore = ( Math.log(peso) - pesoReferencia ) / mse;
	this.percentil = getZPercent(this.zscore);
}




function CRL(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = crl_mean(this.edad);
	this.ds = crl_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = crl_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 308; i++) {
			media = crl_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = crl_mean(i / 7.0);
		}
	};
}

function BPD(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = bpd_mean(this.edad);
	this.ds = bpd_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = bpd_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 800; i++) {
			media = bpd_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = bpd_mean(i / 7.0);
		}
	};
}

function AC(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = ac_mean(this.edad);
	this.ds = ac_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = ac_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 450; i++) {
			media = ac_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = ac_mean(i / 7.0);
		}
	};
}

function FL(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = fl_mean(this.edad);
	this.ds = fl_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = fl_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 450; i++) {
			media = fl_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = fl_mean(i / 7.0);
		}
	};
}

function HC(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = hc_mean(this.edad);
	this.ds = hc_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = hc_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 800; i++) {
			media = hc_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = hc_mean(i / 7.0);
		}
	};
}

function Humero(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = hum_mean(this.edad);
	this.ds = hum_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = hum_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 320; i++) {
			media = hum_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = hum_mean(i / 7.0);
		}
	};
}

function Cubito(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = cub_mean(this.edad);
	this.ds = cub_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = cub_mean(100);
		var media;
		var ga,
		i;
		for (i = 105; i < 320; i++) {
			media = cub_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = cub_mean(i / 7.0);
		}
	};
}

function Radio(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = rad_mean(this.edad);
	this.ds = rad_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = rad_mean(100);
		var media;
		var ga,
		i;
		for (i = 105; i < 320; i++) {
			media = rad_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = rad_mean(i / 7.0);
		}
	};
}

function Femur(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = fem_mean(this.edad);
	this.ds = fem_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = fem_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 320; i++) {
			media = fem_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = fem_mean(i / 7.0);
		}
	};
}

function Tibia(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = tib_mean(this.edad);
	this.ds = tib_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = tib_mean(100);
		var media;
		var ga,
		i;
		for (i = 105; i < 320; i++) {
			media = tib_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = tib_mean(i / 7.0);
		}
	};
}

function Perone(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = per_mean(this.edad);
	this.ds = per_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = per_mean(100);
		var media;
		var ga,
		i;
		for (i = 105; i < 320; i++) {
			media = per_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = per_mean(i / 7.0);
		}
	};
}

function Pie(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = pie_mean(this.edad);
	this.ds = pie_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.edadCorrespondiente = function () {
		var medida = this.dato;
		var media_anterior;
		media_anterior = pie_mean(1);
		var media;
		var ga,
		i;
		for (i = 7; i < 320; i++) {
			media = pie_mean(i / 7.0);
			if (medida < media) {
				if ((medida - media_anterior) <= (medida - media)) {
					ga = (i - 1);
					return ga / 7.0;
				} else {
					ga = i;
					return ga / 7.0;
				}
			} else
				media_anterior = pie_mean(i / 7.0);
		}
	};
}



////////////////////////////////// HEMODINAMICO GREGORIO MARAÑON //////////////////////////////////////////


function UAPI_Unico_Gregorio(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = 1.74 - (this.edad * 0.0238731473944725);
	this.ds = 0.25825;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
}

function UAPI_Gemelos_Gregorio(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = 1.5309919 - (this.edad * 0.0138792);
	this.ds = 0.038569+ (0.0086306 * this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
	}

function MCAPI_Unico_Gregorio(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = -0.885496 + (this.edad * 0.209341) - (0.003686 * this.edad * this.edad);
	this.ds = 0.7217442 - (0.0080618 * this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
	}

function MCAPI_Gemelos_Gregorio(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = 1.7480935 + (this.edad * 0.0036243);
	this.ds = 0.089618 + (0.010922 * this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
	}

function CPR_Unico_Gregorio(mca, ua, edad) {
	this.dato = mca/ua;
	this.edad = edad;
	this.media = (( -0.885496 + (this.edad * 0.209341) - (0.003686 * this.edad * this.edad) )   /   ( 1.74 - (this.edad * 0.0238731473944725) ))  ;
	this.ds =  (( 0.7217442 - (0.0080618 * this.edad) )   +   ( 0.25825 ))  /2;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
	}

	
function CPR_Gemelos_Gregorio(mca, ua, edad) {
	this.dato = mca/ua;
	this.edad = edad;
	this.media = (( 1.7480935 + (this.edad * 0.0036243) )   /   ( 1.5309919 - (this.edad * 0.0138792) ))  ;
	this.ds =  (( 0.038569+ (0.0086306 * this.edad) )   +   ( 0.089618 + (0.010922 * this.edad) ))  /2;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.type = getProgressbarType(this.percentil)
	}



function UAPI(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = uapi_mean(this.edad);
	this.ds = uapi_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function MCAPI(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = mcapi_mean(this.edad);
	this.ds = mcapi_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function CPR(mca, ua, edad) {
	this.dato = mca/ua;
	this.edad = edad;
	this.media = cpr_mean(this.edad);
	this.ds = cpr_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function UAAPI(der, izq, edad) {
	this.der = der;
	this.izq = izq;
	this.av = (izq + der) / 2;
	this.edad = edad;
	this.media = avpi_mean(this.edad * 7);
	this.ds = avpi_sd(this.edad * 7);
	this.zscore = ((Math.log(this.av)) - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function VDPI(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = vdpi_mean(this.edad);
	this.ds = vdpi_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function AIPI(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = aipi_mean(this.edad);
	this.ds = aipi_sd(this.edad);
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
}

function velocidad_MCA(velocidad, edad) {
	this.velocidad = velocidad;
	this.edad = edad;
	this.velocidadEsperada = Math.exp(2.31 + (0.046 * this.edad));
	this.mom = this.velocidad / this.velocidadEsperada;
}

function transfusion_ml(hdon, hesp, hobs, gas) {
	var eml = (102 - (12.17 * gas)) + ((0.444 * gas * gas));
	var ml = (eml * (hobs - hesp)) / (hesp - hdon);
	return ml;
}


function AorticValve(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.263;
	this.c = -5.019;
	this.mse = 0.1282;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function PulmonaryValve(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.352;
	this.c = -5.114;
	this.mse = 0.1208;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function AscendingAorta(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.261;
	this.c = -4.886;
	this.mse = 0.133;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MainPulmonaryArtery(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.347;
	this.c = -5.025;
	this.mse = 0.157;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function TricuspidValve(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.395;
	this.c = -4.766;
	this.mse = 0.1394;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MitralValve(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.173;
	this.c = -4.084;
	this.mse = 0.1315;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RVentricleEDDimension(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.363;
	this.c = -4.455;
	this.mse = 0.1442;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LVentricleEDDimension(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.298;
	this.c = -4.292;
	this.mse = 0.156;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RVentricleInlet(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.277;
	this.c = -3.566;
	this.mse = 0.1658;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LVentricleInlet(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.193;
	this.c = -3.231;
	this.mse = 0.1376;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RVentricleArea(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 2.625;
	this.c = -8.133;
	this.mse = 0.2957;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LVentricleArea(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 2.432;
	this.c = -7.43;
	this.mse = 0.2564;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function DescendingAorta(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.36;
	this.c = -5.365;
	this.mse = 0.1216;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function InferiorVenaCava(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.201;
	this.c = -5.14;
	this.mse = 0.1893;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RPulmonaryArtery(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.23;
	this.c = -5.307;
	this.mse = 0.1802;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LPulmonaryArtery(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.231;
	this.c = -5.39;
	this.mse = 0.1966;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ArterialDuct(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.013;
	this.c = -4.44;
	this.mse = 0.1913;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function UAPI_kurmanavicius(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.p05 = 	0.872 - 0.0107 * this.edad;
	this.media = 0.952 - 0.0098 * this.edad;
	this.p95 = 1.034 - 0.0086 * this.edad;
	this.ds = 0;
	this.zscore = 0;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}

function MCAPI_kurmanavicius(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.p05 = ( ((-12.82 + 8.2045 * Math.log(this.edad)) - (1.2265 * Math.log(this.edad) * Math.log(this.edad))) - 1.65*0.002242*this.edad );
	this.media = (-12.82 + 8.2045 * Math.log(this.edad)) - (1.2265 * Math.log(this.edad) * Math.log(this.edad)) ;
	this.p95 = ( ((-12.82 + 8.2045 * Math.log(this.edad)) - (1.2265 * Math.log(this.edad) * Math.log(this.edad))) + 1.65*0.002242*this.edad );
	this.ds = 0;
	this.zscore = 0;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}

function CPR_kurmanavicius(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.p05 = 6.5164 - 2.7392*Math.sqrt(this.edad) + 0.4881*Math.sqrt(this.edad)*Math.log(this.edad);
	this.media = 6.8931 - 2.9091*Math.sqrt(this.edad) + 0.5246*Math.sqrt(this.edad)*Math.log(this.edad);
	this.p95 = 7.6995 - 3.3369*Math.sqrt(this.edad) + 0.6176*Math.sqrt(this.edad)*Math.log(this.edad);
	this.ds = 0;
	this.zscore = 0;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}

function UAPI_baschat(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = 1.7791 - 0.0246 * this.edad;
	this.ds = 0.168;
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}

function MCAPI_baschat(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = -2.7317 + (0.3335 * this.edad) - (0.0058 * this.edad * this.edad);
	this.ds = 0.328;
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}

function CPR_baschat(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.media = -4.0636 + (0.383 * this.edad) - (0.0059 * this.edad * this.edad);
	this.ds = 0.419;
	this.p05 = (-1.645 * this.ds) + this.media;
	this.p95 = (1.645 * this.ds) + this.media;
	this.zscore = (this.dato - this.media) / this.ds;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil)
}




function TOWirlanda(altura, peso, origen, paridad, sexo, ga, pesoFetal){
this.cteOrigen;
this.cteParidad;
this.cteSexo;
this.cteFinal;
		
		this.cte = 3490.7;
		this.cteAltura = 6.554;
		this.ctePeso = 9.031;
		this.ctePeso2 = -0.093;
		this.cteAfrica = -128.371;		
		this.cteParidad1 = 130.734;
		this.cteParidad2 = 174.306;
		this.cteParidad3 = 142.057;
		this.cteNiño = 66.8;
		this.cteNiña = -66.8;
		this.cv = 0.1179;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad3;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) + ( (altura - 163) * this.cteAltura ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);
}

function TOWaustralia(altura, peso, origen, paridad, sexo, ga, pesoFetal){
this.cteOrigen;
this.cteParidad;
this.cteSexo;
this.cteFinal;
		
		this.cte = 3463.6;
		this.cteAltura = 7.8;
		this.ctePeso = 9.0;
		this.ctePeso2 = -0.15;
		this.ctePeso3 = 0.001;
		this.cteAfrica = -297.4;		
		this.cteParidad1 = 94.8;
		this.cteParidad2 = 115.2;
		this.cteParidad3 = 116.0;
		this.cteParidad4 = 99.2;
		this.cteNiño = 66.9;
		this.cteNiña = -66.9;
		this.cv = 0.1185;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad4;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) +( (peso - 64) * (peso - 64) * (peso - 64) * this.ctePeso3 ) + ( (altura - 163) * this.cteAltura ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);
	
}

function TOWnuevazelanda(altura, peso, origen, paridad, sexo, ga, pesoFetal){
this.cteOrigen;
this.cteParidad;
this.cteSexo;
this.cteFinal;
		
		this.cte = 3513.0;
		this.cteAltura = 8.6;
		this.ctePeso = 7.33;
		this.ctePeso2 = -0.111;
		this.ctePeso3 = 0.0008;
		this.cteAfrica = -139.7;		
		this.cteParidad1 = 120.1;
		this.cteParidad2 = 164.9;
		this.cteParidad3 = 140.9;
		this.cteParidad4 = 163.2;
		this.cteNiño = 60.6;
		this.cteNiña = -60.6;
		this.cv = 0.1129;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad4;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) +( (peso - 64) * (peso - 64) * (peso - 64) * this.ctePeso3 ) + ( (altura - 163) * this.cteAltura ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);
}

function TOWusa(altura, peso, origen, paridad, sexo, ga, pesoFetal){
this.cteOrigen;
this.cteParidad;
this.cteSexo;
this.cteFinal;
		
		this.cte = 3453.4;
		this.cteAltura = 6.398;
		this.cteAltura3 = -0.003;
		this.ctePeso = 7.578;
		this.ctePeso2 = -0.087;
		this.ctePeso3 = 0.0005;
		this.cteAfrica = -161.0;		
		this.cteParidad1 = 96.2;
		this.cteParidad2 = 121.9;
		this.cteParidad3 = 125.9;
		this.cteParidad4 = 122.7;
		this.cteNiño = 66.0;
		this.cteNiña = -66.0;
		this.cv = 0.1108;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad4;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) +( (peso - 64) * (peso - 64) * (peso - 64) * this.ctePeso3 ) + ( (altura - 163) * this.cteAltura ) + ( (altura - 163) * (altura - 163) * (altura - 163) * this.cteAltura3 ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);
}

function TOWreinounido(altura, peso, origen, paridad, sexo, ga, pesoFetal){
this.cteOrigen;
this.cteParidad;
this.cteSexo;
this.cteFinal;
		
		this.cte = 3454.4;
		this.cteAltura = 8.427;
		this.cteAltura3 = 0.000;
		this.ctePeso = 7.619;
		this.ctePeso2 = -0.113;
		this.ctePeso3 = 0.0001;
		this.cteAfrica = -63.7;		
		this.cteParidad1 = 111.0;
		this.cteParidad2 = 154.8;
		this.cteParidad3 = 151.3;
		this.cteParidad4 = 151.3;
		this.cteNiño = 52.6;
		this.cteNiña = -52.6;
		this.cv = 0.11797;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad4;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) +( (peso - 64) * (peso - 64) * (peso - 64) * this.ctePeso3 ) + ( (altura - 163) * this.cteAltura ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);
		
}

function TOWespana(altura, peso, origen, paridad, sexo, ga, pesoFetal){

this.cteOrigen;
this.cteParidad; 
this.cteSexo;
this.cteFinal;
		
		this.cte = 3269.47;
		this.cteAltura = 8.768;
		this.cteAltura3 = -0.008;
		this.ctePeso = 6.90;
		this.ctePeso2 = -0.12;
		this.ctePeso3 = 0.001;
		this.cteAfrica = 73.83;		
		this.cteParidad1 = 97.93;
		this.cteParidad2 = 127.02;
		this.cteParidad3 = 152.29;
		this.cteParidad4 = 152.29;
		this.cteNiño = 51.79;
		this.cteNiña = -51.79;
		this.cv = 0.1303;
	
		if (origen == "africa")
			this.cteOrigen = this.cteAfrica;
		else 
			this.cteOrigen = 0;
		
		if (paridad == '0')
			this.cteParidad = 0;
		else if (paridad == '1')
			this.cteParidad = this.cteParidad1;
		else if (paridad == '2')
			this.cteParidad = this.cteParidad2;
		else if (paridad == '3')
			this.cteParidad = this.cteParidad3;
		else if (paridad == "4 o mas")
			this.cteParidad = this.cteParidad4;
		else this.cteParidad = 0;

		if (sexo == "niño")
			this.cteSexo = this.cteNiño;
		else if (sexo == "niña")
			this.cteSexo = this.cteNiña;
		else this.cteSexo = 0;
		

		this.cteFinal = this.cte + ( (peso - 64) * this.ctePeso ) + ( (peso - 64) * (peso - 64) * this.ctePeso2 ) +( (peso - 64) * (peso - 64) * (peso - 64) * this.ctePeso3 ) + ( (altura - 163) * this.cteAltura ) + ( (altura - 163) * (altura - 163) * (altura - 163) * this.cteAltura3 ) + this.cteOrigen + this.cteParidad + this.cteSexo;	
		
	this.esperado = hadlock_esperado(40.5);
	this.ratio = this.cte/this.esperado;
	this.media_esperada = hadlock_esperado(ga) * this.ratio;
	this.de_esperada = this.media_esperada * this.cv;
	this.zscore = (pesoFetal - this.media_esperada)/this.de_esperada;
	this.percentil = getZPercent(this.zscore);
	this.p10 = (-1.28 * this.de_esperada) + this.media_esperada;
	this.p90 = (1.28 * this.de_esperada) + this.media_esperada;
		
	this.ratio_mod = this.cteFinal/this.esperado;
	this.media_esperada_mod = hadlock_esperado(ga) * this.ratio_mod;
	this.de_esperada_mod = this.media_esperada_mod * this.cv;
	this.zscore_mod = (pesoFetal - this.media_esperada_mod)/this.de_esperada_mod;
	this.percentil_mod = getZPercent(this.zscore_mod);
	this.p10_mod = (-1.28 * this.de_esperada_mod) + this.media_esperada_mod;
	this.p90_mod = (1.28 * this.de_esperada_mod) + this.media_esperada_mod;

	this.type = getProgressbarType(this.percentil);
	this.type_mod = getProgressbarType(this.percentil_mod);

}





function ThreeVesselIsthmusFL(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 0.967;
	this.c = -2.560;
	this.mse = 0.16281;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function SagittalIsthmusFL(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 0.879;
	this.c = -2.261;
	this.mse = 0.181;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ThreeVesselDuctFL(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.090;
	this.c = -3.009;
	this.mse = 0.17931;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}


function ThreeVesselIsthmusGA(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.224;
	this.c = -2.822;
	this.mse = 0.16424;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function SagittalIsthmusGA(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.110;
	this.c = -2.490;
	this.mse = 0.18183;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ThreeVesselDuctGA(dato, edad) {
	this.dato = dato;
	this.edad = edad;
	this.m = 1.396;
	this.c = -3.359;
	this.mse = 0.17569;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function AorticValveBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.039;
	this.c = -2.848;
	this.mse = 0.1307;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function PulmonaryValveBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.126;
	this.c = -2.813;
	this.mse = 0.1171;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function AscendingAortaBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.06;
	this.c = -2.758;
	this.mse = 0.1227;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MainPulmonaryArteryBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.144;
	this.c = -2.774;
	this.mse = 0.1455;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function TricuspidValveBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.188;
	this.c = -2.439;
	this.mse = 0.1456;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MitralValveBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9921;
	this.c = -2.118;
	this.mse = 0.1296;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleEndDiastolicDimensionBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.138;
	this.c = -2.145;
	this.mse = 0.1525;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleEndDiastolicDimensionBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.08;
	this.c = -2.087;
	this.mse = 0.1652;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleInletBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.064;
	this.c = -1.403;
	this.mse = 0.1661;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleInletBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.024;
	this.c = -1.262;
	this.mse = 0.1313;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleAreaBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 2.165;
	this.c = -3.643;
	this.mse = 0.3193;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleAreaBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 2.042;
	this.c = -3.335;
	this.mse = 0.2691;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function DescendingAortaBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.101;
	this.c = -2.998;
	this.mse = 0.1332;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function InferiorVenaCavaBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.031;
	this.c = -3.159;
	this.mse = 0.1892;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightPulmonaryArteryBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.025;
	this.c = -3.223;
	this.mse = 0.1813;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftPulmonaryArteryBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.062;
	this.c = -3.383;
	this.mse = 0.2001;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ArterialDuctBPD(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8236;
	this.c = -2.694;
	this.mse = 0.2042;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}



function AorticValveFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8972;
	this.c = -2.274;
	this.mse = 0.1103;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function PulmonaryValveFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9437;
	this.c = -2.148;
	this.mse = 0.111;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function AscendingAortaFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8968;
	this.c = -2.141;
	this.mse = 0.1225;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MainPulmonaryArteryFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9465;
	this.c = -2.072;
	this.mse = 0.1645;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function TricuspidValveFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9937;
	this.c = -1.735;
	this.mse = 0.1286;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MitralValveFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8473;
	this.c = -1.55;
	this.mse = 0.1202;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleEndDiastolicDimensionFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9625;
	this.c = -1.485;
	this.mse = 0.1435;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleEndDiastolicDimensionFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9554;
	this.c = -1.516;
	this.mse = 0.1403;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleInletFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9305;
	this.c = -0.8249;
	this.mse = 0.152;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleInletFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8772;
	this.c = -0.6751;
	this.mse = 0.1216;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleAreaFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.905;
	this.c = -2.488;
	this.mse = 0.2651;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleAreaFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 1.823;
	this.c = -2.283;
	this.mse = 0.2145;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function DescendingAortaFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9415;
	this.c = -2.368;
	this.mse = 0.1224;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function InferiorVenaCavaFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8365;
	this.c = -2.502;
	this.mse = 0.1885;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightPulmonaryArteryFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.8685;
	this.c = -2.623;
	this.mse = 0.178;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftPulmonaryArteryFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.9219;
	this.c = -2.785;
	this.mse = 0.1935;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ArterialDuctFL(dato, edad) {
	this.dato = dato/10;
	this.edad = edad/10;
	this.m = 0.737;
	this.c = -2.251;
	this.mse = 0.183;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}



function AorticValveGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.263;
	this.c = -5.019;
	this.mse = 0.1282;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function PulmonaryValveGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.352;
	this.c = -5.114;
	this.mse = 0.1208;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function AscendingAortaGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.261;
	this.c = -4.886;
	this.mse = 0.133;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MainPulmonaryArteryGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.347;
	this.c = -5.025;
	this.mse = 0.157;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function TricuspidValveGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.395;
	this.c = -4.766;
	this.mse = 0.1394;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function MitralValveGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.173;
	this.c = -4.084;
	this.mse = 0.1315;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleEndDiastolicDimensionGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.363;
	this.c = -4.455;
	this.mse = 0.1442;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleEndDiastolicDimensionGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.298;
	this.c = -4.292;
	this.mse = 0.156;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleInletGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.277;
	this.c = -3.566;
	this.mse = 0.1658;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleInletGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.193;
	this.c = -3.231;
	this.mse = 0.1376;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightVentricleAreaGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 2.625;
	this.c = -8.133;
	this.mse = 0.2957;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftVentricleAreaGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 2.432;
	this.c = -7.43;
	this.mse = 0.2564;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function DescendingAortaGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.36;
	this.c = -5.365;
	this.mse = 0.1216;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function InferiorVenaCavaGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.201;
	this.c = -5.14;
	this.mse = 0.1893;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function RightPulmonaryArteryGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.23;
	this.c = -5.307;
	this.mse = 0.1802;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function LeftPulmonaryArteryGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.231;
	this.c = -5.39;
	this.mse = 0.1966;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}

function ArterialDuctGA(dato, edad) {
	this.dato = dato/10;
	this.edad = edad;
	this.m = 1.013;
	this.c = -4.44;
	this.mse = 0.1913;
	this.ln_media = ((Math.log(this.edad)) * this.m) + this.c;
	this.media = Math.exp(this.ln_media);
	this.zscore = (Math.log(this.dato) - this.ln_media) / this.mse;
	this.percentil = getZPercent(this.zscore);
	this.type = getProgressbarType(this.percentil);	
}






/*

	var hum1 = new Humero(43, 26.7142857)
	undefined
	hum1
	Object { dato: 43, edad: 26.7142857, media: 46.16221823597352, ds: 2.4227719994244, zscore: -1.305206695770298, percentil: 9.591123741510883, edadCorrespondiente: Humero/this.edadCorrespondiente() }
	hum1.edadCorrespondiente()
	25.142857142857142

	var cub1 = new Cubito(41, 26.7142857)
	undefined
	cub1
	Object { dato: 41, edad: 26.7142857, media: 44.17902024880176, ds: 2.5169237135826, zscore: -1.2630578478188088, percentil: 10.328419557665836, edadCorrespondiente: Cubito/this.edadCorrespondiente() }
	cub1.edadCorrespondiente()
	25.142857142857142
	
	var rad1 = new Radio(36, 26.7142857)
	undefined
	rad1
	Object { dato: 36, edad: 26.7142857, media: 39.236150454097654, ds: 2.4324688564801997, zscore: -1.3303974870948143, percentil: 9.169367104771064, edadCorrespondiente: Radio/this.edadCorrespondiente() }
	rad1.edadCorrespondiente()
	24.857142857142858

	var fem1 = new Femur(46, 26.7142857)
	undefined
	fem1
	Object { dato: 46, edad: 26.7142857, media: 49.702429827949615, ds: 2.6186908563096, zscore: -1.413847617418758, percentil: 7.870332447815754, edadCorrespondiente: Femur/this.edadCorrespondiente() }
	fem1.edadCorrespondiente()
	25.285714285714285

	var tib1 = new Tibia(41, 26.7142857)
	undefined
	tib1
	Object { dato: 41, edad: 26.7142857, media: 44.72500354514243, ds: 2.4453265707146, zscore: -1.5233153680793918, percentil: 6.383991205635365, edadCorrespondiente: Tibia/this.edadCorrespondiente() }
	tib1.edadCorrespondiente()
	25

	var per1 = new Perone(40, 26.7142857)
	undefined
	per1
	Object { dato: 40, edad: 26.7142857, media: 43.69210412071294, ds: 2.4834238563737, zscore: -1.4866991436991983, percentil: 6.8547144488553755, edadCorrespondiente: Perone/this.edadCorrespondiente() }
	per1.edadCorrespondiente()
	25	
 
	var pie1 = new Pie(47, 26.7142857)
	undefined
	pie1
	Object { dato: 47, edad: 26.7142857, media: 51.896599003654856, ds: 3.182217141305, zscore: -1.5387381772592685, percentil: 6.193411404037342, edadCorrespondiente: Pie/this.edadCorrespondiente() }
	pie1.edadCorrespondiente()
	25
	
	var umbilical = new UAPI(0.6, 26.7142857)
	undefined
	umbilical
	Object { dato: 0.6, edad: 26.7142857, media: 1.1720234699965304, ds: 0.299, zscore: -1.9131219732325433, percentil: 2.786621968544989 }
	
	var cerebral = new MCAPI(1.6, 26.7142857)
	undefined
	cerebral
	Object { dato: 1.6, edad: 26.7142857, media: 2.038326530274899, ds: 0.35655428556057145, zscore: -1.2293402380110676, percentil: 10.947213336800028 }
	
	var ratio = new CPR((1.6/0.6), 26.7142857)
	undefined
	ratio
	Object { dato: 2.666666666666667, edad: 26.7142857, media: 1.957418366378775, ds: 0.44598428549328584, zscore: 1.590298858856473, percentil: 94.41162721210286 }

	var uterinas = new UAAPI(0.7, 0.5, 26.7142857)
	undefined
	uterinas
	Object { izq: 0.5, der: 0.7, av: 0.6, edad: 26.7142857, media: -0.16161379954052024, ds: 0.22356700002590002, zscore: -1.5620007612260067, percentil: 5.914390477081271 }
 
	var ductus = new VDPI(0.4, 26.7142857)
	undefined
	ductus
	Object { dato: 0.4, edad: 26.7142857, media: 0.59311428588, ds: 0.1483, zscore: -1.3021866883344573, percentil: 9.64262873063369 }
 
	var istmo = new AIPI(2.2, 26.7142857)
	undefined
	istmo
	Object { dato: 2.2, edad: 26.7142857, media: 2.66759999978, ds: 0.32501971411950004, zscore: -1.438681961328898, percentil: 7.512032623188092 }
 
 
 
 25 semanas
 660 gr: varón p11, mujer p18
 760 gr: varón p45, mujer p57
 
 30 semanas
 1260 gr: varón p10, mujer p16
 1460 gr: varón p44, mujer p56
 
 35 semanas
 2100 gr: varón p9, mujer p15
 2500 gr: varón p50, mujer p62
 
 40 semanas
 2900 gr: varón p12, mujer p19
 3300 gr: varón p43, mujer p55
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*/