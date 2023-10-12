const yearInput = document.querySelector('#year > input');
const dayInput = document.querySelector('#day > input');
const hrInput = document.querySelector('#hr > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const yearTime = parseFloat(yearInput.value);
    const dayTime = yearTime * 365 ;
    const hrTime = yearTime * 365 * 24;

    dayInput.value = roundToTwoDP(dayTime);
    hrInput.value = roundToTwoDP(hrTime);
};


const fahrenheitToCeAndKe = () => {
    const dayTime = parseFloat(dayInput.value);
    const yearTime = dayTime / 365   ;
    const hrTime = dayTime * 24 ;

    yearInput.value = roundToTwoDP(yearTime);
    hrInput.value = roundToTwoDP(hrTime);
};

const kelvinToCeAndFa = () => {
    const hrTime = parseFloat(hrInput.value);
    const dayTime = hrTime / 24;
    const yearTime = dayTime / 365;
    

    yearInput.value = roundToTwoDP(yearTime);
    dayInput.value = roundToTwoDP(dayTime);
};


const main = () => {
    yearInput.addEventListener('input', celsiusToFaAndKe);
    dayInput.addEventListener('input', fahrenheitToCeAndKe);
    hrInput.addEventListener('input', kelvinToCeAndFa);
};

main();
