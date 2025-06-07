/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}


showMenu('nav-toggle','nav-menu')

const toggleBtn = document.getElementById('langToggle');
let languages = ['ru', 'uz', 'en'];
let currentIndex = 0;

toggleBtn.addEventListener('click', () => {
  // Переключаем язык по кругу
  currentIndex = (currentIndex + 1) % languages.length;
  const currentLang = languages[currentIndex];

  // Обновляем текст кнопки
  if (currentLang === 'ru') toggleBtn.textContent = '🇷🇺 Русский';
  if (currentLang === 'uz') toggleBtn.textContent = '🇺🇿 Oʻzbekcha';
  if (currentLang === 'en') toggleBtn.textContent = '🇬🇧 English';

  // Обновляем текст на странице
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});








  
