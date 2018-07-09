const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat1Name = document.querySelector('.cat1Name');
const cat2Name = document.querySelector('.cat2Name');
let number = document.querySelector('.number');
let click = 0;

function displayCatsNames() {
    cat1Name.innerHTML = "Grumpy Cat";
    cat2Name.innerHTML = "Sneezy Cat";
}

function countClicks() {
    click++;
    updatePage();
}

function updatePage() {
    number.innerHTML = click;
}

window.onload = () => {
    displayCatsNames();
}

cat1.addEventListener('click', countClicks);
cat2.addEventListener('click', countClicks);