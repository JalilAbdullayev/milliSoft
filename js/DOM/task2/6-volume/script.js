let volumeBar = document.querySelector("#volumeBar");
let volume = document.querySelector("#volume");
let lower = document.querySelector("#lower");
let higher = document.querySelector("#higher");
let volumeText = document.querySelector("h3");


volumeBar.onclick = () => {
    let x = Number(event.offsetX);
    let perc = Math.floor(x / volumeBar.offsetWidth * 100) + "%";
    volume.style.width = perc;
    volumeText.innerText = perc;
}

lower.onclick = () => {
    let vol = Number(volume.style.width.split('%')[0]);
    let updateVol = vol - 1 + "%";
    if(vol === 0) {
        alert('Minimum volume reached');
    } else {
        volume.style.width = updateVol;
        volumeText.innerText = updateVol;
    }
};

higher.onclick = () => {
    let vol = Number(volume.style.width.split('%')[0]);
    let updateVol = vol + 1 + "%";
    if(vol === 100) {
        alert('Maximum volume reached');
    } else {
        volume.style.width = updateVol;
        volumeText.innerText = updateVol;
    }
};