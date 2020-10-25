document.getElementById("upButton").onclick = function() { topFunction() }
document.getElementById("creditos").onclick = function() { aboutMe() }

function topFunction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
}

function aboutMe() {
    alert("Pagina creada por:\nJorge Loarte Smith")
}