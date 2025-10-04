let secuencia = [];
let reproducirBtn = document.getElementById('btnReproducir');
let limpiarBtn = document.getElementById('btnLimpiar');

document.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    guardarSecuencia(e.keyCode);
});

function guardarSecuencia(codigoTecla) {
    // guardar la secuencia de sonidos reproducidos
    secuencia.push(codigoTecla);

};

function limpiarSecuencia() {
    // limpiar la secuencia de sonidos
    secuencia = [];
    console.log('Secuencia limpiada'); 
};



function reproducirSecuencia() {
    // recorrer la secuencia y reproducir los sonidos   
    for (let i = 0; i < secuencia.length; i++) {
        let audioReproducido = document.querySelector(`audio[data-key="${secuencia[i]}"]`);
        setTimeout(() => {
            audioReproducido.currentTime = 0;
            audioReproducido.play();
        }, i * 500);
        
    }

};

reproducirBtn.addEventListener('click', reproducirSecuencia);
limpiarBtn.addEventListener('click', limpiarSecuencia);