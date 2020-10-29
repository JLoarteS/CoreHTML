function getInfo() {

    const div = document.querySelector("#api")
    var url = "https://rawg-video-games-database.p.rapidapi.com/games/snake-2"
    
    fetch(url, {
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "db4325e290msh1b7a68029c7af4ap18a820jsn4b4cec17697c"
        }
	}).then((response) => { return response.json()
    }).then( data => {

        const {name, description} = data

        // Create the Elements
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
    
        // Adding Content
        h1.innerHTML = name
        p.innerHTML = description
    
        // Appending to div elements
        div.appendChild(h1)
        div.appendChild(p)
    })
}