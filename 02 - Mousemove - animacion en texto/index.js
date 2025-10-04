let texto = document.querySelector("h1");
let hero = document.querySelector('.hero');
let maximo = 300;

hero.addEventListener('mousemove', function(e) {
    
    let {offsetX: x, offsetY: y} = e;

    let {offsetWidth: width, offsetHeight: height} = hero;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    let desplazarX = Math.round((x / width * maximo) - (maximo / 2));
    let desplazarY = Math.round((y / height * maximo) - (maximo / 2));

    texto.style.textShadow = `${desplazarX * 2}px ${desplazarY * 2}px 0 rgba(255,0,255,0.7)`
});