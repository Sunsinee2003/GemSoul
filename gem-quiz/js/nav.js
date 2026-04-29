function toggleNav() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}
// Close on outside click
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.navbar');
  if (!nav.contains(e.target)) {
    document.querySelector('.nav-links').classList.remove('open');
  }
});
