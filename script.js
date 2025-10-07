
// Função para animação de Fade In
function fadeIn(element) {
  let opacity = 0;
  element.style.display = 'block'; // Garante que o elemento está visível
  
  const fadeInterval = setInterval(function() {
    opacity += 0.05;
    element.style.opacity = opacity;
    
    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 30); // Ajuste a velocidade com o intervalo
}

// Chama a função para animar um elemento
window.onload = function() {
  const element = document.getElementById('fadeInElement'); // Substitua com o ID do seu elemento
  fadeIn(element);
};
