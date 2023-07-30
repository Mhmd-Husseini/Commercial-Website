let signup_btn = document.getElementById('Signup-button');
signup_btn.addEventListener('click', signup);

function signup() {
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let address = document.getElementById('Address').value;
    let password = document.getElementById('Password').value;
    
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('address', address);
    data.append('password', password);
    
    axios({
        "method": "post",
        "url": "http://127.0.0.1:8000/api/register",
        "data": data
    }).then((result) => {
        alert("hi")
        alert(result.data.authorisation.token)
        console.log(result.data.authorisation.token)
        if (result.data.status == "success") {
            alert("signed up")
            localStorage.setItem('token', result.data.authorisation.token) 
            window.location.href = 'index.html'; 
        }
    }).catch((err) => {
        console.error(err)
    });
}
