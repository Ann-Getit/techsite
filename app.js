
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

if (menu && menuLinks) {
menu.addEventListener('click', () => {
   menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active');
});
}

 





    // --- LOGIN HANDLER (alleen login pagina) ---
  const loginForm = document.getElementById('loginForm');
  if (loginForm) { // alleen als we op login pagina zijn
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const res = await fetch('http://127.0.0.1:3002/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log('Login response:', data); // <-- check of token aanwezig is

        if (data.success) {
          //bewaar de token
          localStorage.setItem('token', data.token);

          window.location.href = 'InAccount.html';
        } else {
          alert('Login mislukt: ' + (data.message || 'Probeer opnieuw'));
        }
      } catch (err) {
        console.error("Login fout:", err);
        alert('Er is iets misgegaan. Probeer opnieuw.');
      }
    });
  }


// --- DYNAMISCHE NAVBAR EN LOGIN STATUS ---
function updateNavbar(isLoggedIn) {

  const signupBtn = document.getElementById('signupBtn');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (signupBtn && loginBtn && logoutBtn) {
    if (isLoggedIn) {
      signupBtn.style.display = 'none';
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
    } else {
      signupBtn.style.display = 'block';
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  }

  const navbarBtns = document.querySelectorAll('.navbar__btn');
  navbarBtns.forEach(btn => {
      btn.classList.toggle('logged-in', isLoggedIn);
    btn.classList.toggle('logged-out', !isLoggedIn);
  });
  }

// Logout functie voor alle pagina’s
function logout() {
 const token = localStorage.getItem('token');

 // 2️⃣ Check of de token bestaat
  if (!token) {
    console.warn('Geen token gevonden, uitloggen niet mogelijk.');
    window.location.href = 'inloggen.html'; // redirecten naar login
    return; // stop de functie hier
  }

   // stuur bericht naar server
  fetch('http://127.0.0.1:3002/api/logout', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
      }
  })

  .then(res => res.json())
  .then(data => {
    console.log("Logout response van server:", data);

    // token wissen nádat de server op de hoogte is
    localStorage.removeItem('token');
  window.location.href = 'inloggen.html';
})
.catch(err => {
    console.error('Logout fout:', err);
    localStorage.removeItem('token'); // alsnog wissen
    // toch token verwijderen zodat de gebruiker uitgelogd is
    window.location.href = 'inloggen.html';
});
}

document.addEventListener('DOMContentLoaded', () => {
const currentPage = window.location.pathname.split('/').pop().toLowerCase();
   const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
      // Logout knop event listener

        // 1. Op de homepage altijd uitgelogd zijn
  if (currentPage === 'index.html' || currentPage === '') {
    localStorage.removeItem('token');
    updateNavbar(false);
  } else {

  updateNavbar(isLoggedIn);

   // 3️⃣ Restrictie pagina's
    const restrictedPages = ['product.html', 'inaccount.html', 'tech.html'];
    if (!isLoggedIn && restrictedPages.includes(currentPage)) {
      window.location.href = 'inloggen.html';
    }
  }


const logoutBtn = document.getElementById('logoutBtn');
 // 4️⃣ Logout knop: slechts één keer listener
  if (logoutBtn) { 
    logoutBtn.onclick = logout;
  }
});

