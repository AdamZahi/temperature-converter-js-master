const opInput = document.querySelector('#op > input');
const rInput = document.querySelector('#r > input');
const fpInput = document.querySelector('#fp > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const CalculateFinalPrice = () => {
    const opPromo = parseFloat(opInput.value);
    const rPromo = parseFloat(rInput.value) ;
    const fpPromo = opPromo - (opPromo*rPromo/100) ;

    fpInput.value = roundToTwoDP(fpPromo);
};

const main = () => {
    // opInput.addEventListener('input', calculateFinalPrice);
    // rInput.addEventListener('input', calculateFinalPrice);
    fpInput.addEventListener('input', CalculateFinalPrice);
};

main();
