// Seleciona todos os slides
let list = document.querySelectorAll('.item');

// Seleciona os botões de navegação
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

// Quantidade total de slides
let count = list.length;

// Índice de slide ativo
let active = 0;


// Botão "Próximo"
next.onclick = () => {
    // Remove o slide atual
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Incrementa o índice do item ativo, voltando ao início se necessário
    active = active >= count - 1 ? 0 : active + 1;

    // Ativa o novo slide
    list[active].classList.add('active');

    updateFooterColor();
}

// Botão "Anterior"
prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Decrementa o índice do item ativo, voltando ao fim se necessário
    active = active <= 0 ? count - 1 : active - 1;

    list[active].classList.add('active');

    updateFooterColor();
}

// Atualiza a cor do footer com base no slide ativo
function updateFooterColor() {
    // Pega o slide atual
    const activeItem = document.querySelector('.item.active');
    
    // Lê a variável CSS definida inline
    const footerColor = activeItem.style.getPropertyValue('--footer-text');

    // Aplica no :root
    document.documentElement.style.setProperty('--footer-color', footerColor);
}