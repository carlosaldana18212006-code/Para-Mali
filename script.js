// Control de la animación y eventos
document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const svg = document.querySelector('.hello-kitty-svg');
    const romanticMessage = document.getElementById('romanticMessage');
    const typingText = document.getElementById('typingText');
    
    // Mostrar el botón exactamente a los 10 segundos
    setTimeout(() => {
        continueBtn.classList.remove('hidden');
        continueBtn.style.opacity = '1';
        continueBtn.style.transform = 'translateY(0)';
        continueBtn.style.transition = 'all 0.8s ease-out';
    }, 10000); 
    
    // Event listener para el botón de continuar
    continueBtn.addEventListener('click', function() {
        document.getElementById('musica').play();
        continueBtn.style.transform = 'scale(0.95)';
        continueBtn.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            continueBtn.style.transform = 'scale(1)';
            showRomanticMessage();
        }, 100);
    });
    
    function showRomanticMessage() {
        romanticMessage.classList.add('show');
        const fullText = typingText.textContent;
        typingText.textContent = ''; 
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        typingText.appendChild(cursor);
        
        let charIndex = 0;
        const typingSpeed = 80; 
        
        function typeWriter() {
            if (charIndex < fullText.length) {
                const textNode = document.createTextNode(fullText.charAt(charIndex));
                typingText.insertBefore(textNode, cursor);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => { addDriftToHearts(); }, 2000);
            }
        }
        setTimeout(() => { typeWriter(); }, 300);
    }
    
    function addDriftToHearts() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart) => {
            const drift = (Math.random() - 0.5) * 40;
            heart.style.setProperty('--drift', `${drift}px`);
        });
    }
    
    svg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    svg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    setTimeout(() => {
        document.body.classList.add('animation-complete');
    }, 10000);

    // --- EFECTO DE CLIC (DENTRO DEL DOM PARA QUE NO FALLE) ---
    document.addEventListener('click', function(e) {
        // No crear corazón si se toca el botón de cerrar
        if (e.target.tagName === 'BUTTON') return;

        const heartClick = document.createElement('div');
        heartClick.className = 'heart-click';
        heartClick.style.left = e.clientX + 'px';
        heartClick.style.top = e.clientY + 'px';
        document.body.appendChild(heartClick);

        setTimeout(() => {
            heartClick.remove();
        }, 1500);
    });
});

function closeMessage() {
    const romanticMessage = document.getElementById('romanticMessage');
    romanticMessage.classList.remove('show');
}