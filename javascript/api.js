$(document).ready(function() {
    for (let i = 0; i < games.length; i++)
        $('.chooser-collection').append('<a class=\"chooser-item\">' + games[i][0] + '</a>')
    $('.chooser-item').click(function(){
        $('.chooser-item.active').removeClass("active")
        $(this).addClass("active");
    })

    $('.infoBtn').click(function(){
        let selected = $('.chooser-item.active').text()
        if (selected != undefined && selected != '')
            getInfoGame(selected)
        else
            alert('Elige un juego para ver la información')
    })
})

function getInfoGame(game) {

    const div = document.querySelector("#api")
    div.innerHTML = ""
    var url = "https://rawg-video-games-database.p.rapidapi.com/games/"
    url += games[findGame(game)][1]

    // Info/Code Source
    // https://rapidapi.com/accujazz/api/rawg-video-games-database
    fetch(url, {
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "db4325e290m"+"sh1b7a68029c7"+"af4ap18a820jsn"+"4b4cec17697c"
        }
	}).then((response) => { return response.json()
    }).then( data => {

        const {name, released, background_image, description, rating, metacritic} = data

        // Adding Content
        div.innerHTML =
            "<h3>" + name + "</h3>" +
            "<p class=\"released\">" + released + "</p>" +
            "<div class=\"description\">" +
                "<img class=\"background_image\" src=\"" + background_image + "\"></img>" +
                description +
            "</div>" +
            "<p class=\"rating\">Calificación: " + rating +
                " <span class=\"star-rating\">" + addRating(rating) + "</span>" +
            "</p>"

        if (metacritic != undefined)
            div.innerHTML +=
                "<p class=\"metacritic\">Metacritic: " + metacritic + "</p>"
    })
}

function findGame(item) {

    for (let i = 0; i < games.length; i++)
        if (games[i].indexOf(item) == 0)
            return i
            
    return -1
}

function addRating(rating) {
    rating = Math.trunc(rating)
    txt = ""
    for (let i = 0; i < 5; i++)
    {
        if (i < rating)
            txt += "&starf;"
        else
            txt += "&star;"
    }

    return txt
}