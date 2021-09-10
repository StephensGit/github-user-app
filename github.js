class Github {
    constructor(){
      this.user = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async getUser(user){
        const query = `https://api.github.com/users/${user}`;
        const response = await fetch(query);
        const data = await response.json();
        if(data.message !== "Not Found") {
            updateUI(data);
        }
        else {
            displayError();
        }
        // console.log(data);
        return data;
    }
}
