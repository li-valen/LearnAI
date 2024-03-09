const scrollContainer = document.getElementById('scrollContainer');
const colorTransition = document.getElementById('colorTransition');

scrollContainer.addEventListener('scroll', () => {
  const scrollPercentage = (scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight)) * 100;
  const gradientColor = 'linear-gradient(to top, #000 ${scrollPercentage}%, transparent ${scrollPercentage}%)';
  colorTransition.style.background = gradientColor;
});