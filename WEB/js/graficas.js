
$(document).ready(function() {


var ejeXLancet = [];

var averagesGregorioVaronLancet = [];
var rangesGregorioVaronLancet = [];
var averagesGregorioMujerLancet = [];
var rangesGregorioMujerLancet = [];

var averagesGregorioVaronLancet2 = [];
var rangesGregorioVaronLancet2 = [];
var averagesGregorioMujerLancet2 = [];
var rangesGregorioMujerLancet2 = [];

var rangesBarcelonaVaronLancet = [];
var averagesBarcelonaVaronLancet = [];
var rangesBarcelonaMujerLancet = [];
var averagesBarcelonaMujerLancet = [];

var rangesTalaveraVaronLancet = [];
var averagesTalaveraVaronLancet = [];
var rangesTalaveraMujerLancet = [];
var averagesTalaveraMujerLancet = [];

var averagesFuenlabradaVaronLancet = [];
var averagesFuenlabradaMujerLancet = [];
var rangesFuenlabradaVaronLancet = [];
var rangesFuenlabradaMujerLancet = [];


var averagesManchaCentroVaronLancet = [];
var averagesManchaCentroMujerLancet = [];
var rangesManchaCentroVaronLancet = [];
var rangesManchaCentroMujerLancet = [];
 
 

 
 
ejeXLancet = ['20+0','20+1','20+2','20+3','20+4','20+5','20+6',
'21+0','21+1','21+2','21+3','21+4','21+5','21+6',
'22+0','22+1','22+2','22+3','22+4','22+5','22+6',
'23+0','23+1','23+2','23+3','23+4','23+5','23+6',
'24+0','24+1','24+2','24+3','24+4','24+5','24+6',
'25+0','25+1','25+2','25+3','25+4','25+5','25+6',
'26+0','26+1','26+2','26+3','26+4','26+5','26+6',
'27+0','27+1','27+2','27+3','27+4','27+5','27+6',
'28+0','28+1','28+2','28+3','28+4','28+5','28+6',
'29+0','29+1','29+2','29+3','29+4','29+5','29+6',
'30+0','30+1','30+2','30+3','30+4','30+5','30+6',
'31+0','31+1','31+2','31+3','31+4','31+5','31+6',
'32+0','32+1','32+2','32+3','32+4','32+5','32+6',
'33+0','33+1','33+2','33+3','33+4','33+5','33+6',
'34+0','34+1','34+2','34+3','34+4','34+5','34+6',
'35+0','35+1','35+2','35+3','35+4','35+5','35+6',
'36+0','36+1','36+2','36+3','36+4','36+5','36+6',
'37+0','37+1','37+2','37+3','37+4','37+5','37+6',
'38+0','38+1','38+2','38+3','38+4','38+5','38+6',
'39+0','39+1','39+2','39+3','39+4','39+5','39+6',
'40+0','40+1','40+2','40+3','40+4','40+5','40+6']
 
for(var i=140, j = 0; i<=286; i++, j++) {

//	var x = (i/7) + "+" + (i%7);


	
	var GregorioVaronLancet = new Gregorio_zs(1, i/7, "varon");
    rangesGregorioVaronLancet.push([ejeXLancet[j], GregorioVaronLancet.p10, GregorioVaronLancet.p90]);   
    averagesGregorioVaronLancet.push([ejeXLancet[j], GregorioVaronLancet.media_esperada]);
		
	var GregorioMujerLancet = new Gregorio_zs(1, i/7, "mujer");
    rangesGregorioMujerLancet.push([ejeXLancet[j], GregorioMujerLancet.p10, GregorioMujerLancet.p90]);   
    averagesGregorioMujerLancet.push([ejeXLancet[j], GregorioMujerLancet.media_esperada]);

	
	var GregorioVaronLancet2 = new Gregorio2_zs(1, i/7, "varon");
    rangesGregorioVaronLancet2.push([ejeXLancet[j], GregorioVaronLancet2.p10, GregorioVaronLancet2.p90]);   
    averagesGregorioVaronLancet2.push([ejeXLancet[j], GregorioVaronLancet2.media_esperada]);
		
	var GregorioMujerLancet2 = new Gregorio2_zs(1, i/7, "mujer");
    rangesGregorioMujerLancet2.push([ejeXLancet[j], GregorioMujerLancet2.p10, GregorioMujerLancet2.p90]);   
    averagesGregorioMujerLancet2.push([ejeXLancet[j], GregorioMujerLancet2.media_esperada]);
	
	
	var BarcelonaVaronLancet = new Barcelona_zs(1, i/7, "varon");	
    rangesBarcelonaVaronLancet.push([ejeXLancet[j], BarcelonaVaronLancet.p10, BarcelonaVaronLancet.p90]);   
    averagesBarcelonaVaronLancet.push([ejeXLancet[j], BarcelonaVaronLancet.media_esperada]);
	
	var BarcelonaMujerLancet = new Barcelona_zs(1, i/7, "mujer");	
    rangesBarcelonaMujerLancet.push([ejeXLancet[j], BarcelonaMujerLancet.p10, BarcelonaMujerLancet.p90]);   
    averagesBarcelonaMujerLancet.push([ejeXLancet[j], BarcelonaMujerLancet.media_esperada]);
	
	
	var TalaveraVaronLancet = new Talavera_zs(1, i/7, "varon");	
    rangesTalaveraVaronLancet.push([ejeXLancet[j], TalaveraVaronLancet.p10, TalaveraVaronLancet.p90]);   
    averagesTalaveraVaronLancet.push([ejeXLancet[j], TalaveraVaronLancet.media_esperada]);
	
	var TalaveraMujerLancet = new Talavera_zs(1, i/7, "mujer");	
    rangesTalaveraMujerLancet.push([ejeXLancet[j], TalaveraMujerLancet.p10, TalaveraMujerLancet.p90]);   
    averagesTalaveraMujerLancet.push([ejeXLancet[j], TalaveraMujerLancet.media_esperada]);

	var FuenlabradaVaronLancet = new Fuenlabrada_zs(1, i/7, "varon");
    rangesFuenlabradaVaronLancet.push([ejeXLancet[j], FuenlabradaVaronLancet.p10, FuenlabradaVaronLancet.p90]);   
    averagesFuenlabradaVaronLancet.push([ejeXLancet[j], FuenlabradaVaronLancet.media_esperada]);
		
	var FuenlabradaMujerLancet = new Fuenlabrada_zs(1, i/7, "mujer");
    rangesFuenlabradaMujerLancet.push([ejeXLancet[j], FuenlabradaMujerLancet.p10, FuenlabradaMujerLancet.p90]);   
    averagesFuenlabradaMujerLancet.push([ejeXLancet[j], FuenlabradaMujerLancet.media_esperada]);

	var ManchaCentroVaronLancet = new Mancha_Centro_zs(1, i/7, "varon");	
    rangesManchaCentroVaronLancet.push([ejeXLancet[j], ManchaCentroVaronLancet.p10, ManchaCentroVaronLancet.p90]);   
    averagesManchaCentroVaronLancet.push([ejeXLancet[j], ManchaCentroVaronLancet.media_esperada]);
	
	var ManchaCentroMujerLancet = new Mancha_Centro_zs(1, i/7, "mujer");	
    rangesManchaCentroMujerLancet.push([ejeXLancet[j], ManchaCentroMujerLancet.p10, ManchaCentroMujerLancet.p90]);   
    averagesManchaCentroMujerLancet.push([ejeXLancet[j], ManchaCentroMujerLancet.media_esperada]);
	
	
	
	
  
} 



    $('#containerLancet').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'gr.',
			valueDecimals: 0
        },

        legend: {
        },
        series: [
		{
            name: 'p50 HUGH niño',
            data: averagesGregorioVaronLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 , {
            name: 'p10-p90 HUGH niño',
            data: rangesGregorioVaronLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 HUGH niña',
            data: averagesGregorioMujerLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 , {
            name: 'p10-p90 HUGH niña',
            data: rangesGregorioMujerLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		 ,
		{
            name: 'p50 HUGH2 niño',
            data: averagesGregorioVaronLancet2,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		 , {
            name: 'p10-p90 HUGH2 niño',
            data: rangesGregorioVaronLancet2,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 HUGH2 niña',
            data: averagesGregorioMujerLancet2,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		 , {
            name: 'p10-p90 HUGH2 niña',
            data: rangesGregorioMujerLancet2,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		/*,
		{
            name: 'p50 Barcelona niño',
            data: averagesBarcelonaVaronLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		 , {
            name: 'p10-p90 Barcelona niño',
            data: rangesBarcelonaVaronLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Barcelona niña',
            data: averagesBarcelonaMujerLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		 , {
            name: 'p10-p90 Barcelona niña',
            data: rangesBarcelonaMujerLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        } */
		,
		{
            name: 'p50 Talavera niño',
            data: averagesTalaveraVaronLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            }
         }
		 , {
            name: 'p10-p90 Talavera niño',
            data: rangesTalaveraVaronLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Talavera niña',
            data: averagesTalaveraMujerLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            }
         }
		 , {
            name: 'p10-p90 Talavera niña',
            data: rangesTalaveraMujerLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Fuenlabrada niño',
            data: averagesFuenlabradaVaronLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4]
            }
         }
		 , {
            name: 'p10-p90 Fuenlabrada niño',
            data: rangesFuenlabradaVaronLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[4],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Fuenlabrada niña',
            data: averagesFuenlabradaMujerLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4]
            }
         }
		 , {
            name: 'p10-p90 Fuenlabrada niña',
            data: rangesFuenlabradaMujerLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[4],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Alcázar de San Juan niño',
            data: averagesManchaCentroVaronLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
         }
		 , {
            name: 'p10-p90 Alcázar de San Juan niño',
            data: rangesManchaCentroVaronLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        }
/* 		,
		{
            name: 'p50 Alcázar de San Juan niña',
            data: averagesManchaCentroMujerLancet,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
         }
		 , {
            name: 'p10-p90 Alcázar de San Juan niña',
            data: rangesManchaCentroMujerLancet,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
			color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        } */
		]
    });
	
	
	
	
	
	
	
	
var ejeX = [];

var averagesGregorioVaron = [];
 var rangesGregorioVaron = [];
 var rangesBarcelonaVaron = [];
var averagesBarcelonaVaron = [];

var averagesGregorioMujer = [];
 var rangesGregorioMujer = [];
 var rangesBarcelonaMujer = [];
var averagesBarcelonaMujer = [];

var averagesGregorioVaron_gemelos = [];
 var rangesGregorioVaron_gemelos = [];
 var rangesBarcelonaVaron_gemelos = [];
var averagesBarcelonaVaron_gemelos = [];

var averagesGregorioMujer_gemelos = [];
 var rangesGregorioMujer_gemelos = [];
 var rangesBarcelonaMujer_gemelos = [];
var averagesBarcelonaMujer_gemelos = [];
 
for(var i=140, j=0; i<=286; i++, j++) {



    rangesBarcelonaVaron.push([ejeXLancet[j], clinic_p10(1, "varon", i/7), clinic_p90(1, "varon", i/7)]);   
    averagesBarcelonaVaron.push([ejeXLancet[j], clinic_p50(1, "varon", i/7)]);
	
    rangesGregorioVaron.push([ejeXLancet[j], gregorio_p10("varon", i/7), gregorio_p90("varon", i/7)]);   
    averagesGregorioVaron.push([ejeXLancet[j], gregorio_p50("varon", i/7)]);
	

    rangesBarcelonaMujer.push([ejeXLancet[j], clinic_p10(1, "mujer", i/7), clinic_p90(1, "mujer", i/7)]);   
    averagesBarcelonaMujer.push([ejeXLancet[j], clinic_p50(1, "mujer", i/7)]);
	

    rangesGregorioMujer.push([ejeXLancet[j], gregorio_p10("mujer", i/7), gregorio_p90("mujer", i/7)]);   
    averagesGregorioMujer.push([ejeXLancet[j], gregorio_p50("mujer", i/7)]);
	
	
	
	
    rangesBarcelonaVaron_gemelos.push([ejeXLancet[j], clinic_p10_gemelos(1, "varon", i/7), clinic_p90_gemelos(1, "varon", i/7)]);   
    averagesBarcelonaVaron_gemelos.push([ejeXLancet[j], clinic_p50_gemelos(1, "varon", i/7)]);
	
    rangesGregorioVaron_gemelos.push([ejeXLancet[j], gregorio_p10_gemelos("varon", i/7), gregorio_p90_gemelos("varon", i/7)]);   
    averagesGregorioVaron_gemelos.push([ejeXLancet[j], gregorio_p50_gemelos("varon", i/7)]);
	

    rangesBarcelonaMujer_gemelos.push([ejeXLancet[j], clinic_p10_gemelos(1, "mujer", i/7), clinic_p90_gemelos(1, "mujer", i/7)]);   
    averagesBarcelonaMujer_gemelos.push([ejeXLancet[j], clinic_p50_gemelos(1, "mujer", i/7)]);
	

    rangesGregorioMujer_gemelos.push([ejeXLancet[j], gregorio_p10_gemelos("mujer", i/7), gregorio_p90_gemelos("mujer", i/7)]);   
    averagesGregorioMujer_gemelos.push([ejeXLancet[j], gregorio_p50_gemelos("mujer", i/7)]);
	
	
	
   // ejeX.push(i);   
} 


    $('#containerBiometrico').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'gr.',
			valueDecimals: 0
        },

        legend: {
        },
        series: [
		{
            name: 'p50 Marañón niño',
            data: averagesGregorioVaron,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 , {
            name: 'p10-p90 Marañón niño',
            data: rangesGregorioVaron,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Clinic niño',
            data: averagesBarcelonaVaron,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		 , {
            name: 'p10-p90 Clinic niño',
            data: rangesBarcelonaVaron,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Marañón niña',
            data: averagesGregorioMujer,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		 , {
            name: 'p10-p90 Marañón niña',
            data: rangesGregorioMujer,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Clinic niña',
            data: averagesBarcelonaMujer,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            }
         }
		 , {
            name: 'p10-p90 Clinic niña',
            data: rangesBarcelonaMujer,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.3,
            zIndex: 0
        }
		]
    });
	
	
	
	
	
	
	
	    $('#containerUnicoGemelar').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'gr.',
			valueDecimals: 0
        },

        legend: {
        },
        series: [
		{
            name: 'p50 Marañón niño',
            data: averagesGregorioVaron,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 , {
            name: 'p10-p90 Marañón niño',
            data: rangesGregorioVaron,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Clinic niño',
            data: averagesBarcelonaVaron,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		 , {
            name: 'p10-p90 Clinic niño',
            data: rangesBarcelonaVaron,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Marañón niña',
            data: averagesGregorioMujer,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		 , {
            name: 'p10-p90 Marañón niña',
            data: rangesGregorioMujer,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Clinic niña',
            data: averagesBarcelonaMujer,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            }
         }
		 , {
            name: 'p10-p90 Clinic niña',
            data: rangesBarcelonaMujer,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Marañón niño gemelar',
            data: averagesGregorioVaron_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4]
            }
         }
		 , {
            name: 'p10-p90 Marañón niño gemelar',
            data: rangesGregorioVaron_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[4],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Clinic niño gemelar',
            data: averagesBarcelonaVaron_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
         }
		 , {
            name: 'p10-p90 Clinic niño gemelar',
            data: rangesBarcelonaVaron_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Marañón niña gemelar',
            data: averagesGregorioMujer_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[6]
            }
         }
		 , {
            name: 'p10-p90 Marañón niña gemelar',
            data: rangesGregorioMujer_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[6],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Clinic niña gemelar',
            data: averagesBarcelonaMujer_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[7]
            }
         }
		 , {
            name: 'p10-p90 Clinic niña gemelar',
            data: rangesBarcelonaMujer_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[7],
            fillOpacity: 0.3,
            zIndex: 0
        }
		]
    });
	
	
	
	
	
	
	
	/*
	
	
  $('#containerHemodinamico').bind('mousemove touchmove', function (e) {
        var chart,
            point,
            i;

        for (i = 0; i < Highcharts.charts.length; i++) {
            chart = Highcharts.charts[i];
            e = chart.pointer.normalize(e); // Find coordinates within the chart
            point = chart.series[0].searchPoint(e, true); // Get the hovered point

            if (point) {
                point.onMouseOver(); // Show the hover marker
                chart.tooltip.refresh(point); // Show the tooltip
                chart.xAxis[0].drawCrosshair(e, point); // Show the crosshair
            }
        }
    });	
	
   
      // Override the reset function, we don't need to hide the tooltips and crosshairs.
     
    Highcharts.Pointer.prototype.reset = function () {};

    
      // Synchronize zooming through the setExtremes event handler.
     
    function syncExtremes(e) {
        var thisChart = this.chart;

        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(e.min, e.max);
                }
            }
        });
    }	
	
	
	
	            $('<div class="chart">')
                .appendTo('#container')
                .highcharts({
                    chart: {
                        marginLeft: 40, // Keep all charts left aligned
                        spacingTop: 20,
                        spacingBottom: 20
                        // zoomType: 'x',
                        // pinchType: null // Disable zoom on touch devices
                    },
                    title: {
                        text: dataset.name,
                        align: 'left',
                        margin: 0,
                        x: 30
                    },
                    credits: {
                        enabled: false
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        crosshair: true,
                        events: {
                            setExtremes: syncExtremes
                        },
                        labels: {
                            format: '{value} IP'
                        }
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        positioner: function () {
                            return {
                                x: this.chart.chartWidth - this.label.width, // right aligned
                                y: -1 // align to title
                            };
                        },
                        borderWidth: 0,
                        backgroundColor: 'none',
                        pointFormat: '{point.y}',
                        headerFormat: '',
                        shadow: false,
                        style: {
                            fontSize: '18px'
                        },
                        valueDecimals: dataset.valueDecimals
                    },
                    series: [{
                        data: dataset.data,
                        name: dataset.name,
                        type: dataset.type,
                        color: Highcharts.getOptions().colors[i],
                        fillOpacity: 0.3,
                        tooltip: {
                            valueSuffix: ' ' + dataset.unit
                        }
                    }]
                });
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
var ejeXHemodinamico = [];

var averagesUAPI = [];
var rangesUAPI = [];
var averagesMCAPI = [];
var rangesMCAPI = [];
var averagesCPR = [];
var rangesCPR = [];
var averagesUAAPI = [];
var rangesUAAPI = [];
var averagesVDPI = [];
var rangesVDPI = [];
var averagesAIPI = [];
var rangesAIPI = [];

 
for(var i=140, j=0; i<=286; i++, j++) {


	var uapi = new UAPI(1, i/7);	
    rangesUAPI.push([ejeXLancet[j], uapi.p05 , uapi.p95]);   
    averagesUAPI.push([ejeXLancet[j], uapi.media]);
	
	var mcapi = new MCAPI(1, i/7);	
    rangesMCAPI.push([ejeXLancet[j], mcapi.p05, mcapi.p95]);   
    averagesMCAPI.push([ejeXLancet[j], mcapi.media]);
	
	var cpr = new CPR(1, 1, i/7);	
    rangesCPR.push([ejeXLancet[j], cpr.p05, cpr.p95]);   
    averagesCPR.push([ejeXLancet[j], cpr.media]);
	
	var uaapi = new UAAPI(1, 1, i/7);	
    rangesUAAPI.push([ejeXLancet[j], uaapi.p05, uaapi.p95]);   
    averagesUAAPI.push([ejeXLancet[j], uaapi.media]);
	
	var vdpi = new VDPI(1, i/7);	
    rangesVDPI.push([ejeXLancet[j], vdpi.p05, vdpi.p95]);   
    averagesVDPI.push([ejeXLancet[j], vdpi.media]);
	
	var aipi = new AIPI(1, i/7);	
    rangesAIPI.push([ejeXLancet[j], aipi.p05, aipi.p95]);   
    averagesAIPI.push([ejeXLancet[j], aipi.media]);
	
	
	
   // ejeXHemodinamico.push(i);   
}
	
	
	    $('#containerHemodinamico').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 3
        },

        legend: {
        },
        series: [
			{
            name: 'Arteria Umbilical',
            data: averagesUAPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p95 Arteria Umbilical',
            data: rangesUAPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
				{
            name: 'Arteria Cerebral Media',
            data: averagesMCAPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
		 , {
            name: 'p05 Arteria Cerebral Media',
            data: rangesMCAPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ratio Cerebro-placentario',
            data: averagesCPR,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
        }
		 , {
            name: 'p05 Ratio Cerebro-placentario',
            data: rangesCPR,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
				,
				{
            name: 'Arterias Uterinas',
            data: averagesUAAPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            }
        }
		 , {
            name: 'p95 Arterias Uterinas',
            data: rangesUAAPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[3],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ductus Venoso',
            data: averagesVDPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4]
            }
        }
		 , {
            name: 'p95 Ductus Venoso',
            data: rangesVDPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[4],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Itsmo Aortico',
            data: averagesAIPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
        }
		 , {
            name: 'p95 Itsmo Aortico',
            data: rangesAIPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        }
		
		]
    });

	
	
	
	
	
var averagesUAPI_kurmanavicius = [];
var rangesUAPI_kurmanavicius = [];
var averagesMCAPI_kurmanavicius = [];
var rangesMCAPI_kurmanavicius = [];
var averagesCPR_kurmanavicius = [];
var rangesCPR_kurmanavicius = [];
var averagesUAPI_baschat = [];
var averagesMCAPI_baschat = [];
var averagesCPR_baschat = [];
var rangesUAPI_baschat = [];
var rangesMCAPI_baschat = [];
var rangesCPR_baschat = [];
var averagesUAPI_HGUGM = [];
var averagesMCAPI_HGUGM = [];
var rangesUAPI_HGUGM = [];
var rangesMCAPI_HGUGM = [];
var averagesCPR_HGUGM = [];
var rangesCPR_HGUGM = [];
var averagesUAPI_HGUGM_Gemelar = [];
var averagesMCAPI_HGUGM_Gemelar = [];
var rangesUAPI_HGUGM_Gemelar = [];
var rangesMCAPI_HGUGM_Gemelar = [];
var averagesCPR_HGUGM_Gemelar = [];
var rangesCPR_HGUGM_Gemelar = [];



for(var i=140, j=0; i<=286; i++, j++) {
	var uapi = new UAPI_kurmanavicius(1, i/7);	
    rangesUAPI_kurmanavicius.push([ejeXLancet[j], uapi.p05, uapi.p95]);   
    averagesUAPI_kurmanavicius.push([ejeXLancet[j], uapi.media]);
	
	var mcapi = new MCAPI_kurmanavicius(1, i/7);	
    rangesMCAPI_kurmanavicius.push([ejeXLancet[j], mcapi.p05, mcapi.p95]);   
    averagesMCAPI_kurmanavicius.push([ejeXLancet[j], mcapi.media]);
	
	var cpr = new CPR_kurmanavicius(1, i/7);	
    rangesCPR_kurmanavicius.push([ejeXLancet[j], cpr.p05, cpr.p95]);   
    averagesCPR_kurmanavicius.push([ejeXLancet[j], cpr.media]);
}
	
for(var i=140, j=0; i<=286; i++, j++) {
	var uapi = new UAPI_baschat(1, i/7);	
    rangesUAPI_baschat.push([ejeXLancet[j], uapi.p05, uapi.p95]);  
    averagesUAPI_baschat.push([ejeXLancet[j], uapi.media]);
	
	var mcapi = new MCAPI_baschat(1, i/7);	
    rangesMCAPI_baschat.push([ejeXLancet[j], mcapi.p05, mcapi.p95]);  
    averagesMCAPI_baschat.push([ejeXLancet[j], mcapi.media]);
	
	var cpr = new CPR_baschat(1, i/7);	
    rangesCPR_baschat.push([ejeXLancet[j], cpr.p05, cpr.p95]);  
    averagesCPR_baschat.push([ejeXLancet[j], cpr.media]);	
}
	
	
for(var i=140, j=0; i<=286; i++, j++) {
	var uapi = new UAPI_Unico_Gregorio(1, i/7);	
    rangesUAPI_HGUGM.push([ejeXLancet[j], uapi.p05, uapi.p95]);  
    averagesUAPI_HGUGM.push([ejeXLancet[j], uapi.media]);
	
	var mcapi = new MCAPI_Unico_Gregorio(1, i/7);	
    rangesMCAPI_HGUGM.push([ejeXLancet[j], mcapi.p05, mcapi.p95]);  
    averagesMCAPI_HGUGM.push([ejeXLancet[j], mcapi.media]);	
	
	var cpr = new CPR_Unico_Gregorio(1, 1, i/7);	
    rangesCPR_HGUGM.push([ejeXLancet[j], cpr.p05, cpr.p95]);  
    averagesCPR_HGUGM.push([ejeXLancet[j], cpr.media]);	
}	




for(var i=140, j=0; i<=286; i++, j++) {
	var uapi = new UAPI_Gemelos_Gregorio(1, i/7);	
    rangesUAPI_HGUGM_Gemelar.push([ejeXLancet[j], uapi.p05, uapi.p95]);  
    averagesUAPI_HGUGM_Gemelar.push([ejeXLancet[j], uapi.media]);
	
	var mcapi = new MCAPI_Gemelos_Gregorio(1, i/7);	
    rangesMCAPI_HGUGM_Gemelar.push([ejeXLancet[j], mcapi.p05, mcapi.p95]);  
    averagesMCAPI_HGUGM_Gemelar.push([ejeXLancet[j], mcapi.media]);	
	
	var cpr = new CPR_Gemelos_Gregorio(1, 1, i/7);	
    rangesCPR_HGUGM_Gemelar.push([ejeXLancet[j], cpr.p05, cpr.p95]);  
    averagesCPR_HGUGM_Gemelar.push([ejeXLancet[j], cpr.media]);	
}	
	
	
	
	
	
	$('#containerUAPI').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 1
        },

        legend: {
        },
        series: [
		{
            name: 'Arteria Umbilical',
            data: averagesUAPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 ,
		{
            name: 'p05 - p95 Arteria Umbilical',
            data: rangesUAPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
	,
				{
            name: 'Arteria Umbilical Baschat',
            data: averagesUAPI_baschat,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		,
		{
            name: 'p05 - p95 Arteria Umbilical Baschat',
            data: rangesUAPI_baschat,
			type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
			,
				{
            name: 'Arteria Umbilical HGUGM',
            data: averagesUAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		,
		{
            name: 'p05 - p95 Arteria Umbilical HGUGM',
            data: rangesUAPI_HGUGM,
			type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
	
		
		]
    });
	
	
		$('#containerMCAPI').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 1
        },

        legend: {
        },
        series: [
		
		{
            name: 'Arteria Cerebral Media',
            data: averagesMCAPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p05 - p95 Arteria Cerebral Media',
            data: rangesMCAPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
	,
				{
            name: 'Arteria Cerebral Media Baschat',
            data: averagesMCAPI_baschat,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		,
		{
            name: 'p05 - p95 Arteria Cerebral Media Baschat',
            data: rangesMCAPI_baschat,
			type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
	,
				{
            name: 'Arteria Cerebral Media HGUGM',
            data: averagesMCAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
         }
		,
		{
            name: 'p05 - p95 Arteria Cerebral Media HGUGM',
            data: rangesMCAPI_HGUGM,
			type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
	
		
		]
    });

	
		$('#containerCPR').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 1
        },

        legend: {
        },
        series: [
						{
            name: 'CPR',
            data: averagesCPR,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
         }
		 ,
		{
            name: 'p05 - p95 CPR',
            data: rangesCPR,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
	,
				{
            name: 'CPR Baschat',
            data: averagesCPR_baschat,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
         }
		,
		{
            name: 'p05 - p95 CPR Baschat',
            data: rangesCPR_baschat,
			type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
	
		
		]
    });

	
	
	
	
	    $('#containerHemodinamico_HGUGM').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles HGUGM'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 3
        },

        legend: {
        },
        series: [
			{
            name: 'Arteria Umbilical HGUGM',
            data: averagesUAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p95 Arteria Umbilical HGUGM',
            data: rangesUAPI_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
				{
            name: 'Arteria Cerebral Media HGUGM',
            data: averagesMCAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
		 , {
            name: 'p05 Arteria Cerebral Media HGUGM',
            data: rangesMCAPI_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ratio Cerebro-placentario HGUGM',
            data: averagesCPR_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
        }
		 , {
            name: 'p05 Ratio Cerebro-placentario HGUGM',
            data: rangesCPR_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Itsmo Aortico HGUGM',
            data: averagesAIPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
        }
		 , {
            name: 'p95 Itsmo Aortico HGUGM',
            data: rangesAIPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        }
		
		]
    });	
	
	
	
	
	

	
	    $('#containerHemodinamico_HGUGM_Gemelar').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles Gemelares HGUGM'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 3
        },

        legend: {
        },
        series: [
			{
            name: 'Arteria Umbilical Gemelar HGUGM',
            data: averagesUAPI_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p95 Arteria Umbilical Gemelar HGUGM',
            data: rangesUAPI_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
				{
            name: 'Arteria Cerebral Media Gemelar HGUGM',
            data: averagesMCAPI_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
		 , {
            name: 'p05 Arteria Cerebral Media Gemelar HGUGM',
            data: rangesMCAPI_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ratio Cerebro-placentario Gemelar HGUGM',
            data: averagesCPR_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
        }
		 , {
            name: 'p05 Ratio Cerebro-placentario Gemelar HGUGM',
            data: rangesCPR_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
				,
			{
            name: 'Itsmo Aortico HGUGM',
            data: averagesAIPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
        }
		 , {
            name: 'p95 Itsmo Aortico HGUGM',
            data: rangesAIPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        }
		
		]
    });	
	
	
	
	
	    $('#containerHemodinamico_HGUGM_Unico_Gemelar').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles Unicos y Gemelares HGUGM'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'IP',
			valueDecimals: 3
        },

        legend: {
        },
        series: [
			{
            name: 'Arteria Umbilical HGUGM',
            data: averagesUAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p95 Arteria Umbilical HGUGM',
            data: rangesUAPI_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
				{
            name: 'Arteria Cerebral Media HGUGM',
            data: averagesMCAPI_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
		 , {
            name: 'p05 Arteria Cerebral Media HGUGM',
            data: rangesMCAPI_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ratio Cerebro-placentario HGUGM',
            data: averagesCPR_HGUGM,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
        }
		 , {
            name: 'p05 Ratio Cerebro-placentario HGUGM',
            data: rangesCPR_HGUGM,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Itsmo Aortico HGUGM',
            data: averagesAIPI,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
        }
		 , {
            name: 'p95 Itsmo Aortico HGUGM',
            data: rangesAIPI,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'Arteria Umbilical Gemelar HGUGM',
            data: averagesUAPI_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }
		,
		{
            name: 'p95 Arteria Umbilical Gemelar HGUGM',
            data: rangesUAPI_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
				{
            name: 'Arteria Cerebral Media Gemelar HGUGM',
            data: averagesMCAPI_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            }
        }
		 , {
            name: 'p05 Arteria Cerebral Media Gemelar HGUGM',
            data: rangesMCAPI_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
			{
            name: 'Ratio Cerebro-placentario Gemelar HGUGM',
            data: averagesCPR_HGUGM_Gemelar,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[2]
            }
        }
		 , {
            name: 'p05 Ratio Cerebro-placentario Gemelar HGUGM',
            data: rangesCPR_HGUGM_Gemelar,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[2],
            fillOpacity: 0.3,
            zIndex: 0
        }

		
		]
    });	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
var ejeX = [];

var averagesGregorioVaron_gemelos = [];
 var rangesGregorioVaron_gemelos = [];
 var rangesBarcelonaVaron_gemelos = [];
var averagesBarcelonaVaron_gemelos = [];

var averagesGregorioMujer_gemelos = [];
 var rangesGregorioMujer_gemelos = [];
 var rangesBarcelonaMujer_gemelos = [];
var averagesBarcelonaMujer_gemelos = [];


 
for(var i=140, j=0; i<=286; i++, j++) {



    rangesBarcelonaVaron_gemelos.push([ejeXLancet[j], clinic_p10_gemelos(1, "varon", i/7), clinic_p90_gemelos(1, "varon", i/7)]);   
    averagesBarcelonaVaron_gemelos.push([ejeXLancet[j], clinic_p50_gemelos(1, "varon", i/7)]);
	
    rangesGregorioVaron_gemelos.push([ejeXLancet[j], gregorio_p10_gemelos("varon", i/7), gregorio_p90_gemelos("varon", i/7)]);   
    averagesGregorioVaron_gemelos.push([ejeXLancet[j], gregorio_p50_gemelos("varon", i/7)]);
	

    rangesBarcelonaMujer_gemelos.push([ejeXLancet[j], clinic_p10_gemelos(1, "mujer", i/7), clinic_p90_gemelos(1, "mujer", i/7)]);   
    averagesBarcelonaMujer_gemelos.push([ejeXLancet[j], clinic_p50_gemelos(1, "mujer", i/7)]);
	

    rangesGregorioMujer_gemelos.push([ejeXLancet[j], gregorio_p10_gemelos("mujer", i/7), gregorio_p90_gemelos("mujer", i/7)]);   
    averagesGregorioMujer_gemelos.push([ejeXLancet[j], gregorio_p50_gemelos("mujer", i/7)]);
	
	
	
   // ejeX.push(i);   
} 


    $('#containerGemelos').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Percentiles gemelares'
        },

        xAxis: {
            // type: 'datetime'
			categories: ejeXLancet
        },

        yAxis: {
            title: {
				floor: 0,
				min: 0,
                text: null,
				max: 4000
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: 'gr.',
			valueDecimals: 0
        },

        legend: {
        },
        series: [
		{
            name: 'p50 Marañón niño gemelar',
            data: averagesGregorioVaron_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[4]
            }
         }
		 , {
            name: 'p10-p90 Marañón niño gemelar',
            data: rangesGregorioVaron_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[4],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Clinic niño gemelar',
            data: averagesBarcelonaVaron_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[5]
            }
         }
		 , {
            name: 'p10-p90 Clinic niño gemelar',
            data: rangesBarcelonaVaron_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[5],
            fillOpacity: 0.3,
            zIndex: 0
        },
		{
            name: 'p50 Marañón niña gemelar',
            data: averagesGregorioMujer_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[6]
            }
         }
		 , {
            name: 'p10-p90 Marañón niña gemelar',
            data: rangesGregorioMujer_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[6],
            fillOpacity: 0.3,
            zIndex: 0
        }
		,
		{
            name: 'p50 Clinic niña gemelar',
            data: averagesBarcelonaMujer_gemelos,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[7]
            }
         }
		 , {
            name: 'p10-p90 Clinic niña gemelar',
            data: rangesBarcelonaMujer_gemelos,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[7],
            fillOpacity: 0.3,
            zIndex: 0
        }
		]
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
