function baskhara() {

    let a = document.getElementById('numA').value;
    let b = document.getElementById('numB').value;
    let c = document.getElementById('numC').value;
    let delta = (b**2 -4 * a * c);
    let raiz = Math.sqrt(delta);
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
            result.innerHTML = `${x1}, ${x2} e ambas são par.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob1 != 0 && sob2 != 0) {
            result.innerHTML = `${x1}, ${x2} e ambas são impar.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob1 == 0 && sob2 != 0) {
            result.innerHTML = `${x1} é par, ${x2} é impar`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob2 == 0 && sob1 != 0) {
            result.innerHTML = `${x1} é impar, ${x2} é par`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        }
    } else if (x1 > x2) {
        let sob1 = x1 % 2;
        let sob2 = x2 % 2;
        if (sob1 == 0 && sob2 == 0){
            result.innerHTML = `${x1}, ${x2} e ambas são par.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob1 != 0 && sob2 != 0) {
            result.innerHTML = `${x1}, ${x2} e ambas são impar.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob1 == 0 && sob2 != 0) {
            result.innerHTML = `${x1} é par, ${x2} é impar`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        } else if (sob2 == 0 && sob1 != 0) {
            result.innerHTML = `${x1} é impar, ${x2} é par`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        }
    }
    console.log(delta);
    console.log(raiz);
}