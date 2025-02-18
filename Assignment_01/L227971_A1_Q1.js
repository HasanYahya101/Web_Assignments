const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector(".blended-bg").classList.toggle("dark");
    if (document.body.classList.contains('dark')) {
        darkModeIcon.innerHTML = '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
    } else {
        darkModeIcon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
    }
});

const bg = document.querySelector('.blended-bg');
let bgIndex = 0;
const bgImages = ['./bg.jpeg', './bg2.jpeg'];

const leftArrow = document.querySelector('.blended-bg > div:nth-child(1)');
const rightArrow = document.querySelector('.blended-bg > div:nth-child(2)');
leftArrow.addEventListener('click', () => {
    bgIndex = 0;
    bg.style.backgroundImage = `url(${bgImages[bgIndex]})`;
});
rightArrow.addEventListener('click', () => {
    bgIndex = 1;
    bg.style.backgroundImage = `url(${bgImages[bgIndex]})`;
});
leftArrow.click();

const lipstickCount = document.getElementById('lipstick_count');
const alexaCount = document.getElementById('alexa_count');
const pansCount = document.getElementById('pans_count');
const switchCount = document.getElementById('switch_count');

const cartCount = document.getElementById('cart_count');

const lipstickAdd = document.getElementById('lipstick_add');
const alexaAdd = document.getElementById('alexa_add');
const pansAdd = document.getElementById('pans_add');
const switchAdd = document.getElementById('switch_add');

const lipstickRemove = document.getElementById('lipstick_remove');
const alexaRemove = document.getElementById('alexa_remove');
const pansRemove = document.getElementById('pans_remove');
const switchRemove = document.getElementById('switch_remove');

let cart = 0;
let lipstick = 0;
let alexa = 0;
let pans = 0;
let switch_num = 0;

lipstickAdd.addEventListener('click', () => {
    lipstick++;
    cart++;
    lipstickCount.innerText = lipstick;
    cartCount.innerText = cart;
});

alexaAdd.addEventListener('click', () => {
    alexa++;
    cart++;
    alexaCount.innerText = alexa;
    cartCount.innerText = cart;
});

pansAdd.addEventListener('click', () => {
    pans++;
    cart++;
    pansCount.innerText = pans;
    cartCount.innerText = cart;
});

switchAdd.addEventListener('click', () => {
    switch_num++;
    cart++;
    switchCount.innerText = switch_num;
    cartCount.innerText = cart;
});

lipstickRemove.addEventListener('click', () => {
    if (lipstick > 0) {
        lipstick--;
        cart--;
        lipstickCount.innerText = lipstick;
        cartCount.innerText = cart;
    }
    else {
        alert("No items of this type in cart to remove");
    }
});

alexaRemove.addEventListener('click', () => {
    if (alexa > 0) {
        alexa--;
        cart--;
        alexaCount.innerText = alexa;
        cartCount.innerText = cart;
    }
    else {
        alert("No items of this type in cart to remove");
    }
});

pansRemove.addEventListener('click', () => {
    if (pans > 0) {
        pans--;
        cart--;
        pansCount.innerText = pans;
        cartCount.innerText = cart;
    }
    else {
        alert("No items of this type in cart to remove");
    }
});

switchRemove.addEventListener('click', () => {
    if (switch_num > 0) {
        switch_num--;
        cart--;
        switchCount.innerText = switch_num;
        cartCount.innerText = cart;
    }
    else {
        alert("No items of this type in cart to remove");
    }
});
