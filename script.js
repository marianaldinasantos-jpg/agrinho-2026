// Aguarda o carregamento do DOM para garantir segurança na manipulação
document.addEventListener('DOMContentLoaded', () => {
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Alterna a classe 'active' no item do acordeão clicado
            item.classList.toggle('active');
            
            // Lógica para expandir e recolher suavemente com base no scrollHeight
            const body = item.querySelector('.accordion-body');
            
            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('.icon').textContent = '-';
            } else {
                body.style.maxHeight = "0px";
                this.setAttribute('aria-expanded', 'false');
                this.querySelector('.icon').textContent = '+';
            }
        });
    });

    console.log("Sistema de monitoramento da interface ativado com sucesso!");
});
