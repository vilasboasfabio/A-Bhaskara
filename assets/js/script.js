function baskhara() {
// definindo caixas para valores algumas pro inputs e outra para as contas
    let a = document.getElementById('numA').value;
    let b = document.getElementById('numB').value;
    let c = document.getElementById('numC').value;
// conta do delta
    let delta = (b**2 -4 * a * c);

// raiz do delta
    let raiz = Math.sqrt(delta);

// como descobrir o x1 e o x2
    let x1 = (-b + raiz) / (2*a);
    let x2 = (-b - raiz) / (2*a);

// vaga auxiliar para definir o x maior
    let vaga = '';

// diminuir escrita
    let result = document.getElementById('result');

// caso algum campo não seja preenchido aparecera um alert
    if (a == '' || b == '' || c == '') {
        alert('coloque valores validos em "a", "b" e "c" ');
    } else if (delta < 0 ) {
// caso o delta seja menor que 0 ele não tem soluções
        result.innerHTML = `Não há soluções reais!`;
    } else if (raiz % 1 !== 0 ){
// e caso a raiz seja com virgula (não exata) não calculara
        result.innerHTML = `Não há raiz exata`;
    }

// define qual x é maior e o coloca na vaga (x1)
    else if (x2 > x1) {
        vaga = x1;
        x1 = x2;
        x2 = vaga;
        let sob1 = x1 % 2;
        let sob2 = x2 % 2;

// Vê se ambos são pares
        if (sob1 == 0 && sob2 == 0){
            result.innerHTML = `${x1}, ${x2} e ambas são par.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se ambos são impares
        } else if (sob1 != 0 && sob2 != 0) {
            result.innerHTML = `${x1}, ${x2} e ambas são impar.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se um é par e outro impar
        } else if (sob1 == 0 && sob2 != 0) {
            result.innerHTML = `${x1} é par, ${x2} é impar`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se um é par e outro impar
        } else if (sob2 == 0 && sob1 != 0) {
            result.innerHTML = `${x1} é impar, ${x2} é par`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        }
    } else if (x1 > x2) {
// auxilares para par ou impar
        let sob1 = x1 % 2;
        let sob2 = x2 % 2;

// Vê se ambos são pares
        if (sob1 == 0 && sob2 == 0){
            result.innerHTML = `${x1}, ${x2} e ambas são par.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se ambos são impares
        } else if (sob1 != 0 && sob2 != 0) {
            result.innerHTML = `${x1}, ${x2} e ambas são impar.`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se um é par e outro impar
        } else if (sob1 == 0 && sob2 != 0) {
            result.innerHTML = `${x1} é par, ${x2} é impar`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;

// Vê se um é par e outro impar
        } else if (sob2 == 0 && sob1 != 0) {
            result.innerHTML = `${x1} é impar, ${x2} é par`;
            document.getElementById('x1').innerHTML = `O resultado de x1 é ${x1}`;
            document.getElementById('x2').innerHTML = `O resultado de x2 é ${x2}`;
        }
    }
// Verificador de console (para achar os erros)
    console.log(delta);
    console.log(raiz);
}