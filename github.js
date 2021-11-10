class Github {
    constructor(){
      this.user = '';
    }

    async getUser(user){
        const query = `https://api.github.com/users/${user}`;
        const response = await fetch(query);
        const data = await response.json();
        console.log(data);
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
