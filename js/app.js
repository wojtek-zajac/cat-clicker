// Based on `Cat Clicker Premium Vanilla` by Ben at Udacity
// https://github.com/udacity/ud989-cat-clicker-premium-vanilla






//__________________MODEL

const model = {
    currentCat: null,
    cats: [
        {
            name: 'Grumpy',
            imgSource: 'img/cat1.jpg',
            clicks: 0
        },
        {
            name: 'Sneezy',
            imgSource: 'img/cat2.jpg',
            clicks: 0
        },
        {
            name: 'Fennec',
            imgSource: 'img/cat3.jpg',
            clicks: 0
        },
        {
            name: 'Rolling Stone',
            imgSource: 'img/cat4.jpg',
            clicks: 0
        },
        {
            name: 'Speedy',
            imgSource: 'img/cat5.jpg',
            clicks: 0
        },
        {
            name: 'One-Step-Left',
            imgSource: 'img/cat6.jpg',
            clicks: 0
        },
        {
            name: 'One-Step-Right',
            imgSource: 'img/cat7.jpg',
            clicks: 0
        },
        {
            name: 'Sleeper',
            imgSource: 'img/cat8.jpg',
            clicks: 0
        }
    ]
};






//__________________TRIGGER

const trigger = {
    
    init: function() {
        // Set the first cat from the list as current cat
        model.currentCat = model.cats[0];

        // Initialize the viewers
        listView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // Set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // Increment the click counter for the currently clicked cat's image
    countClick: function() {
        model.currentCat.clicks++;
        catView.render();
    }

    
};







//__________________VIEW

// Cat
const catView = {

    init: function() {

        // Store the DOM element for easy access later
        this.catElem = document.querySelector('.cat');
        this.catNameElem = document.querySelector('.cat-name');
        this.catImageElem = document.querySelector('.cat-img');
        this.countElem = document.querySelector('.click-count');

        // Increment the current's cat click counter on click on the image
        this.catImageElem.addEventListener('click', function() {
            trigger.countClick();
        });

        // Update the DOM elements with the right values
        this.render();
    },

    render: function() {

        // Update the DOM elements with the values from the current cat
        let currentCat = trigger.getCurrentCat();
        this.countElem.textContent = currentCat.clicks;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSource;        
    }
};



// List
const listView = {

    init: function() {

        // Store the DOM element for easy access later
        this.catList = document.querySelector('.cat-list');

        // Update the DOM elements with the right values
        this.render();
    },

    render: function() {

        // Get the cats rendered from the trigger
        let cats = trigger.getCats();

        let cat,
            elem,
            i;

        // Empty the cat list
        this.catList.innerHTML = '';

        // Loop over the cats in our array
        for (i = 0; i < cats.length; i++) {

            // This is the cat we're on...
            cat = cats[i];

            // We're creating a DOM element for the cat + its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // ... and when we click, push the given cat to the cantainer
            elem.addEventListener('click', (function(catCopy) {
                return function() {

                    trigger.setCurrentCat(catCopy);
                    catView.render();

                };
            })(cat));

            // Add the element to the list
            this.catList.appendChild(elem);
            
        }
    }
};






//__________________INIT

trigger.init();