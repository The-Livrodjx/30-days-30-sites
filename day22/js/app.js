function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let banner = document.querySelector('.banner')
    menuToggle.classList.toggle('active');
    banner.classList.toggle('activeMenu');
}