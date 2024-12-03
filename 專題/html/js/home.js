

function showlogin(){
    document.getElementById("login-page").classList.add("show-pop");
}

function close_page(){
    document.getElementById("login-page").classList.remove("show-pop");
    document.getElementById("sign-page").classList.remove("show-pop");
}

function gotosign(){
    document.getElementById("login-page").classList.remove("show-pop");
    document.getElementById("sign-page").classList.add("show-pop");
}

function gotologin(){
    document.getElementById("login-page").classList.add("show-pop");
    document.getElementById("sign-page").classList.remove("show-pop");
}

