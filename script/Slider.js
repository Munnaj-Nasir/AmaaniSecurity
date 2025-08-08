
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('slider');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

