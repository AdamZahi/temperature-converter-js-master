const dtInput = document.querySelector('#dt > input');
const euInput = document.querySelector('#eu > input');
const usdInput = document.querySelector('#usd > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celsiusToFaAndKe = () => {
    const dtDt = parseFloat(dtInput.value);
    const euDt = dtDt * 0.3 ;
    const usdDt = dtDt * 0.33 ;

    euInput.value = roundToTwoDP(euDt);
    usdInput.value = roundToTwoDP(usdDt);
};


const fahrenheitToCeAndKe = () => {
    const euDt = parseFloat(euInput.value);
    const dtDt = euDt * 3.35   ;
    const usdDt = euDt * 1.1 ;

    dtInput.value = roundToTwoDP(dtDt);
    usdInput.value = roundToTwoDP(usdDt);
};

const kelvinToCeAndFa = () => {
    const usdDt = parseFloat(usdInput.value);
    const dtDt =  usdDt * 3.05;
    const euDt = usdDt * 0.91;
    

    dtInput.value = roundToTwoDP(dtDt);
    euInput.value = roundToTwoDP(euDt);
};


const main = () => {
    dtInput.addEventListener('input', celsiusToFaAndKe);
    euInput.addEventListener('input', fahrenheitToCeAndKe);
    usdInput.addEventListener('input', kelvinToCeAndFa);
};

main();
