let theme_toggler = document.querySelector('#theme_toggler');

theme_toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark_mode');
    console.log("dark mode");
})