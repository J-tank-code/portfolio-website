let nightMode = document.getElementById('knopje');

function switchMode() {
    document.body.classList.toggle("dark-mode")
}

nightMode.onclick = switchMode;

function borderColor() {
    nightMode.classList.add("clicked");
}

nightMode.onmousedown = borderColor;

function resetBorder() {
    nightMode.classList.remove("clicked");
}

nightMode.onmouseup = resetBorder;