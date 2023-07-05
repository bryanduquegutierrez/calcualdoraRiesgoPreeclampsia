//ecuacion del hospital vall d'hebron, de codigo libre
var today = new Date();
var yyyy = today.getFullYear();

document.getElementById("anys").innerHTML = "Pregnancy risk assessment calculator, 2020-" + yyyy + ". Dr. Alba Farràs Llobet.<br>Vall d'Hebron Barcelona Hospital Campus.";
function borrar() {
    document.getElementById("under30_tx").innerHTML = "";
    document.getElementById("under34_tx").innerHTML = "";
    document.getElementById("under37_tx").innerHTML = "";
    document.getElementById("apo_tx").innerHTML = "";
}
function calcRisk1() {
    let ratio = document.getElementById("ratio").value;
    let yvar30 = -2.797 + 0.0099 * ratio;
    if (ratio) {
        document.getElementById("under30_tx").innerHTML = Math.round(Math.exp(yvar30) / (1 + Math.exp(yvar30)) * 100) + "%";

        let yvar34 = -2.694 + 0.0218 * ratio;
        document.getElementById("under34_tx").innerHTML = Math.round(Math.exp(yvar34) / (1 + Math.exp(yvar34)) * 100) + "%";

        let yvar37 = -1.82 + 0.0335 * ratio;
        document.getElementById("under37_tx").innerHTML = Math.round(Math.exp(yvar37) / (1 + Math.exp(yvar37)) * 100) + "%";

        let apo = -1.044 + 0.0092 * ratio;
        document.getElementById("apo_tx").innerHTML = Math.round(Math.exp(apo) / (1 + Math.exp(apo)) * 100) + "%";
    } else {
        borrar();
    }
}
function calcRisk2() {
    let weeks = Number(document.getElementById("weeks").value);
    let days = Number(document.getElementById("days").value);
    let ga = (weeks * 7 + days) / 7;
    let centile = Number(document.getElementById("centile").value);
    let nicep = 0;
    let utpip = 0;
    let umbip95 = 0;
    let umbiprv = 0;
    if ((document.querySelectorAll('input[name=high]:checked').length > 0) || document.querySelectorAll('input[name=moderate]:checked').length > 1) {
        nicep = 1;
    }
    if (document.getElementById("utpi").checked) {
        utpip = 1;
    }
    if (document.getElementById('umbp2').checked) {
        umbip95 = 0;
        umbiprv = 1;
    } else if (document.getElementById('umbp1').checked) {
        umbip95 = 1;
        umbiprv = 0;
    }
    if (ga < 20 || ga >= 32 || centile >= 10) {
        alert("Gestational age should be between 20 and 31.6 weeks. \nEstimated fetal weight centile should be below 10.");
        borrar();
    } else {
        let yvar30 = 1.472 + 1.535 * utpip - 0.167 * ga + 2.027 * umbip95 + 3.101 * umbiprv - 0.177 * centile;
        document.getElementById("under30_tx").innerHTML = Math.round(Math.exp(yvar30) / (1 + Math.exp(yvar30)) * 100) + "%";

        let yvar34 = 2.507 + 2.054 * utpip - 0.199 * ga + 3.378 * umbip95 + 4.145 * umbiprv - 0.271 * centile + 1.4 * nicep;
        document.getElementById("under34_tx").innerHTML = Math.round(Math.exp(yvar34) / (1 + Math.exp(yvar34)) * 100) + "%";

        let yvar37 = -0.845 + (1.709 * utpip) + (1.11 * nicep) - (0.291 * centile);
        if (document.getElementById('umbnormal').checked) {
            document.getElementById("under37_tx").innerHTML = Math.round(Math.exp(yvar37) / (1 + Math.exp(yvar37)) * 100) + "%";
        } else {
            document.getElementById("under37_tx").innerHTML = "100%"
        }
        let apo = 3.902 + 1.441 * utpip - 0.1886 * ga + 2.082 * umbip95 + 2.958 * umbiprv - 0.159 * centile;
        document.getElementById("apo_tx").innerHTML = Math.round(Math.exp(apo) / (1 + Math.exp(apo)) * 100) + "%";

    }
}
function mitjaTA() {
    if (document.getElementById("tas").value && document.getElementById("tad").value) {
        let mitja = Number(document.getElementById("tad").value) + ((Number(document.getElementById("tas").value) - Number(document.getElementById("tad").value)) / 3);
        document.getElementById("map").value = Math.round(mitja * 100) / 100;
    }
}
function mitjaUt() {
    if (document.getElementById("esquerra").value && document.getElementById("dreta").value) {
        let mitja = (Number(document.getElementById("esquerra").value) + Number(document.getElementById("dreta").value)) / 2;
        document.getElementById("meanut").value = Math.round(mitja * 100) / 100;
    }

}
function riscPE() {
    mitjaTA();
    mitjaUt();
    let weeksas = Number(document.getElementById("weeks1").value);
    let daysas = Number(document.getElementById("days1").value);
    let gaas = (weeksas * 7 + daysas);
    let weekseco = Number(document.getElementById("weeks2").value);
    let dayseco = Number(document.getElementById("days2").value);
    let gaeco = (weekseco * 7 + dayseco);

    /// modificadors
    let vnuli = 0.646;
    let vold = 0.917;
    let vprevia = 0.642;
    let vhta = 0.974;
    let vafro = 0.710;

    let etnia_pappa = 1;
    let etnia_plgf = 1;
    let etnia_ut = 1;

    let fuma_pappa = 1;
    let fuma_plgf = 1;

    let diabetis_pappa = 1;
    let diabetis_plgf = 1;

    let hormones_pappa = 1;
    let hormones_plgf = 1;



    if (document.getElementById("nulliparous").checked) {
        vnuli = 1.43;
    }
    if (document.getElementById("old").checked) {
        vold = 1.47;
    }
    if (document.getElementById("previa").checked) {
        vprevia = 6.26;
    }
    if (document.getElementById("hta").checked) {
        vhta = 5.55;
    }

    if (document.getElementById("etnia").value == "afro") {
        vafro = 2.52;
        etnia_pappa = 1.3382;
        etnia_plgf = 1.5;
        etnia_ut = 1.08;

    } else if (document.getElementById("etnia").value == "magreb") {
        etnia_pappa = 1.2433;

    } else if (document.getElementById("etnia").value == "yellow") {
        etnia_pappa = 1.17;
        etnia_plgf = 1.26;
    } else if (document.getElementById("etnia").value == "none") {
        alert("Ethnicity must be selected");
    }


    if (document.getElementById("smoker").checked) {
        fuma_pappa = 0.8352;
        fuma_plgf = 1.4;
    }
    if (document.getElementById("diabetes").checked) {
        diabetis_pappa = 0.7526;
        diabetis_plgf = 0.87;
    }
    if (document.getElementById("hormones").checked) {
        hormones_pappa = 0.8169;
        hormones_plgf = 0.95;
    }

    /// MOMS

    if (gaeco >= 77 && gaeco < 98) {
        // moms MAP
        let mapcalculada = Math.exp(5.4754050872 - 0.023816328 * gaeco + 0.0001304068 * gaeco * gaeco);
        let mappacient = Number(document.getElementById("map").value);
        if (mappacient != 0) {

            let pesmap = 1;
            if (document.getElementById("pes").value) {
                pesmap = 0.69295346 + 25.905956 * (1 / document.getElementById("pes").value) - 432.85302 * (1 / document.getElementById("pes").value) * (1 / document.getElementById("pes").value);
                let mommap_corregit = mappacient / (mapcalculada * pesmap);
                document.getElementById("mapm").value = Math.round(mommap_corregit * 1000) / 1000;
                document.getElementById("mapm_tx").innerHTML = Math.round(mommap_corregit * 1000) / 1000 + " MoM";
            } else {
                alert("Maternal weight must be stated");
            }


        }

        // moms Uterina
        let utcalculada = 3.7421260268 - 0.0232424965 * gaeco;
        if (document.getElementById("inlineRadio1v").checked == true) {
            utcalculada = 1.96 - ((0.38 * (gaeco - 77)) / 21);
        }
        let utpacient = Number(document.getElementById("meanut").value);
        if (utpacient != 0) {

            let pesut = 1;
            if (document.getElementById("pes").value) {
                pesut = 0.822208 + 8.4460303 * (1 / document.getElementById("pes").value);


                let momut_corregit = utpacient / (utcalculada * pesut * etnia_ut);
                document.getElementById("meanutm").value = Math.round(momut_corregit * 1000) / 1000;
                document.getElementById("meanutm_tx").innerHTML = Math.round(momut_corregit * 1000) / 1000 + " MoM";
            } else {
                alert("Maternal weight must be stated");
            }
        }
    } else if (document.getElementById("meanut").value || document.getElementById("map").value) {
        alert("Gestational age at maternal examination should be between 11+0 and 13+6 weeks.");
    }
    if (gaas >= 56 && gaas < 98) {
        // moms PAPPA
        let pappacalculada = 53243.8599014282 - 2918.3001203537 * gaas + 59.5551365018 * gaas * gaas - 0.541313332 * gaas * gaas * gaas + 0.001909531 * gaas * gaas * gaas * gaas;
        let pappapacient = Number(document.getElementById("pappa").value);
        if (pappapacient != 0) {
            let pespappa = 1;
            if (document.getElementById("pes").value) {
                pespappa = -0.057931585 + 66.915887757 * (1 / document.getElementById("pes").value);

                let mompappa_corregit = pappapacient / (pappacalculada * pespappa * etnia_pappa * fuma_pappa * diabetis_pappa * hormones_pappa);
                document.getElementById("pappam").value = Math.round(mompappa_corregit * 1000) / 1000;
                document.getElementById("pappam_tx").innerHTML = Math.round(mompappa_corregit * 1000) / 1000 + " MoM";

            } else {
                alert("Maternal weight must be stated");
            }
        }

        // moms PlGF
        let plgfcalculada = Math.exp(-1.1071984908 + 0.0874913975 * gaas - 0.0003475053 * gaas * gaas);
        let plgfpacient = Number(document.getElementById("plgf").value);
        if (plgfpacient != 0) {

            let pesplgf = 1;
            if (document.getElementById("pes").value) {
                pesplgf = 0.616326418 + 24.4013111891 * (1 / document.getElementById("pes").value);


                let momplgf_corregit = plgfpacient / (plgfcalculada * pesplgf * etnia_plgf * fuma_plgf * diabetis_plgf * hormones_plgf);
                document.getElementById("plgfm").value = Math.round(momplgf_corregit * 1000) / 1000;
                document.getElementById("plgfm_tx").innerHTML = Math.round(momplgf_corregit * 1000) / 1000 + " MoM";
            } else {
                alert("Maternal weight must be stated");
            }

        }
    } else if (document.getElementById("plgf").value || document.getElementById("pappa").value) {
        alert("Gestational age at blood sample should be between 8+0 and 13+6 weeks.");
    }

    // RISC MATRIUS


    let lrprior = 0.005025 * vnuli * vold * vprevia * vhta * vafro;

    let x1a = document.getElementById("meanutm").value;
    let x2a = document.getElementById("mapm").value;
    let x3a = document.getElementById("pappam").value;
    let x4a = document.getElementById("plgfm").value;
    if (x1a && x1a > 2.5) {
        x1a = 2.5;
    } else if (x1a && x1a < 0.35) {
        x1a = 0.35;
    }
    if (x2a && x2a > 1.35) {
        x2a = 1.35;
    } else if (x2a && x2a < 0.7) {
        x2a = 0.7;
    }
    if (x3a && x3a > 6) {
        x3a = 6;
    } else if (x3a && x3a < 0.15) {
        x3a = 0.15;
    }
    if (x4a && x4a > 3.9) {
        x4a = 3.9;
    } else if (x4a && x4a < 0.26) {
        x4a = 0.26;
    }
    let x1 = Math.log10(x1a);
    let x2 = Math.log10(x2a);
    let x3 = Math.log10(x3a);
    let x4 = Math.log10(x4a);

    let p_a = 0;
    let p_ua = 0;

    let vectorX_a = [];
    let matrixV1_a = [];
    let vectorX_ua = [];
    let matrixV1_ua = [];

    let K_a = 0;
    let K_ua = 0;
    let cutoff = 0;

    if (x1a && x2a && x3a && x4a) {
        let x1_m_a = x1 - 0.204
        let x2_m_a = x2 - 0.057
        let x3_m_a = x3 - -0.236
        let x4_m_a = x4 - -0.215

        let x1_m_ua = x1 - 0;
        let x2_m_ua = x2 - 0;
        let x3_m_ua = x3 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 147.2964876;

        vectorX_a = [
            [x1_m_a],
            [x2_m_a],
            [x3_m_a],
            [x4_m_a],
        ];

        matrixV1_a = [
            [110.8712899, 35.1793844, 3.9486135, -6.6034119],
            [35.1793844, 789.1366121, -25.3760142, 26.7394789],
            [3.9486135, -25.3760142, 13.7538865, -9.8377717],
            [-6.6034119, 26.7394789, -9.8377717, 38.1701972],];

        p_ua = 111.6639677;

        vectorX_ua = [
            [x1_m_ua],
            [x2_m_ua],
            [x3_m_ua],
            [x4_m_ua],
        ];

        matrixV1_ua = [
            [65.3668045, 10.3819015, 3.3810211, 4.9951576],
            [10.3819015, 673.0239299, 2.267513, -0.4675958],
            [3.3810211, 2.267513, 14.2095171, -7.6072982],
            [4.9951576, -0.4675958, -7.6072982, 36.3518018],];
        cutoff = 170;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP, Uterine artery Doppler, PAPP-A and PlGF, the authors suggest that risks ≤170 should be considered at high risk of early-onset PE (detection rate of 90.9% at a 12.7% false positive rate)."
    } else if (x1a && x2a && x3a) { // sense plgf
        let x1_m_a = x1 - 0.204
        let x2_m_a = x2 - 0.057
        let x3_m_a = x3 - -0.236

        let x1_m_ua = x1 - 0;
        let x2_m_ua = x2 - 0;
        let x3_m_ua = x3 - 0;

        p_a = 59.761312;

        vectorX_a = [
            [x1_m_a],
            [x2_m_a],
            [x3_m_a],

        ];

        matrixV1_a = [
            [109.728905, 39.80529, 2.246687],
            [39.805292, 770.40473, -18.484331],
            [2.246687, -18.48433, 11.218355],];

        p_ua = 46.4237286;

        vectorX_ua = [
            [x1_m_ua],
            [x2_m_ua],
            [x3_m_ua],

        ];

        matrixV1_ua = [
            [64.680412, 10.44615, 4.426352],
            [10.446155, 673.01792, 2.169660],
            [4.426352, 2.16966, 12.617547],];
        cutoff = 137;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP, Uterine artery Doppler and PAPP-A, the authors suggest that risks ≤137 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 12.7% false positive rate)."
    } else if (x1a && x2a && x4a) { // sense pappa
        let x1_m_a = x1 - 0.204
        let x2_m_a = x2 - 0.057
        let x4_m_a = x4 - -0.215

        let x1_m_ua = x1 - 0;
        let x2_m_ua = x2 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 99.556497;

        vectorX_a = [
            [x1_m_a],
            [x2_m_a],
            [x4_m_a],

        ];

        matrixV1_a = [
            [109.737679, 42.464603, -3.779079],
            [42.464603, 742.317693, 8.588723],
            [-3.779079, -8.588723, 31.133513],];

        p_ua = 74.2528847;

        vectorX_ua = [
            [x1_m_ua],
            [x2_m_ua],
            [x4_m_ua],

        ];

        matrixV1_ua = [
            [64.562322, 9.8423680, 6.8052427],
            [9.842368, 672.6620869, 0.7463545],
            [6.805243, 0.7463545, 32.2791098],];
        cutoff = 226;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP, Uterine artery Doppler and PlGF, the authors suggest that risks ≤226 should be considered at high risk of early-onset PE (detection rate of 90.9% at a 15% false positive rate)."
    } else if (x4a && x2a && x3a) { // sense uterines              
        let x2_m_a = x2 - 0.057
        let x3_m_a = x3 - -0.236
        let x4_m_a = x4 - -0.215

        let x2_m_ua = x2 - 0;
        let x3_m_ua = x3 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 35.0649137;

        vectorX_a = [
            [x2_m_a],
            [x3_m_a],
            [x4_m_a],

        ];

        matrixV1_a = [
            [777.97422, -26.628906, 28.834737],
            [-26.62891, 13.613259, -9.602595],
            [28.83474, -9.602595, 37.776903],];

        p_ua = 34.6197847;

        vectorX_ua = [
            [x2_m_ua],
            [x3_m_ua],
            [x4_m_ua],

        ];

        matrixV1_ua = [
            [671.375022, 1.730521, -1.260953],
            [1.730521, 14.034638, -7.865667],
            [-1.260953, -7.865667, 35.970085],];
        cutoff = 102;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP, PAPP-A and PlGF, the authors suggest that risks ≤102 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 15% false positive rate)."
    } else if (x4a && x1a && x3a) { // sense map              
        let x1_m_a = x1 - 0.204

        let x3_m_a = x3 - -0.236
        let x4_m_a = x4 - -0.215

        let x1_m_ua = x1 - 0;

        let x3_m_ua = x3 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 13.1433547;

        vectorX_a = [
            [x1_m_a],
            [x3_m_a],
            [x4_m_a],

        ];

        matrixV1_a = [
            [109.303008, 5.079866, -7.795447],
            [5.079866, 12.937878, -8.977919],
            [-7.795447, -8.977919, 37.264144],];

        p_ua = 10.7891626;

        vectorX_ua = [
            [x1_m_ua],
            [x3_m_ua],
            [x4_m_ua],

        ];

        matrixV1_ua = [
            [65.206656, 3.346043, 5.002371],
            [3.346043, 14.201878, -7.605723],
            [5.002371, -7.605723, 36.351477],];
        cutoff = 476;
        document.getElementById("suggest_tx").innerHTML = "With the variables Uterine artery Doppler, PAPP-A and PlGF, the authors suggest that risks ≤476 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 20% false positive rate)."
    } else if (x1a && x2a) { // nomes UT i MAP              
        let x1_m_a = x1 - 0.204
        let x2_m_a = x2 - 0.057

        let x1_m_ua = x1 - 0;
        let x2_m_ua = x2 - 0;

        p_a = 44.7244981;

        vectorX_a = [
            [x1_m_a],
            [x2_m_a],
        ];

        matrixV1_a = [
            [109.27896, 43.50713],
            [43.50713, 739.94834],];

        p_ua = 32.7598942;

        vectorX_ua = [
            [x1_m_ua],
            [x2_m_ua],
        ];

        matrixV1_ua = [
            [63.127607, 9.685018],
            [9.685018, 672.644830],];
        cutoff = 279;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP and Uterine artery Doppler, the authors suggest that risks ≤279 should be considered at high risk of early-onset PE (detection rate of 81.8% at a 20% false positive rate)."
    } else if (x1a && x2a) { // nomes UT i PAPPA              
        let x1_m_a = x1 - 0.204
        let x3_m_a = x3 - -0.236

        let x1_m_ua = x1 - 0;
        let x3_m_ua = x3 - 0;

        p_a = 5.3969773;

        vectorX_a = [
            [x1_m_a],
            [x3_m_a],
        ];

        matrixV1_a = [
            [107.672244, 3.201736],
            [3.201736, 10.774860],];

        p_ua = 4.4855597;

        vectorX_ua = [
            [x1_m_ua],
            [x3_m_ua],
        ];

        matrixV1_ua = [
            [64.518274, 4.392676],
            [4.392676, 12.610552],];
        cutoff = 408;
        document.getElementById("suggest_tx").innerHTML = "With the variables Uterine artey Doppler and PAPP-A, the authors suggest that risks ≤1/408 should be considered at high risk of early-onset PE (detection rate of 63.6% at a 20% false positive rate)."
    } else if (x1a && x4a) { // nomes UT i plgf             
        let x1_m_a = x1 - 0.204
        let x4_m_a = x4 - -0.215

        let x1_m_ua = x1 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 9.1593496;

        vectorX_a = [
            [x1_m_a],
            [x4_m_a],
        ];

        matrixV1_a = [
            [107.3085, -4.27040],
            [-4.2704, 31.03414],];

        p_ua = 7.1763695;

        vectorX_ua = [
            [x1_m_ua],
            [x4_m_ua],
        ];

        matrixV1_ua = [
            [64.418309, 6.794322],
            [6.794322, 32.278282],];
        cutoff = 451;
        document.getElementById("suggest_tx").innerHTML = "With the variables Uterine artery Doppler and PlGF, the authors suggest that risks ≤451 should be considered at high risk of early-onset PE (detection rate of 81.8% at a 20% false positive rate)."
    } else if (x2a && x3a) { // nomes map i PAPPA             
        let x2_m_a = x2 - 0.057
        let x3_m_a = x3 - -0.236

        let x2_m_ua = x2 - 0;
        let x3_m_ua = x3 - 0;

        p_a = 14.3004444;

        vectorX_a = [
            [x2_m_a],
            [x3_m_a],
        ];

        matrixV1_a = [
            [755.96495, -19.29934],
            [-19.29934, 11.17235],];

        p_ua = 14.4691682;

        vectorX_ua = [
            [x2_m_ua],
            [x3_m_ua],
        ];

        matrixV1_ua = [
            [671.330818, 1.454786],
            [1.454786, 12.314633],];
        cutoff = 130;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP and PAPP-A, the authors suggest that risks ≤130 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 20% false positive rate)."
    } else if (x2a && x4a) { // nomes map i Plgf             
        let x2_m_a = x2 - 0.057
        let x4_m_a = x4 - -0.215

        let x2_m_ua = x2 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 23.8221884;

        vectorX_a = [
            [x2_m_a],
            [x4_m_a],
        ];

        matrixV1_a = [
            [725.88539, 10.05109],
            [10.05109, 31.00337],];

        p_ua = 23.1640073;

        vectorX_ua = [
            [x2_m_ua],
            [x4_m_ua],
        ];

        matrixV1_ua = [
            [671.1616419, -0.2910881],
            [-0.2910881, 31.5617978],];
        cutoff = 95;
        document.getElementById("suggest_tx").innerHTML = "With the variables MAP and PlGF, the authors suggest that risks ≤95 should be considered at high risk of early-onset PE (detection rate of 81.8% at a 15% false positive rate)."
    } else if (x3a && x4a) { // nomes pappa i Plgf             
        let x3_m_a = x3 - -0.236
        let x4_m_a = x4 - -0.215

        let x3_m_ua = x3 - 0;
        let x4_m_ua = x4 - 0;

        p_a = 3.15123;

        vectorX_a = [
            [x3_m_a],
            [x4_m_a],
        ];

        matrixV1_a = [
            [12.701791, -8.615625],
            [-8.615625, 36.708176],];

        p_ua = 3.3491277;

        vectorX_ua = [
            [x3_m_ua],
            [x4_m_ua],
        ];

        matrixV1_ua = [
            [14.030177, -7.862417],
            [-7.862417, 35.967717],];
        cutoff = 542;
        document.getElementById("suggest_tx").innerHTML = "With the variables PAPP-A and PlGF, the authors suggest that risks ≤542 should be considered at high risk of early-onset PE (detection rate of 63.6% at a 30% false positive rate)."
    } else if (x1a) { // nomes UT 
        let x = x1; // Math.log10(document.getElementById("meanutm").value);
        p_a = 4.1213045;
        p_ua = 3.1662086;

        K_a = ((x - 0.204) / 0.0968) * ((x - 0.204) / 0.0968);
        K_ua = (x / 0.126) * (x / 0.126);
        cutoff = 642;
        document.getElementById("suggest_tx").innerHTML = "With the variable Uterine artery Doppler, the authors suggest that risks ≤1/642 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 30% false positive rate)."
    } else if (x2a) { // nomes MAP   
        let x = x2; //Math.log10(document.getElementById("mapm").value);
        p_a = 10.7242548;
        p_ua = 10.3352922;

        K_a = ((x - 0.057) / 0.0372) * ((x - 0.057) / 0.0372);
        K_ua = (x / 0.0386) * (x / 0.0386);
        cutoff = 146;
        document.getElementById("suggest_tx").innerHTML = "With the variable MAP, the authors suggest that risks ≤146 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 25% false positive rate)."
    } else if (x3a) { // nomes PAPPA  
        let x = x3; //Math.log10(document.getElementById("pappam").value);
        p_a = 2.216346;
        p_ua = 2.2412488;

        K_a = ((x + 0.236) / 0.306) * ((x + 0.236) / 0.306);
        K_ua = (x / 0.285) * (x / 0.285);
        cutoff = 345;
        document.getElementById("suggest_tx").innerHTML = "With the variable PAPP-A, the authors suggest that risks ≤345 should be considered at high risk of early-onset PE (detection rate of 54.5% at a 15% false positive rate)."
    } else if (x4a) { // nomes Plgf  
        let x = x4; // Math.log10(document.getElementById("plgfm").value);
        p_a = 1.3037329;
        p_ua = 1.3997975;

        K_a = ((x + 0.215) / 0.18) * ((x + 0.215) / 0.18);
        K_ua = (x / 0.178) * (x / 0.178);
        cutoff = 476;
        document.getElementById("suggest_tx").innerHTML = "With the variable PlGF, the authors suggest that risks ≤476 should be considered at high risk of early-onset PE (detection rate of 72.7% at a 30% false positive rate)."
    }
    if (((x1a && x2a) || (x3a && x4a) || (x1a && x4a) || (x2a && x3a)) && document.getElementById("etnia").value != "none") {
        K_a = math.multiply(math.multiply(math.transpose(vectorX_a), matrixV1_a), vectorX_a)
        let q_a = Math.exp((-1 / 2) * K_a);
        let f_a = p_a * q_a;

        K_ua = math.multiply(math.multiply(math.transpose(vectorX_ua), matrixV1_ua), vectorX_ua)
        let q_ua = Math.exp((-1 / 2) * K_ua);
        let f_ua = p_ua * q_ua;
        let lr = f_a / f_ua;
        let finalodds = (lrprior * lr);
        let finalrisk = 1 / (finalodds / (1 + finalodds));

        document.getElementById("risk_tx").innerHTML = "1:" + Math.round(finalrisk);
        if (Math.round(finalrisk) > cutoff) {
            document.getElementById("riskcut_tx").innerHTML = "Low risk";
            document.getElementById("riskcut_tx").style.color = 'green';
        } else {
            document.getElementById("riskcut_tx").innerHTML = "High risk";
            document.getElementById("riskcut_tx").style.color = 'red';
        }
    } else if ((x1a || x2a || x3a || x4a) && document.getElementById("etnia").value != "none") {
        let q_a = Math.exp((-1 / 2) * K_a);
        let f_a = p_a * q_a;

        let q_ua = Math.exp((-1 / 2) * K_ua);
        let f_ua = p_ua * q_ua;
        let lr = f_a / f_ua;
        let finalodds = (lrprior * lr);
        let finalrisk = 1 / (finalodds / (1 + finalodds));

        document.getElementById("risk_tx").innerHTML = "1:" + Math.round(finalrisk);
        if (Math.round(finalrisk) > cutoff) {
            document.getElementById("riskcut_tx").innerHTML = "Low risk"
            document.getElementById("riskcut_tx").style.color = 'green';
        } else {
            document.getElementById("riskcut_tx").innerHTML = "High risk"
            document.getElementById("riskcut_tx").style.color = 'red';
        }
    } else {
        document.getElementById("risk_tx").innerHTML = "";
        document.getElementById("riskcut_tx").innerHTML = ""
        alert("A value from at least one variable is needed to calculate the risk.");
    }
}

var select_pappam = 0;
var select_pappar = 0;
var select_plgfm = 0;
var select_plgfr = 0;
var select_mapm = 0;
var select_mapr = 0;
var select_utm = 0;
var select_utr = 0;

$(document).ready(function () {
    $("input[name='inlineRadioOptions']").click(function () {
        var checkedValue = $("input[name='inlineRadioOptions']:checked").val();
        if (checkedValue == "option1") {
            $("#collapseOne").collapse('hide');
            $("#collapseOneb").collapse('hide');
            select_pappam = 0;
            select_pappar = 0;
        } else if (checkedValue == "option2") {
            $("#collapseOne").collapse('show');
            $("#collapseOneb").collapse('hide');
            select_pappam = 1;
            select_pappar = 0;
        } else if (checkedValue == "option3") {
            $("#collapseOneb").collapse('show');
            $("#collapseOne").collapse('hide');
            select_pappam = 0;
            select_pappar = 1;
        }
        evaluaselect();
        document.getElementById("pappam").value = "";
        document.getElementById("pappa").value = "";
        document.getElementById("pappam_tx").innerHTML = "";
    });
    $("input[name='inlineRadioOptionsf']").click(function () {
        var checkedValue = $("input[name='inlineRadioOptionsf']:checked").val();
        if (checkedValue == "option1") {
            $("#collapseTwo").collapse('hide');
            $("#collapseTwob").collapse('hide');
            select_plgfm = 0;
            select_plgfr = 0;
        } else if (checkedValue == "option2") {
            $("#collapseTwo").collapse('show');
            $("#collapseTwob").collapse('hide');
            select_plgfm = 1;
            select_plgfr = 0;
        } else if (checkedValue == "option3") {
            $("#collapseTwob").collapse('show');
            $("#collapseTwo").collapse('hide');
            select_plgfm = 0;
            select_plgfr = 1;
        }
        evaluaselect();
        document.getElementById("plgf").value = "";
        document.getElementById("plgfm").value = "";
        document.getElementById("plgfm_tx").innerHTML = "";
    });

    $("input[name='inlineRadioOptionso']").click(function () {
        var checkedValue = $("input[name='inlineRadioOptionso']:checked").val();

        if (checkedValue == "option1") {
            $("#collapseTres").collapse('hide');
            $("#collapseTresb").collapse('hide');
            select_mapm = 0;
            select_mapr = 0;
        } else if (checkedValue == "option2") {
            $("#collapseTres").collapse('show');
            $("#collapseTresb").collapse('hide');
            select_mapm = 1;
            select_mapr = 0;
        } else if (checkedValue == "option3") {
            $("#collapseTresb").collapse('show');
            $("#collapseTres").collapse('hide');
            select_mapm = 0;
            select_mapr = 1;
        }
        evaluaselect2();
        document.getElementById("mapm").value = "";
        document.getElementById("map").value = "";
        document.getElementById("tas").value = "";
        document.getElementById("tad").value = "";
        document.getElementById("mapm_tx").innerHTML = "";
    });
    $("input[name='inlineRadioOptionss']").click(function () {
        var checkedValue = $("input[name='inlineRadioOptionss']:checked").val();

        if (checkedValue == "option1") {
            $("#collapseFour").collapse('hide');
            $("#collapseFourb").collapse('hide');
            select_utm = 0;
            select_utr = 0;
            document.getElementById("meanutm").value = "";
        } else if (checkedValue == "option2") {
            $("#collapseFour").collapse('show');
            $("#collapseFourb").collapse('hide');
            select_utm = 1;
            select_utr = 0;
        } else if (checkedValue == "option3") {
            $("#collapseFourb").collapse('show');
            $("#collapseFour").collapse('hide');
            select_utm = 0;
            select_utr = 1;
            document.getElementById("meanutm").value = "";
        }
        evaluaselect2();
        document.getElementById("meanut").value = "";
        document.getElementById("meanutm").value = "";
        document.getElementById("esquerra").value = "";
        document.getElementById("dreta").value = "";
        document.getElementById("meanutm_tx").innerHTML = "";

    });

});
function evaluaselect() {
    if (select_pappar + select_plgfr > 0) {
        $("#datasang").collapse('show');
    } else {
        $("#datasang").collapse('hide');
    }
    evaluaselect3();
}
function evaluaselect2() {
    if (select_mapr + select_utr > 0) {
        $("#dataeco").collapse('show');
    } else {
        $("#dataeco").collapse('hide');
    }
    evaluaselect3();
}
function evaluaselect3() {
    if (select_mapr + select_utr + select_pappar + select_plgfr > 0) {
        $("#needpes").collapse('show');
    } else {
        $("#needpes").collapse('hide');
    }
}



