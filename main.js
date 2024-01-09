document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/isaias1626')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            userNameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repository.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})