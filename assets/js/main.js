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







  const botToken = '8028876961:AAGddD-zAjkpBC2-hIu0kEZCAPFCiEoPjQU'; // замени на свой токен
  const chatId = '6938522275'; // замени на свой chat_id

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = `📩 Новая заявка:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('status').innerText = "✅ Сообщение отправлено!";
        document.getElementById('contact-form').reset();
      } else {
        document.getElementById('status').innerText = "❌ Ошибка при отправке.";
      }
    })
    .catch(error => {
      document.getElementById('status').innerText = "❌ Сетевая ошибка.";
      console.error(error);
    });
  });



  
