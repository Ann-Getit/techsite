
/*document.addEventListener('DOMContentLoaded', () => {
  async function loginUser(email, password) {
    try {
      const res = await fetch('http://127.0.0.1:3002/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      return await res.json();

    } catch (err) {
      console.error("Login fout:", err);
      return { success: false, message: err.message };
    }
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Verstuur login request:", { email, password });

    const data = await loginUser(email, password);

    if (data.success) {
      console.log("Login gelukt → redirect...");
      localStorage.setItem('loggedIn', 'true'); // status opslaan
      window.location.href = 'InAccount.html';  // of een dashboard
    } else {
      alert('Login mislukt: ' + (data.message || 'Probeer opnieuw'));

    }
 });
});
    // Check login status op andere pagina's
window.onload = () => {
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'inloggen.html';
  }
};

  // Logout
function logout() {
  localStorage.removeItem('loggedIn'); // alleen de status weg
  window.location.href = 'inloggen.html';
}
 