window.onload = async function doesSessionExist() {
  var logged = document.getElementById("logged");
  var unlogged = document.getElementById("unlogged");

  try {
    const response = await fetch('/session', {
      method: 'GET',
    });
    if (response.statusText !== "OK") {
      throw new Error(`Failed to define a user session: ${response.statusText}`);
    }

    let userEmail = await response.json();
    if (userEmail.email){
      logged.style.display = "flex";
      unlogged.style.display = "none";
      let logged_as = document.getElementById("logged_as");
      logged_as.innerHTML += userEmail.email;
    } else {
      logged.style.display = "none";
      unlogged.style.display = "flex";
    }
  } catch (error) {
    logged.style.display = "none";
    unlogged.style.display = "flex";
    console.error(error);
    alert(`Невозможно определить сессию пользователя\n${error}`);
  }
}