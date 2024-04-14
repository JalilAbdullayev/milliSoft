const project = document.querySelectorAll('.w-30');
const modal = document.getElementById('modal');

project.forEach(project => project.addEventListener("click", openModal));

function openModal(event) {
    const element = event.target.closest(".w-30");

    if(element) {
        const image = element.querySelector("img").src;
        const client = element.querySelector("h4").textContent;
        const category = element.querySelector("h5").textContent;

        document.getElementById("image").src = image;
        document.getElementById("client").textContent = client;
        document.getElementById("category").textContent = category;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    }
}