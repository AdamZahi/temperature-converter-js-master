const kbInput = document.querySelector('#kb > input');
const mbInput = document.querySelector('#mb > input');
const gbInput = document.querySelector('#gb > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const kbData = parseFloat(kbInput.value);
    const mbData = kbData * 0.001024 ;
    const gbData = kbData * Math.pow(10,-6) ;

    mbInput.value = roundToTwoDP(mbData);
    gbInput.value = roundToTwoDP(gbData);
};


const fahrenheitToCeAndKe = () => {
    const mbData = parseFloat(mbInput.value);
    const kbData = mbData * 1024   ;
    const gbData = mbData * 0.001024 ;

    kbInput.value = roundToTwoDP(kbData);
    gbInput.value = roundToTwoDP(gbData);
};

const kelvinToCeAndFa = () => {
    const gbData = parseFloat(gbInput.value);
    const kbData = gbData * 1024000;
    const mbData = gbData * 1024;
    

    kbInput.value = roundToTwoDP(kbData);
    mbInput.value = roundToTwoDP(mbData);
};


const main = () => {
    kbInput.addEventListener('input', celsiusToFaAndKe);
    mbInput.addEventListener('input', fahrenheitToCeAndKe);
    gbInput.addEventListener('input', kelvinToCeAndFa);
};

main();
