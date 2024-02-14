const pageContent = document.getElementById('pageContent')

const homePageLink = document.getElementById('homePageLink')
const registerPageLink = document.getElementById('registerPageLink')
const authorizePageLink = document.getElementById('authorizePageLink')
const albumsPageLink = document.getElementById('albumsPageLink')

function route(thisRoute) {
    window.history.pushState({}, '', thisRoute)
}

document.addEventListener('click', (event) => {
    if(event.target.tagName === 'A') {
        event.preventDefault()
        route(event.target.href)
    }
})




async function homePage() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        pageContent.innerHTML = `
            <ul class="posts-list">

            </ul>
        `
        const postsList = document.querySelector('.posts-list')
        data.forEach(element => {
            let post = document.createElement('li')
            post.classList = 'post'

            let postTitle = document.createElement('p')
            postTitle.classList = 'post-title'
            postTitle.innerText = element.title

            let postBody = document.createElement('p')
            postBody.classList = 'post-body'
            postBody.innerText = element.body

            post.appendChild(postTitle)
            post.appendChild(postBody)
            postsList.appendChild(post)
        });

    })
}

function registerPage() {
    pageContent.innerHTML = `
        <form action="" id="registerForm" name='aboba' method="post">
            <label>
                <p>Email</p>
                <input type="email" id="registerEmail">
            </label>
            <label>
                <p>Username</p>
                <input type="text" id="registerUsername">
            </label>
            <label>
                <p>Password</p>
                <input type="password" id="registerPassword">
            </label>
            <label>
                <p>Repeat password</p>
                <input type="password" id="registerRepPassword">
            </label>

            <button id="registerButton">Зарегистрироваться</button>
        </form>
    `
}

function authorizePage() {
    pageContent.innerHTML = `
        <form action="" id="authorizeForm" method="post">
            <label>
                <p>Email</p>
                <input type="email" id="authorizeEmail">
            </label>
            <label>
                <p>Password</p>
                <input type="password" id="authorizePassword">
            </label>

            <button id="authorizeButton">Зарегистрироваться</button>
        </form>
    `
}

async function albumsPage() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(data => data.json())
    .then(data => {
        pageContent.innerHTML = `
            <ul class="albums-list">

            </ul>
        `

        const albumsList = document.querySelector('.albums-list')

        data.forEach(element => {
            let album = document.createElement('li')
            album.classList = 'album'

            let albumName = document.createElement('p')
            albumName.classList = 'album-name'
            albumName.innerText = element.title

            album.appendChild(albumName)
            albumsList.appendChild(album)
        });
    })
}

albumsPageLink.addEventListener('click', albumsPage)
authorizePageLink.addEventListener("click", authorizePage)
registerPageLink.addEventListener("click", registerPage)
homePageLink.addEventListener('click', homePage)

homePage()





