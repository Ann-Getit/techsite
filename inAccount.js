window.onload = () => {
  if (!localStorage.getItem('loggedIn')) {
    // Niet ingelogd → terug naar loginpagina
    window.location.href = 'inloggen.html';
  }
};

function logout () {
    localStorage.removeItem('loggedIn');//verwijderd logging status
window.location.href = 'inloggen.html';// naar homepage
}