 const API_URL = 'http://127.0.0.1:3002/api/users'; //verwijderen overbodig ik heb al fetch api/login

async function getUsers() {
    try {
      const response = await fetch(API_URL, {
         method: 'GET' // ← hiermee stuur je cookies mee
      });
      if (!response.ok) {
        throw new Error('Netwerk response was niet ok: ' + response.status);
      }
      const data = await response.json();
      console.log(data); // hier krijg je je users binnen
    } catch (error) {
      console.error('Fout bij ophalen van users:', error);
    }
  }

  getUsers();
 

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
   menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active');
})

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'inloggen.html';
}
  // of cookies verwijderen window.location.href = 'inloggen.html';