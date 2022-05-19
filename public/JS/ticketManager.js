async function buyTicketT1() {  //T1 mean that tribune is # 1
  var sectorNumber = document.getElementById('sectorNumber').value;
  var rowNumber = document.getElementById('rowNumber').value;
  var seatNumber = document.getElementById('seatNumber').value;

  const sector = await fetch('/tribune/1/sectorNumber/' + sectorNumber,{
    method: 'GET',
  })
  const sectorJSON = await sector.json();
  const row = await fetch('/sector/' + sectorJSON.id + '/rowNumber/' + rowNumber, {
    method: 'GET',
  })
  const rowJSON = await row.json();
  const seat = await fetch('/row/' + rowJSON.id + '/seatNumber/' + seatNumber, {
    method: 'GET',
  })
  const seatJSON = await seat.json();

  const ticketForm = {
    "formFields": [
      {
        "id": "name",   //в 6ой лабе взять имя от пользователя из сессии, все дела
        "value": "Name",
      },
      {
        "id": "cost",
        "value": 1000,   //По идее цена заложена в сектор, TODO
      },
      {
        "id": "email",
        "value": "email@email.em",   //тоже взять из пользователя
      },
    ]
  };

  const ticket = await fetch( 'ticket/seat/' + seatJSON.seatNumber,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "same-origin",
    body: JSON.stringify(ticketForm),
  })
  const ticketJSON = await ticket.json();

  fetch(user.id + '/ticket/' + ticketJSON.id,{
    method: 'PUT'
  })

  fetch('/reserve/' + seatJSON.seatNumber, {
    method: 'PUT',
  })



}

async function signUp() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (password.length < 8 || !hasNumber(password) || !hasLetters(password) || password == password.toLowerCase()) {
    alert("Пароль должен содержать буквы, цифры, иметь длину не менее 8 символов и содержать Заглавную букву");
    return;
  }

  const user = {
    "formFields": [
      {
        "id": "email",
        "value": email,
      },
      {
        "id": "password",
        "value": password,
      }
    ]
  };

  event.preventDefault();
  try {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "same-origin",
      body: JSON.stringify(user),
    });

    if (response.status >= 300) {
      throw new Error(`Failed to sign up user: ${response.statusText}`);
    }

    let userEmail = await response.json();

    if (!userEmail.user.email) {
      throw new Error(`Can't sign up: ${userEmail.status}`);
    }

    window.location.href = "/";
  } catch (error) {
    console.error(error);
    alert(`Не удалось зарегистрироваться:\n${error}`);
  }
}