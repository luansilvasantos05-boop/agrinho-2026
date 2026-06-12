// 1. Controle do Menu Hambúrguer (Mobile)
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fecha o menu móvel automaticamente ao clicar em qualquer link dele
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// 2. Função de Rolagem Suave Personalizada para os botões internos
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 3. Integração de Contratação dos Planos com Redirecionamento Direto para o seu WhatsApp
function contratarPlano(nomePlano) {
    const numeroTelefone = "5544997037836";
    const mensagem = `Olá, Luan! Vi o site "Agro Forte & Sustentável" e tenho interesse em contratar o *${nomePlano}*. Como podemos prosseguir?`;
    
    // Codifica a mensagem para o padrão de URL seguro
    const urlWhatsApp = `https://wa.me{numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank');
}
