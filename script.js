// Dados dos roteiros
const roteiros = {
    pergunta: {
        titulo: "Você que é de [REGIÃO] e tem um filho(a) entre 6 e 14 anos... já pensou em preparar ele(a) para as profissões do futuro?",
        conteudo: `Você já parou pra pensar que a maioria das profissões que o seu filho(a) vai disputar ainda nem existem?

Mas existe uma habilidade que quase todas elas vão exigir: programação.

E agora vem o melhor: você pode testar isso sem compromisso, com uma aula experimental totalmente gratuita.

Aqui na [ESCOLA], a gente ensina crianças de forma leve, divertida e prática, com jogos, desafios e muito mais.

Mesmo sem saber nada de tecnologia, seu filho(a) vai sair da aula dando os primeiros passos como programador.

Pra agendar essa aula grátis, é só clicar aqui no botão, mandar um "Oi" no WhatsApp e a gente cuida do resto.

Mas atenção: as vagas são limitadas. Clique agora e garanta a aula experimental do seu filho(a)!`,
        ctr: "3.2%",
        conversao: "8.5%"
    },
    historia: {
        titulo: "Meu filho(a) trocou o joguinho por criar o próprio jogo…",
        conteudo: `"Eu achava que meu filho(a) era só mais um viciado em joguinho… até ele(a) sair de uma aula experimental de programação falando que queria criar o próprio jogo."

Isso foi o que uma mãe nos contou depois da primeira aula gratuita que oferecemos aqui na [ESCOLA].

Muita gente acha que programação é coisa de adulto… mas quando a criança entende que ela pode usar o computador pra criar e não só consumir, tudo muda.

Aqui, a gente transforma o interesse em tecnologia em algo construtivo: lógica, criatividade, foco e autoconfiança.

E você pode ver isso sem pagar nada, em uma aula experimental 100% gratuita.

Quer viver essa experiência com seu filho(a)?

Clica no botão, fala com a gente no WhatsApp e garante a vaga dele(a). ele(a) vai sair da aula querendo programar o mundo!`,
        ctr: "4.1%",
        conversao: "9.2%"
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Configurar navegação mobile
    setupMobileNav();
    
    // Configurar roteiros interativos
    setupRoteiros();
    
    // Configurar gráficos
    setupCharts();
    
    // Configurar calculadora ROI
    setupROICalculator();
    
    // Configurar scroll spy
    setupScrollSpy();
});

// Navegação mobile
function setupMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Roteiros interativos
function setupRoteiros() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const nomeEscolaInput = document.getElementById('nomeEscola');
    const regiaoInput = document.getElementById('regiao');
    const previewContent = document.getElementById('previewContent');
    const copyButton = document.getElementById('copyButton');
    const ctrValue = document.getElementById('ctrValue');
    const conversionValue = document.getElementById('conversionValue');
    
    let roteiroAtivo = 'pergunta';
    
    // Atualizar preview inicial
    updatePreview();
    
    // Event listeners para tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            roteiroAtivo = button.dataset.roteiro;
            updatePreview();
        });
    });
    
    // Event listeners para inputs
    nomeEscolaInput.addEventListener('input', updatePreview);
    regiaoInput.addEventListener('input', updatePreview);
    
    // Copiar roteiro
    copyButton.addEventListener('click', () => {
        const texto = previewContent.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            copyButton.textContent = '✅ Copiado!';
            setTimeout(() => {
                copyButton.textContent = '📋 Copiar Roteiro';
            }, 2000);
        });
    });
    
    function updatePreview() {
        const roteiro = roteiros[roteiroAtivo];
        const nomeEscola = nomeEscolaInput.value || '[NOME DA ESCOLA]';
        const regiao = regiaoInput.value || '[REGIÃO]';
        
        let conteudo = roteiro.titulo + '\n\n' + roteiro.conteudo;
        conteudo = conteudo.replace(/\[ESCOLA\]/g, nomeEscola);
        conteudo = conteudo.replace(/\[REGIÃO\]/g, regiao);
        
        previewContent.textContent = conteudo;
        ctrValue.textContent = roteiro.ctr;
        conversionValue.textContent = roteiro.conversao;
    }
}

// Configurar gráficos
function setupCharts() {
    // Gráfico de Classes Sociais
    const ctx1 = document.getElementById('classesSociaisChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Classe A', 'Classe B', 'Classe C', 'Outras'],
            datasets: [{
                data: [25, 45, 20, 10],
                backgroundColor: [
                    '#2563EB',
                    '#10B981',
                    '#F59E0B',
                    '#E5E7EB'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                title: {
                    display: true,
                    text: 'Distribuição por Classe Social',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // Gráfico de Crescimento
    const ctx2 = document.getElementById('crescimentoChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Franchising Educacional (%)',
                data: [8.2, 5.1, 9.8, 11.2, 12.1, 13.5],
                borderColor: '#2563EB',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Calculadora ROI
function setupROICalculator() {
    const numAlunosInput = document.getElementById('numAlunos');
    const ticketMedioInput = document.getElementById('ticketMedio');
    const faturamentoMensal = document.getElementById('faturamentoMensal');
    const faturamentoAnual = document.getElementById('faturamentoAnual');
    
    function calcularROI() {
        const numAlunos = parseInt(numAlunosInput.value) || 0;
        const ticketMedio = parseInt(ticketMedioInput.value) || 0;
        
        const mensal = numAlunos * ticketMedio;
        const anual = mensal * 12;
        
        faturamentoMensal.textContent = `R$ ${mensal.toLocaleString('pt-BR')}`;
        faturamentoAnual.textContent = `R$ ${anual.toLocaleString('pt-BR')}`;
    }
    
    numAlunosInput.addEventListener('input', calcularROI);
    ticketMedioInput.addEventListener('input', calcularROI);
    
    // Calcular inicial
    calcularROI();
}

// Scroll Spy
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Animações de entrada para números
function animateNumbers() {
    const numbers = document.querySelectorAll('.big-number');
    
    numbers.forEach(number => {
        const finalValue = number.textContent;
        const isPercentage = finalValue.includes('%');
        const isYear = finalValue.includes('anos');
        const isCurrency = finalValue.includes('R$');
        
        if (!isYear && !isCurrency) {
            const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
            let currentValue = 0;
            const increment = numericValue / 50;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                if (isPercentage) {
                    number.textContent = currentValue.toFixed(1) + '%';
                } else {
                    number.textContent = Math.round(currentValue);
                }
            }, 30);
        }
    });
}

// Observador para animar números quando visíveis
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            numberObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dashboardSection = document.querySelector('.dashboard');
    if (dashboardSection) {
        numberObserver.observe(dashboardSection);
    }
});

