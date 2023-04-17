function baskhara() {

    let a = document.getelementsById('numA');
    let b = document.getelementsById('numB');
    let c = document.getelementsById('numC');
    let delta = b ** 2 - 4 * a * c;
    let raiz = math.sqrt(delta);
    let x1 = (-b + raiz) / 2 * a;
    let x2 = (-b - raiz) / 2 * a;
    let vaga = '';
    let result = document.getElementById('result');

    if (a == '' || b == '' || c == '') {
        alert('coloque valores validos em "a", "b" e "c" ');
    } else if (delta < 0 ) {
        result.innerHTML = `Não há soluções reais!`;
    } else if (raiz % 1 !== 0 ){
        result.innerHTML = `Não há raiz exata`;
    } 
    else if (x2 > x1) {
        vaga = x1;
        x1 = x2;
        x2 = vaga;
        let sob1 = x1 % 2;
        let sob2 = x2 % 2;
        if (sob1 == 0 && sob2 == 0){
            result.innerHTML = `as raizes são ${x1}, ${x2} e ambas são par.`;
        } else if (sob1 != 0 && sob2 != 0) {
            result.innerHTML = `as raizes são ${x1}, ${x2} e ambas são impar.`;
        } else if (sob1 == 0 && sob2 != 0) {
            result.innerHTML = `as raizes são ${x1}, ${x2} sendo a primeira par e a segunda impar.`;
        } else if (sob2 == 0 && sob1 != 0) {
            result.innerHTML = `as raizes são ${x1}, ${x2} sendo a primeira impar e a segunda par.`;
        }
    }
}