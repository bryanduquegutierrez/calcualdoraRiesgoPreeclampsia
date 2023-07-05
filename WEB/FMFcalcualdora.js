function gestacional_riesgo_preeclampsia_I_TM() {
    let texto = document.getElementById("resultadoFMF");
    let e = document.getElementById("select_paridad").value;
    let t = document.getElementById("select_PEprevia").value;
    let a = document.getElementById("select_hipertension").value;
    let s = document.getElementById("select_enf_renal").value;
    let r = document.getElementById("select_coagulopatia").value;
    let l = document.getElementById("select_diabetes").value;
    let o = document.getElementById("select_etnia").value;
    let i = document.getElementById("RP_EDAD").value;
    let n = document.getElementById("RP_Altura").value;
    let u = document.getElementById("pes").value;
    let d = document.getElementById("RP_CRL").value;
    let m = document.getElementById("pappam").value;
    let p = document.getElementById("tas").value;
    let c = document.getElementById("tad").value;
    let _ = document.getElementById("meanutm").value;
    
    if (12 > i || i > 55 || "" == i)
        alert("Edad fuera de rango");
    else if (n > 200 || 100 > n || "" == n)
        alert("Altura fuera de rango (cm)");
    else if (35 > u || u > 150 || "" == u)
        alert("Peso fuera de rango ");
    else if (d > 85 || 45 > d || "" == d)
        alert("CRL fuera de rango  (mm)");
    else if (m > 10 || .1 > m)
        alert("MoMs PAPP_A fuera de rango (mm)");
    else if (p > 200 || 60 > p || "" == p)
        alert("Presión sistólica fuera de rango (mmHg)");
    else if (c > 120 || 30 > c || "" == c)
        alert("Presión diatólica fuera de rango (mmHg)");
    else if (_ > 5 || .3 > _ || "" == _)
        alert("Media UTAPI fuera de rango ");
    else {
        switch (peant_txt = t,
        hta_txt = a,
        para_txt = e,
        nfr_txt = s,
        coag_txt = r,
        dm_txt = l,
        et_txt = o,
        Number(para_txt)) {
        case 0:
            parat_txt = "Nullipara";
            break;
        case 1:
            parat_txt = "Multipara"
        }
        switch (Number(para_txt)) {
        case 0:
            paratt_txt = "Nullipara";
            break;
        case 1:
            paratt_txt = "Multipara"
        }
        switch (Number(peant_txt)) {
        case 0:
            peantt_txt = "No";
            break;
        case 1:
            peantt_txt = "Yes"
        }
        switch (Number(peant_txt)) {
        case 0:
            peanttt_txt = "No";
            break;
        case 1:
            peanttt_txt = "Yes"
        }
        switch (Number(hta_txt)) {
        case 0:
            htat_txt = "No";
            break;
        case 1:
            htat_txt = "Yes"
        }
        switch (Number(hta_txt)) {
        case 0:
            htatt_txt = "No";
            break;
        case 1:
            htatt_txt = "Yes"
        }
        switch (Number(nfr_txt)) {
        case 0:
            nfrt_txt = "No";
            break;
        case 1:
            nfrt_txt = "Yes"
        }
        switch (Number(nfr_txt)) {
        case 0:
            nfrtt_txt = "No";
            break;
        case 1:
            nfrtt_txt = "Yes"
        }
        switch (Number(coag_txt)) {
        case 0:
            coagt_txt = "No";
            break;
        case 1:
            coagt_txt = "Yes"
        }
        switch (Number(coag_txt)) {
        case 0:
            coagtt_txt = "No";
            break;
        case 1:
            coagtt_txt = "Yes"
        }
        switch (Number(dm_txt)) {
        case 0:
            dmt_txt = "No";
            break;
        case 1:
            dmt_txt = "Yes"
        }
        switch (Number(dm_txt)) {
        case 0:
            dmtt_txt = "No";
            break;
        case 1:
            dmtt_txt = "Yes"
        }
        switch (Number(et_txt)) {
        case 0:
            ett_txt = "Non South American";
            break;
        case 1:
            ett_txt = "South American"
        }
        Number(m) > 0 ? papa_txt = Number(m) : papa_txt = 1,
        Number(i) > 0 ? edadt_txt = Number(i) : edadt_txt = "",
        bmi = u / (n / 100 * (n / 100)),
        map = 2 * Number(c) / 3 + Number(p) / 3,
        map2 = Math.log(map) / Math.LN10,
        exput_txt = .668018 - .002772 * Number(d) - .001536 * Number(n) - .001151 * Number(i),
        momexput_txt = Math.log(Number(_)) / Math.LN10 - Number(exput_txt),
        expmap_txt = 1.803485 + .00299 * Number(bmi) + 645e-6 * Number(i) - .00421 * Number(et_txt),
        momexpmap_txt = Math.log(map) / Math.LN10 - Number(expmap_txt),
        earlyaprioriy_txt = -5.617 + 2.659 * Number(peant_txt) + 1.729 * Number(hta_txt) + 3.765 * Number(nfr_txt),
        earlyapriorir_txt = Math.pow(2.71828182845904, Number(earlyaprioriy_txt)) / (1 + Math.pow(2.71828182845904, Number(earlyaprioriy_txt))),
        lateaprioriy_txt = -6.135 + 2.124 * Number(peant_txt) + 1.571 * Number(hta_txt) + .958 * Number(dm_txt) + 1.416 * Number(coag_txt) - .487 * Number(para_txt) + .093 * Number(bmi),
        lateapriorir_txt = Math.pow(2.71828182845904, Number(lateaprioriy_txt)) / (1 + Math.pow(2.71828182845904, Number(lateaprioriy_txt))),
        earlyaposterioriy_txt = -.363 + 2.653 * (Math.log(Number(earlyapriorir_txt)) / Math.LN10) + 12.88 * Number(momexput_txt) + 25.915 * Number(momexpmap_txt),
        earlyaposteriorir_txt = Math.pow(2.71828182845904, Number(earlyaposterioriy_txt)) / (1 + Math.pow(2.71828182845904, Number(earlyaposterioriy_txt))),
        lateaposterioriy_txt = .328 + 2.205 * (Math.log(Number(lateapriorir_txt)) / Math.LN10) - 1.307 * (Math.log(Number(papa_txt)) / Math.LN10),
        lateaposteriorir_txt = Math.pow(2.71828182845904, Number(lateaposterioriy_txt)) / (1 + Math.pow(2.71828182845904, Number(lateaposterioriy_txt))),
        early_txt = Math.round(3 / Number(earlyaposteriorir_txt)),
        late_txt = Math.round(Number(lateaposteriorir_txt)),
        early = Math.round(3 / Number(earlyaposteriorir_txt)),
        late = Math.round(3 / Number(lateaposteriorir_txt)),
        overall = Math.round(1 / (Number(earlyaposteriorir_txt) + Number(lateaposteriorir_txt))),
       // $("#RP_riesgo_PE_Precoz").val("1 :" + early)

     


       texto.innerHTML = " 1:" + early + " de probabilidad de desarrollar preeclampsia durante el embarazo";

    
       if(early>10){
        document.getElementById("riskFMF").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
        document.getElementById("riskFMF").style.color = 'green';
       }else{
        document.getElementById("riskFMF").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
        document.getElementById("riskFMF").style.color = 'red';
       }

    }
}
