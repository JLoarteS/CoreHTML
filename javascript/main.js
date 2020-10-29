document.getElementById("creditos").onclick = function() { aboutMe() }

function aboutMe() {
    let element = document.getElementsByClassName('alert')[0]

    if (typeof(element) != 'undefined' && element != null)
        element.parentElement.remove()
    
    const div_alert = document.createElement('div')

    div_alert.innerHTML = "<div class='alert'> " +
        "<span class='closebtn' onclick='this.parentElement.parentElement.remove()'>&times</span>" +
        "Página creada por:<strong> Jorge Loarte Smith </strong>" +
        "</div>"

    document.body.append(div_alert)
}