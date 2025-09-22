/*document.addEventListener('DOMContentLoaded', () => {
const isLoggedIn = localStorage.getItem('loggedIn'); //DOMContentLoaded is alleen nodig als js iin <head> is. het zorgt ervoor dat de html als eerst geladen wordt voor dat js aan de slaag gaat. hier toch geplaats om te weten.

if (isLoggedIn) {
  document.getElementById('signupBtn').style.display = 'none';
  document.getElementById('loginBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'block';

} else {
  document.getElementById('signupBtn').style.display = 'block';
  document.getElementById('loginBtn').style.display = 'block';
  document.getElementById('logoutBtn').style.display = 'none';
}
});

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'inloggen.html';
}

// Voorkom dat uitgelogde gebruiker pagina kan terughalen via back-button
    window.onload = () => {
      if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'inloggen.html';
      }
    };*/