function filterGems(element, btn) {
  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter articles
  document.querySelectorAll('.gem-article').forEach(article => {
    if (element === 'all' || article.dataset.element === element) {
      article.style.display = '';
      article.style.animation = 'fadeUp 0.4s ease forwards';
    } else {
      article.style.display = 'none';
    }
  });
}

// Scroll to anchor smoothly
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight
        el.style.borderColor = 'rgba(200,170,110,0.5)';
        setTimeout(() => { el.style.borderColor = ''; el.style.transition = 'border-color 1s ease'; }, 2000);
      }
    }, 300);
  }
});
