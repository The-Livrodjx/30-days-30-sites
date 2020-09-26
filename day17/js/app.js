function changeImage(image) {
    document.querySelector(`#item`).src = image
}

function changeBgColor(color) {
    const html = document.querySelector('html')
    html.style.backgroundColor = color
}