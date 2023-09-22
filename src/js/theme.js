function setTheme(theme) {
  const heroText = document.querySelector('.hero-text');
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--primary-color', '#16A5DF');
    document.documentElement.style.setProperty('--white-color', '#2a2a2a');
    document.documentElement.style.setProperty('--text-color', '#f3f5f6');
    document.documentElement.style.setProperty('--gray-color', '#545454');
    document.documentElement.style.setProperty('--pale-color', '#fff');
    document.documentElement.style.setProperty('--dark-gray-color', '#f3f5f6');
    document.documentElement.style.setProperty('--border-color', '#0d6385');
    document.documentElement.style.setProperty('--border-on-green', '#4c4c4c');
    document.documentElement.style.setProperty('--border-active', 'green');
    document.documentElement.style.setProperty(
      '--input-border-color',
      '#545454'
    );
    heroText.style.setProperty('--white-color', '#fff');
  } else {
    document.documentElement.style.setProperty('--primary-color', '#121417');
    document.documentElement.style.setProperty('--white-color', '#fff');
    document.documentElement.style.setProperty('--gray-color', '#f3f5f6');
    document.documentElement.style.setProperty(
      '--border-color',
      'rgba(18, 20, 23, 0.1);'
    );
    document.documentElement.style.setProperty(
      '--dark-gray-color',
      'rgba(255, 255, 255, 0.4)'
    );
    document.documentElement.style.setProperty(
      '--border-on-green',
      'rgba(255, 255, 255, 0.1)'
    );
    document.documentElement.style.setProperty(
      '--border-active',
      'rgba(77, 194, 116, 0.1)'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      'rgba(18, 20, 23, 0.5)'
    );
    document.documentElement.style.setProperty(
      '--pale-color',
      'rgba(255, 255, 255, 0.7)'
    );
    document.documentElement.style.setProperty(
      '--input-border-color',
      'rgba(18, 20, 23, 0.10)'
    );
  }

  localStorage.setItem('theme', theme);
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme || 'light';
}

const currentTheme = getSavedTheme();
setTheme(currentTheme);

const toggleThemeButton = document.querySelector('.toggle-theme-btn');
const useElement = document.querySelector('.icon-theme use');

toggleThemeButton.addEventListener('click', () => {
  const currentTheme = getSavedTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);

  const currentHref = useElement.getAttribute('href');
  currentHref === './images/icons.svg#icon-sun'
    ? useElement.setAttribute('href', './images/icons.svg#icon-moon')
    : useElement.setAttribute('href', './images/icons.svg#icon-sun');
});
