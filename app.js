alert('Boas vindas ao jogo do número secreto');
let numeroMax = 5;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute
let tentativas = 1
const btn = document.querySelector('#send')

btn.addEventListener("click", function (e) {
    e.preventDefault();

    chute = document.querySelector('#name').value;


    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);

    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++;
    }   
})




