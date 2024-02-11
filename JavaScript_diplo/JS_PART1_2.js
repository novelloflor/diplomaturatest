function obtenerMayor(arrValores){
    var c = arrValores[0];
    for (var i = 0; i < arrValores.length; i++){
        if (arrValores[i] > c){
            c = arrValores[i];
        }
    }
}

var arrValores = [4, 5, 6, 10, 25, 2];
obtenerMayor(arrValores);
console.log('El valor mas alto es : ' + c);