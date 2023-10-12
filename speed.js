const kphInput = document.querySelector('#kph > input');
const mphInput = document.querySelector('#mph > input');
const knInput = document.querySelector('#kn > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const kphSpeed = parseFloat(kphInput.value);
    const mphSpeed = kphSpeed * 0.621371 ;
    const knSpeed = kphSpeed * 0.539957 ;

    mphInput.value = roundToTwoDP(mphSpeed);
    knInput.value = roundToTwoDP(knSpeed);
};


const fahrenheitToCeAndKe = () => {
    const mphSpeed = parseFloat(mphInput.value);
    const kphSpeed = mphSpeed * 1.60934   ;
    const knSpeed = mphSpeed * 0.868976 ;

    kphInput.value = roundToTwoDP(kphSpeed);
    knInput.value = roundToTwoDP(knSpeed);
};

const kelvinToCeAndFa = () => {
    const knSpeed = parseFloat(knInput.value);
    const kphSpeed = knSpeed * 1.852;
    const mphSpeed = knSpeed* 1.15078;
    

    kphInput.value = roundToTwoDP(kphSpeed);
    mphInput.value = roundToTwoDP(mphSpeed);
};


const main = () => {
    kphInput.addEventListener('input', celsiusToFaAndKe);
    mphInput.addEventListener('input', fahrenheitToCeAndKe);
    knInput.addEventListener('input', kelvinToCeAndFa);
};

main();
