document.addEventListener('DOMContentLoaded', function() {
    let registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', signup);
  });

function signup(event) {
    event.preventDefault();
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let address = document.getElementById('Address').value;
    let password = document.getElementById('Password').value;

    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('address', address);
    data.append('password', password);

    axios.post('http://127.0.0.1:8000/api/register', data)
        .then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
                alert("Signed up successfully!");
                localStorage.setItem('token', response.data.authorisation.token);
                window.location.href = 'index.html';
            } else {
                alert("Registration failed. Please try again.");
            }
        })
        .catch((err) => {
            console.error(err);
            alert("An error occurred during registration. Please try again later.");
        });

    return false; 
}
