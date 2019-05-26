var dias_semana = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo";
var lugares = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti";

var matriz_dias = dias_semana.split(",");
var matriz_lugares = lugares.split(".");

var agenda = [];

for (var i=0; i<matriz_dias.length; i++) {
    agenda.push([matriz_dias[i], matriz_lugares[i]]);
}

