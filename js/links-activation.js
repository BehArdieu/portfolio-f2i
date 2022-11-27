
let links = document.querySelectorAll(".my_links a");
let bodyId = document.querySelector("body").id;


for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add("active");
    }
}