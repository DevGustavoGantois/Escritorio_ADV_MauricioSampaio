//Criando a funcionalidade do menu hamburguer 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


document.addEventListener('click', function(event) {
    // Verifica se o alvo do clique não é o botão de abrir o menu nem nenhum de seus elementos filhos
    if (!event.target.matches('.nav-button') && !event.target.closest('.overlay-content')) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});

window.addEventListener('resize', function() {
    // Verifica se a largura da janela é menor que 768 pixels (tamanho de tela para dispositivos móveis)
    if (window.innerWidth < 768) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});


//Adicionando a animação do Scroll Reveal


//Animação do navbar desktopo
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.list-navbar-desktop', {
        origin: 'right',
        duration: '4000',
        distance: '10%'
    });
});


//Aniimação texto principal:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.img-logo-mauricio-inicial', {
        origin: 'bottom',
        duration: '3000',
        distance: '10%' 
    });
});


//Animação do botão da seta:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-button', {
        origin: 'top',
        duration: '4000',
        distance: '20%'
    });
});

//Animação sobre o escritório:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.card-container', {
        origin: 'left',
        duration: '2000',
        distance: '20%',
    });
});

//Animação da imagem do escritório
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.img-escritorio', {
        origin: 'right',
        duration: '3000',
        distance: '10%'
});

});


//Fazendo as animações dos cards 
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.card', {
        origin:'top',
        duration: '2000',
        distance: '20%'
    })
})

//Fazendo a animação da sessão quem sou:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-quemsou', {
        origin: 'left',
        duration: '3000',
        distance: '10%'
    })
});


//Fazendo a animação da sessão de localização:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-localizacao', {
        origin: 'bottom',
        duration: '3000',
        distance: '10%'
    })
})


//Fazendo a animação da sessão de canais para contato. Parte do Mapa:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('#map', {
        origin: 'left',
        duration: '3000',
        distance: '10%'
    })
})

//Estilizando a animação da parte referente a descrição de contato:

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.container-description', {
        origin: 'top',
        duration: '4000',
        distance: '20%'
    })
})

//Estilizando a parte referente a navbar de contato:

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.container-nav-footer', {
        origin: 'right',
        duration: '5000',
        distance: '20%'
    });
})


//Fazendo o botão de seta funcionar, ir para a sessão de contato:

btnArrow = document.querySelector('.btn-arrow')

btnArrow.addEventListener('click', () => {

    document.querySelector('#contato').scrollIntoView({behavior: 'smooth'});
});

