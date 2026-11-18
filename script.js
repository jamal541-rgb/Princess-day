(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progress = document.getElementById('progressFill');
  const petalField = document.getElementById('petalField');
  let current = 0;

  function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    if (progress) progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.getElementById('beginBtn')?.addEventListener('click', () => showSlide(1));
  document.querySelectorAll('.next').forEach(button => button.addEventListener('click', () => showSlide(current + 1)));
  document.querySelectorAll('.back').forEach(button => button.addEventListener('click', () => showSlide(current - 1)));
  document.querySelector('.restart')?.addEventListener('click', () => showSlide(0));

  if (petalField) {
    const symbols = ['♡', '✧', '·', '❀'];
    for (let i = 0; i < 22; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.textContent = symbols[i % symbols.length];
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${10 + Math.random() * 13}s`;
      petal.style.animationDelay = `${-Math.random() * 20}s`;
      petal.style.fontSize = `${10 + Math.random() * 12}px`;
      petalField.appendChild(petal);
    }
  }
  showSlide(0);
})();
