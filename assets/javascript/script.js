let list = document.querySelectorAll('.item');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

let count = list.length;
let active = 0;

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Incrementa o índice do item ativo, voltando ao início se necessário
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Decrementa o índice do item ativo, voltando ao fim se necessário
    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}