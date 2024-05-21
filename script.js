
function kreditHesabla(emekHaqqi, istediyinizMebleg, istediyinizMuddet) {
    if (istediyinizMuddet > 36) {
        return "Size bu şərtlərlə kredit dushmur";
    }

    let faizDerecesi;
    if (istediyinizMuddet <= 12) {
        faizDerecesi = 0.13;
    } else if (istediyinizMuddet <= 24) {
        faizDerecesi = 0.15;
    } else if (istediyinizMuddet <= 36) {
        faizDerecesi = 0.17;
    }

    const maksimumMebleg = emekHaqqi * 10;
    const maksimumAyliqOdenis = emekHaqqi * 0.45;

    if (istediyinizMebleg > maksimumMebleg) {
        return "Size bu şərtlərlə kredit dushmur";
    }

    const faizMiqdar = istediyinizMebleg * faizDerecesi * istediyinizMuddet / 12;
    const toplamMebleg = istediyinizMebleg + faizMiqdar;
    const ayliqOdenis = toplamMebleg / istediyinizMuddet;

    if (ayliqOdenis > maksimumAyliqOdenis) {
        return "Size bu şərtlərlə kredit dushmur";
    }

    return `${istediyinizMebleg} AZN məbləğ size ${(faizDerecesi * 100).toFixed(0)}% ilə ${istediyinizMuddet} ay müddətinə, aylıq ${ayliqOdenis.toFixed(2)} AZN ödənişlə verilir.`;
}

const emekHaqqi = 3000;
const istediyinizMebleg = 4000;
const istediyinizMuddet = 16;

const result = kreditHesabla(emekHaqqi, istediyinizMebleg, istediyinizMuddet);
console.log(result);
