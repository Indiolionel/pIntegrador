
const imagenes = ['img-1.jpg','img-2.jpg','img-3.jpg','img-4.jpg' ];
const nombres = ['A1', 'A2','A3','A4'];
const genero = ['B1', 'B2','B3','B4'];
const precio = ['500', '1000','1500','2000'];
let cont=0;

function carrousel(contenedor) {

    contenedor.addEventListener('click',e=> {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if(tgt == atras){
            if(cont>0){
                img.src = imagenes[cont - 1];
                document.getElementById("nombre").innerHTML=nombres[cont - 1];
                document.getElementById("genero").innerHTML=genero[cont - 1];
                document.getElementById("precio").innerHTML=precio[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                document.getElementById("nombre").innerHTML=nombres[imagenes.length - 1];
                document.getElementById("genero").innerHTML=genero[imagenes.length - 1];
                document.getElementById("precio").innerHTML=precio[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        } else if (tgt == adelante) {
            if(cont< imagenes.length-1){
                img.src = imagenes[cont + 1];
                document.getElementById("nombre").innerHTML=nombres[cont + 1];
                document.getElementById("genero").innerHTML=genero[cont + 1];
                document.getElementById("precio").innerHTML=precio[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                document.getElementById("nombre").innerHTML=nombres[0];
                document.getElementById("genero").innerHTML=genero[0];
                document.getElementById("precio").innerHTML=precio[0];
                cont = 0;
            }
        }

    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor = document.querySelector('.contenedor')
    carrousel(contenedor);
});

document.write (screen.width);
document.write ("/"+screen.height)