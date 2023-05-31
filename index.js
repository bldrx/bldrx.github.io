document.getElementById('currentYear').innerText = new Date().getFullYear()
document.getElementById('formSignin').onsubmit = function (event) {
    event.preventDefault()
    alert('Invalid email or password')
}
