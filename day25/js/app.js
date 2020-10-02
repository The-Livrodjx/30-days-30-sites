const trailer = document.querySelector('div.trailer')
const play = document.querySelector('.play')
const close = document.querySelector('img.close')

play.onclick = e => {

    e.preventDefault();

    trailer.style.visibility = 'visible'
    trailer.style.opacity = '1'
}

close.onclick = e => {
    
    e.preventDefault()

    trailer.style.visibility = 'hidden'
    trailer.style.opacity = '0'
}