const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let customers = 1;
let location = 'RSA';
let currency = null;

let shipping;
let shoes = 300;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (location === 'RSA') {
    shipping = 400;
    currency = 'R';
} else if (location === 'NAM') {
    shipping = 600;
    currency = '$';
} else if (location === 'NK') {
    console.log(BANNED_WARNING);
} else {
    shipping = 800;
    currency = 'USD';
}

const cost = shoes + toys + shirts + batteries + pens;

if (customers === 1) {
    if ((location === 'NAM' && cost >= 60) || (location === 'RSA' && cost >= 1000)) {
        shipping = 0;
    } 
} else if (customers > 1) {
    console.log(FREE_WARNING);
}

let price = currency + (cost + shipping)

console.log('Price: ', price)
