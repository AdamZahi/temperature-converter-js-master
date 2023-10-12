const cmInput = document.querySelector('#cm > input');
const inchInput = document.querySelector('#inch > input');
const footInput = document.querySelector('#foot > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const cmLength = parseFloat(cmInput.value);
    const inchLength = cmLength * 0.393701 ;
    const footLength = cmLength / 30.48;

    inchInput.value = roundToTwoDP(inchLength);
    footInput.value = roundToTwoDP(footLength);
};


const fahrenheitToCeAndKe = () => {
    const inchLength = parseFloat(inchInput.value);
    const cmLength = inchLength * 2.54   ;
    const footLength = inchLength * 0.083333 ;

    cmInput.value = roundToTwoDP(cmLength);
    footInput.value = roundToTwoDP(footLength);
};

const kelvinToCeAndFa = () => {
    const footLength = parseFloat(footInput.value);
    const cmLength = footLength * 30.48;
    const inchLength = footLength * 12;

    cmInput.value = roundToTwoDP(cmLength);
    inchInput.value = roundToTwoDP(inchLength);
};


const main = () => {
    cmInput.addEventListener('input', celsiusToFaAndKe);
    inchInput.addEventListener('input', fahrenheitToCeAndKe);
    footInput.addEventListener('input', kelvinToCeAndFa);
};

main();
