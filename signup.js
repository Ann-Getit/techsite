
document.addEventListener('DOMContentLoaded', () => {


async function signupUser(name, email, password) {
    try {
  const res = await fetch('http://127.0.0.1:3002/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

   if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

  const data = await res.json();
  console.log("Response van backend:", data); // hier zie je de response van de server
  return data;
    } catch (err) {
      console.error("Fetch fout:", err);
      return { success: false, message: err.message };
    }
}

// Form submit handler
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // voorkomt dat de pagina herlaadt

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log("Verstuur signup request:", { name, email, password });

   const data = await signupUser(name, email, password);

   if (data.success) {   // check of de backend succes terugstuurt
    console.log("Signup gelukt → redirect...");
    window.location.href = 'welkom.html';  // redirect naar nieuwe pagina
  } else {
    alert('Er is iets misgegaan: ' + (data.message || 'Probeer het opnieuw'));
  }
});
});
