var distancia = 10;
if (distancia>=0 && distancia <= 1000){
    console.log('El método de transporte sera a pie.');
}else if(distancia >= 1000 && distancia<= 10000){
    console.log('El método de transporte sera en bicicleta.');
}else if(distancia>= 10000 && distancia <= 30000){
    console.log('El método de transporte sera en colectivo.');
}else if(distancia>= 30000 && distancia <= 100000){
    console.log('El método de transporte sera en auto');
}else{
    console.log('El método de transporte sera en avion.');
}