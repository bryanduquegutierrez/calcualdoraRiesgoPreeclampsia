function miniPIERS(){  
    
let semanas = Number(document.getElementById("semanas").value);
let dias = Number(document.getElementById("dias").value);
let presion = document.getElementById("presion").value;
//let oxigeno = document.getElementById("oxigeno").value;
let multiple = document.getElementById("multiple").value;
let sangrado = document.getElementById("sangrado").value;
let dolor = document.getElementById("dolor").value;
let pecho = document.getElementById("pecho").value;
let nivelProteina = document.getElementById("nivelProteina").value
let texto = document.getElementById("resultado");

let tiempo = semanas + dias/7;

console.log(tiempo);



    // Coeficientes
    const β0 = -5.77;
    const β1 = -2.98e-1;
    const β2 = -1.07;
    const β3 = 1.34;
    const β4 = -2.18e-1;
    const β5 = 4.24e-1;
    const β6 = 5.12e-1;
    const β7 = 1.18;
    const β8 = 4.22e-1;
    const β9 = 8.47e-1;
    //const β10 = 0.42;


    let sangradoValor;
    let dolorValor;
    let pechoValor;
    let probabilidades;
   

    
    if(sangrado == "Sí"){
        sangradoValor = 1;
    }else{
        sangradoValor = 0;
    }

    if(dolor == "Sí"){
        dolorValor = 1;
    }else{
        dolorValor = 0;
    }

    if(pecho == "Sí"){
        pechoValor = 1;
    }else{
        pechoValor = 0;
    }

    if(nivelProteina == "1"){
        let dos = 0;
        let tres =0;
        let cuatro=0;
        if(multiple == "Sí"){
            const logOdds = β0 + β1  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor  ;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }

      
        }else{
            const logOdds = β0   + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor + β10;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)
            primerNumero = Math.round(resultado/resultado)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }
          
        }
    }
    
    if(nivelProteina == "2"){
        let dos = 1;
        let tres =0;
        let cuatro=0;
        if(multiple == "Sí"){
            const logOdds = β0 + β1  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)
            primerNumero = Math.round(resultado/resultado)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }

      
        }else{
            const logOdds = β0   + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)
            primerNumero = Math.round(resultado/resultado)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }
          
        }
        
    }
    if(nivelProteina == "3"){
        let dos =0;
        let tres = 1;
        let cuatro=0;
        if(multiple == "Sí"){
            const logOdds = β0 + β1  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)
            primerNumero = Math.round(resultado/resultado)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }
           
        }else{
            const logOdds = β0  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
        resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
        resultado = resultado *100
        resultado = resultado.toFixed(2)
        primerNumero = Math.round(resultado/resultado)
        probabilidades = Math.round(100/resultado)
        console.log(resultado);
        texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

        if(probabilidades>10){
            document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
            document.getElementById("riskminiPIERS").style.color = 'green';
           }else{
            document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
            document.getElementById("riskminiPIERS").style.color = 'red';
           }
     
        }
        
    }
      if(nivelProteina == "4"){
        let dos =0;
        let tres =0;
        let cuatro = 1;
        if(multiple == "Sí"){
            const logOdds = β0 + β1  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
            resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
            resultado = resultado *100
            resultado = resultado.toFixed(2)

            primerNumero = Math.round(resultado/resultado)
            probabilidades = Math.round(100/resultado)
            console.log(resultado);
            texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

            if(probabilidades>10){
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'green';
               }else{
                document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
                document.getElementById("riskminiPIERS").style.color = 'red';
               }
            
        }else{
            const logOdds = β0  + β2 * Math.log(tiempo) + β3 * Math.log(presion) + β4 * dos + β5 * tres + β6 * cuatro + β7 * sangradoValor + β8 * dolorValor + β9 * pechoValor;
        resultado = Math.exp(logOdds) / (1 + Math.exp(logOdds));
        resultado = resultado *100
         resultado = resultado.toFixed(2)

        primerNumero = Math.round(resultado/resultado)
        probabilidades = Math.round(100/resultado)
        console.log(resultado);
        texto.innerHTML = "1:" +probabilidades+ " de probabilidad de desarrollar preeclapsia durante el embarazo";

        if(probabilidades>10){
            document.getElementById("riskminiPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
            document.getElementById("riskminiPIERS").style.color = 'green';
           }else{
            document.getElementById("riskminiPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
            document.getElementById("riskminiPIERS").style.color = 'red';
           }

        
        
        }
    }
    
  }

  