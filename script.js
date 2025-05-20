const letterText = `Querido amor:

Desde que llegaste a mi vida, todo tiene más color, más sentido, más magia. 
Gracias por cada sonrisa, por cada instante compartido y por ser tú.

Te amo más de lo que las palabras pueden expresar.

Con todo mi corazón,
💖`;

function openLetter() {
  // Oculta el mensaje inicial solo cuando se abre la carta
  const intro = document.getElementById('intro-message');
  if (intro) intro.style.display = 'none';

  const flap = document.querySelector('.flap');
  flap.style.transform = 'rotateX(180deg)';

  // Oculta la solapa tras la animación
  setTimeout(() => {
    flap.style.opacity = '0';
    flap.style.pointerEvents = 'none';
  }, 1000);

  // Muestra el contenido de la carta
  const letter = document.getElementById('letter');
  const textContainer = document.getElementById('letter-text');
  letter.style.opacity = 1;

  let i = 0;
  textContainer.innerHTML = "";

  // Efecto de escritura
  const typeWriter = setInterval(() => {
    if (i < letterText.length) {
      textContainer.innerHTML += letterText.charAt(i);
      i++;
    } else {
      clearInterval(typeWriter);
    }
  }, 50);
}
