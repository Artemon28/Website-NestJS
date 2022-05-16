$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});


async function signUp() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (password.length < 8 || !hasNumber(password) || !hasLetters(password)) {
    alert("Пароль должен содержать буквы и цифры и иметь длину не менее 8 символов");
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

async function signIn() {
  var email = document.getElementById('emailIn').value;
  var password = document.getElementById('passwordIn').value;

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
    const response = await fetch('/auth/signIn', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "same-origin",
      body: JSON.stringify(user),
    });

    if (response.statusText !== "OK") {
      throw new Error(`Failed to sign in user: ${response.statusText}`);
    }

    let userEmail = await response.json();

    if (!userEmail.email) {
      throw new Error(`Wrong login or password, error: ${userEmail.status}`);
    }


    window.location.href = "/";
  } catch (error) {
    console.error(error);
    alert(`Не удалось осуществить вход:\n${error}`);
  }
}

async function logout() {
  try {
    const response = await fetch('/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      if (response.status != 401) {
        throw new Error(`Failed to log out user: ${response.statusText}`);
      }
    }

    window.location.href = "/";
  } catch (error) {
    console.error(error);
    alert(`Не удалось выйти:\n${error}`);
  }
}


function hasNumber(inputString) {
  return /\d/.test(inputString);
}

function hasLetters(inputString) {
  return /[^a-zA-Z]/.test(inputString);
}
