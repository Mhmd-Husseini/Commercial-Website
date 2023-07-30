function login() {
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;

    let data = {
      email: email,
      password: password
    };

    axios.post('http://127.0.0.1:8000/api/login', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'success') {
          alert("Logged in successfully!");
          localStorage.setItem('token', response.data.authorisation.token);
          window.location.href = 'laptops.html';
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred during login. Please try again later.");
      });
  }

  let signin_btn = document.getElementById('Signin');
  signin_btn.addEventListener('click', login);