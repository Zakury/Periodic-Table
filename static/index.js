function display_element() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // Rough modal code.
            // TODO: Make better.
            let modal = document.querySelector(".modal");
            let items = JSON.parse(xhr.responseText);
            
            modal.className = "modal open";
            modal.innerHTML = `
                <div class="interior">
                    <h1>${ items["name"] }</h1>
                    <button class="close">Close Modal.</button>
                </div>
            `;

            let close = document.querySelector(".close")
            close.addEventListener("click", () => {
                modal.className = "modal closed";
                modal.innerHTML = "";

                location.replace("/");
            });
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