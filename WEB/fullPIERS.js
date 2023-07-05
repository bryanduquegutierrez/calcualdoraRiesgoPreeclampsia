
      function fullPIERS() {
    
        const semanas = Number(document.getElementById("semanas").value);
        const dias = Number(document.getElementById("dias").value);
        let edadGestacional = semanas + dias/7;
        const disnea = document.getElementById('disnea').value === 'Sí' ? 1 : 0;
        const creatinina = parseFloat(document.getElementById('creatinina').value);
        const plaquetas = parseFloat(document.getElementById('plaquetas').value);
        const ast = parseFloat(document.getElementById('AST').value);
        const oxigeno = parseFloat(document.getElementById('oxigeno').value);
        let resultado =  document.getElementById('resultadoFullPIERS');
        
        console.log(edadGestacional);
        //coeficientes 
        const coeficientes = {
          constante: 2.68,
          edadGestacionalFactor: -5.41 * Math.pow(10, -2),
          disneaFactor: 1.23,
          creatininaFactor: -2.71 * Math.pow(10, -2),
          plaquetasFactor: 2.07 * Math.pow(10, -1),
          plaquetasSquaredFactor: 4.00 * Math.pow(10, -5),
          astFactor: 1.01 * Math.pow(10, -2),
          astSquaredFactor: -3.05 * Math.pow(10, -6),
          creatininaPlateletFactor: 2.50 * Math.pow(10, -4),
          plateletAstFactor: -6.99 * Math.pow(10, -5),
          plaquetaoxigenoFactor: -2.56 * Math.pow(10, -3)
        };
      
  
        const logit = coeficientes.constante +
          coeficientes.edadGestacionalFactor * edadGestacional +
          coeficientes.disneaFactor * disnea +
          coeficientes.creatininaFactor * creatinina +
          coeficientes.plaquetasFactor * plaquetas +
          coeficientes.plaquetasSquaredFactor * Math.pow(plaquetas, 2) +
          coeficientes.astFactor * ast +
          coeficientes.astSquaredFactor * Math.pow(ast, 2) +
          coeficientes.creatininaPlateletFactor * creatinina * plaquetas +
          coeficientes.plateletAstFactor * plaquetas * ast +
          coeficientes.plaquetaoxigenoFactor * plaquetas * oxigeno;
      
   
        const riskProbability = 1 / (1 + Math.exp(-logit));
        console.log(1 + Math.exp(-logit));
        probabilidad = Math.round(1 + Math.exp(-logit));
      
        resultado.innerHTML = "1:" + probabilidad +" de desarrollar preeclampsia durnate el embarazo";

        if(probabilidad>10){
            document.getElementById("riskFullPIERS").innerHTML = "Riesgo bajo de desarrollo de preeclampsia";
            document.getElementById("riskFullPIERS").style.color = 'green';
           }else{
            document.getElementById("riskFullPIERS").innerHTML = "Riesgo alto de desarrollo de preeclampsia";
            document.getElementById("riskFullPIERS").style.color = 'red';
           }
      }
      
