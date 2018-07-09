const cat = document.querySelector('.cat');
let number = document.querySelector('.number');
let click = 0;

function countClicks() {
    click++;
    updatePage();
}

function updatePage() {
    number.innerHTML = click;
}

cat.addEventListener('click', countClicks);