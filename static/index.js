function display_element() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // TODO: Replace with a modal.
            console.log(xhr.responseText);
        }
    };

    xhr.open("GET", "/api/" + window.location.hash.replace("#", ""));
    xhr.send();
}

document.querySelectorAll(".element").forEach(element => {
    element.addEventListener("click", _ => {
        location.replace("#" + element.classList[1]);
        display_element();
    });
});

window.addEventListener("load", _ => {
    if (window.location.hash.startsWith("#")) {
        display_element();
    }
});