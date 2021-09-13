const theme_toggler = document.querySelector('#theme_toggler');
const toggle_icon = document.querySelector('.light-toggle-icon');
const light = document.querySelector('.light-toggle');
const dark = document.querySelector('.dark-toggle');

const form = document.querySelector('form');
const githubUser = new Github();
const newUser = document.querySelector('section');

const toggle_Icon_Check = toggle_icon.getAttribute("src");
let toggle_Icon_Check_Value = '';

// toggle_icon.addEventListener('mouseover', () => {
//     if(toggle_Icon_Check === "./assets/icon-moon.svg") {
//         light.classList.add('dark-toggle');
//         toggle_icon.setAttribute("src","./assets/icon-moon-dark.svg");
//     } 
//     else if (toggle_Icon_Check === "./assets/icon-sun.svg"){ 
//         toggle_icon.setAttribute("src","./assets/icon-sun-dark.svg");
//     } 
// })

// toggle_icon.addEventListener('mouseout', () => {
//     light.classList.remove('dark-toggle');
//     if(toggle_Icon_Check === "./assets/icon-sun.svg") {
//         console.log("out");
//         toggle_icon.setAttribute("src","./assets/icon-sun-dark.svg");
//     } 
//     else if(toggle_Icon_Check === "./assets/icon-moon-dark.svg") {
//         console.log("out");
//         toggle_icon.setAttribute("src","./assets/icon-moon.svg");
//     } 
//     else {
//         toggle_icon.setAttribute("src","./assets/icon-moon.svg")
//     }
// })

theme_toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');
    if(document.body.classList.contains('dark_mode')){
        toggle_icon.setAttribute("src","./assets/icon-sun.svg");
    } else {
        toggle_icon.setAttribute("src","./assets/icon-moon.svg")
    }
})

const updateUI = (user) => {
    // console.log(`username: ${user.name}`);
    newUser.innerHTML = ``;
    newUser.innerHTML = `
    <div class="">
        <div class="align-center flex-row">
            <img class="avatar" src="${user.avatar_url}" alt="">
            <div class="flex-column">
                <h3>${user.login}</h3>
                <p class="user-handle">@${user.twitter_username}</p>
                <p class="date">${user.created_at}</p>
            </div>
        </div>
        
        <div class="header tablet-flex-row desktop-flex-row">
            <div class="body-text">
                <div class="flex-row">
                    <p>${user.bio}</p>
                </div>
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
                <div class="footer">
                <ul class="ul-flex-row">
                    <div class="flex-column flex-column-ul">
                        <div class="flex-row">
                            <a href=""><img src="/assets/icon-location.svg" alt=""></a><li class="">${user.location}</li>
                        </div>
                        <div class="flex-row">
                        <a class="flex-row" href="${user.blog}"><img class="website-icon" src="./assets/icon-website.svg" alt=""><li>${user.blog}</li></a>
                        </div>
                    </div>
                    <div class="flex-column">
                        <div class="flex-row ">
                            <a href=""><img class="twitter-icon" src="./assets/icon-twitter.svg" alt=""></a><li>${user.twitter_username}</li>
                        </div>
                        <div class="flex-row">
                            <a href=""><img src="./assets/icon-company.svg" alt=""></a><li class="wordbreak">@${user.company}</li> 
                        </div>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    </div>

    `
}



const displayError = () => {
    newUser.innerHTML = ``;
    newUser.innerHTML = `
    <div class="header flex-row">
        <div class="flex-column">
            <h3>No results found!</h3>
            <p class="user-handle">Please search again.</p>
        </div>
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