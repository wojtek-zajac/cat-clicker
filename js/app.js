const cat = document.querySelector('.catImage');
const catName = document.querySelector('.catName');
const catImageContainer = document.querySelector('.catImage');
const catList = document.querySelector('.list');
const meow = new Audio('./audio/meow3.mp3');
let cats = ['cat1',
            'cat2',
            'cat3',
            'cat4',
            'cat5',
            'cat6',
            'cat7',
            'cat8'
        ];
let number = document.querySelector('.number');
let click = 0;


// Loop over the cats in our array
for (let i = 0; i < cats.length; i++) {

    // This is the cat we're on...
    let cat = cats[i];

    // We're creating a DOM element for the cat
    let elem = document.createElement('div');
    elem.textContent = cat;

    // ... and when we click, push the given cat to the cantainer
    elem.addEventListener('click', (function(catCopy) {
        return function() {

            // Clean the cat's container content first
            cleanImages();
            cleanClicks();

            // Create an `img` element for a cat
            let img = document.createElement('img');

            // Set the element's attributes
            img.setAttribute('alt', 'cat');
            img.className += 'cat';
            img.src = `./img/${catCopy}.jpg`;

            // Display the image on screen
            catImageContainer.appendChild(img);

            // Display the name on screen
            catName.innerHTML = catCopy;
        };
    })(cat));

    // Create list of cats
    catList.appendChild(elem);
    
};


function countClicks() {
    click++;
    updateClicks();
}


function updateClicks() {
    if (click > 1) {
        number.innerHTML = `${click} clicks`;
    } else {
        number.innerHTML = `${click} click`;
    }
}


function cleanClicks() {
    click = 0;
    number.innerHTML = '';
}


function meeow() {
    meow.play();
}


function cleanImages() {
    catImageContainer.removeChild(catImageContainer.childNodes[2]); 
}


cat.addEventListener('click', countClicks);
cat.addEventListener('click', meeow);