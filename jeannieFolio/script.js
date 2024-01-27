let heroCode = document.getElementById('hero_code');
let heroCreate = document.getElementById('hero_create');
let blocks = document.getElementById('blocks');
let paint = document.getElementById('paint');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    heroCreate.style.marginTop = value * -2.5 + 'px';
    heroCode.style.marginTop = value * -2.5 + 'px';
    paint.style.top = value * -1.5 + 'px';
    paint.style.left = value * 1.5 + 'px';
    blocks.style.top = value * -1.5 + 'px';
    blocks.style.left = value * -1.5 + 'px';
    // pinksky.style.top = value * 1 + 'px';
});