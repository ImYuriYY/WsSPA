let users = [],
isAuth = false

let user = {
    login: 'user',
    psw:'123'
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_reg')) {
        let form = document.forms.registration,
        login = form.elements[0].value,
        email = form.elements[1].value,
        psw = form.elements[2].value,
        psw2 = form.elements[3].value;
        event.preventDefault()
        if(psw === psw2 && psw !== '') {
            users.push({login,email,psw})
            isAuth = true;
        } else {
            isAuth = false;
        }
        console.log(users)
    }
})



document.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.classList.contains('btn')) {
        let form = document.forms.login,
        login = form.elements[0].value,
        psw = form.elements[1].value;
        if(login === user.login && psw === user.psw) {
            isAuth = true;
        } else {
            isAuth = false;
        }
        console.log(isAuth)
    }
})





document.addEventListener("click", (event) => {
    event.preventDefault()
    if(event.target.tagName == 'A') {
        console.log(event.target.href)
        route(event);
        handleLocation()
    }
})




const route = (event) => {
    window.history.pushState({}, '', event.target.href)
}

const routes = {
    '/': 'main.html',
    '/registration': 'reg.html',
    '/login': 'login.html',
    '/albums': 'albums.html'
}


const handleLocation = async () => {
    let path = window.location.pathname
    let html = await fetch(routes[path]).then((data) => data.text());
    document.querySelector('#pageContent').innerHTML = html
}


window.onpopstate = handleLocation;
window.route = route;
handleLocation()