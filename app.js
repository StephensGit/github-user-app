const githubUser = new Github();
const theme_toggler = document.querySelector('#theme_toggler');
const form = document.querySelector('form');
const newUser = document.querySelector('section');

theme_toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');
    console.log("dark mode");
})

const updateUI = (user) => {
    // console.log(`username: ${user.name}`);
    newUser.innerHTML = ``;
    newUser.innerHTML = `
    <div class="header flex-row">
        <img class="avatar" src="${user.avatar_url}" alt="">
        <div class="flex-column">
            <h3>${user.login}</h3>
            <p class="user-handle">@${user.twitter_username}</p>
            <p class="date">${user.created_at}</p>
        </div>
    </div>

    <div class="body-text">
        <p>${user.bio}</p>
        <div class="repo-info flex-row">
            <div class="flex-column">
                <p>Repos</p>
                <span>${user.public_repos}</span> 
            </div>
            <div class="flex-column">
                <p>Followers</p>
                <span>${user.followers}</span> 
            </div>
            <div class="flex-column">
                <p>Following</p>
                <span>${user.following}</span> 
            </div>
        </div>
    </div>

    <div class="footer flex-row">
        <ul class="flex-column">
            <div class="flex-row">
                <a href=""><img src="/assets/icon-location.svg" alt=""></a><li class="">${user.location}</li>
            </div>
            <div class="flex-row">
                <a href=""><img src="./assets/icon-website.svg" alt=""></a><li>${user.blog}</li>
            </div>
            <div class="flex-row">
                <a href=""><img src="./assets/icon-twitter.svg" alt=""></a><li>${user.twitter_username}</li> 
            </div>
            <div class="flex-row">
                <a href=""><img src="./assets/icon-company.svg" alt=""></a><li class="wordbreak">@${user.url}</li> 
            </div>
        </ul>
    </div>
    `
}

form.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    
    // get user value from form
    const user = form.user.value.trim();
    form.reset();
  
    // update the ui with new user
    githubUser.getUser(user)
        .then(data => console.log(data))
        .catch(err => console.log(err));
  
    // set local storage
    // localStorage.setItem('city', city);
  
  });

  window.addEventListener('load', () => {
    githubUser.getUser(`stephensGit`);
  });