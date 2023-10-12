const kgInput = document.querySelector('#kg > input');
const ozInput = document.querySelector('#oz > input');
const lbInput = document.querySelector('#lb > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const kgMass = parseFloat(kgInput.value);
    const ozMass = kgMass * 35.274 ;
    const lbMass = kgMass * 2.20462;

    ozInput.value = roundToTwoDP(ozMass);
    lbInput.value = roundToTwoDP(lbMass);
};


const fahrenheitToCeAndKe = () => {
    const ozMass = parseFloat(ozInput.value);
    const kgMass = ozMass * 0.0283495   ;
    const lbMass = ozMass * 0.0625 ;

    kgInput.value = roundToTwoDP(kgMass);
    lbInput.value = roundToTwoDP(lbMass);
};

const kelvinToCeAndFa = () => {
    const lbMass = parseFloat(lbInput.value);
    const ozMass = lbMass * 16;
    const kgMass = lbMass * 0.453592;
    

    kgInput.value = roundToTwoDP(kgMass);
    ozInput.value = roundToTwoDP(ozMass);
};


const main = () => {
    kgInput.addEventListener('input', celsiusToFaAndKe);
    ozInput.addEventListener('input', fahrenheitToCeAndKe);
    lbInput.addEventListener('input', kelvinToCeAndFa);
};

main();
