
function mostrar(idtxt, idbuttonM, idbuttonO){
    document.getElementById(idtxt).style.display = 'block';
    document.getElementById(idbuttonM).style.display = 'none';
    document.getElementById(idbuttonO).style.display = 'block';
}



function ocultar(idtxt, idbuttonM, idbuttonO){
    document.getElementById(idtxt).style.display = 'none';
    document.getElementById(idbuttonO).style.display = 'none';
    document.getElementById(idbuttonM).style.display = 'block';
}

