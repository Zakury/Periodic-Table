document.querySelectorAll(".element").forEach(element => {
    element.addEventListener("click", _ => {
        location.replace("#" + element.classList[1]);
    });
});