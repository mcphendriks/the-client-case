// MENU
const toggleMenu = () => {
    const topNav = document.querySelector('.top-nav');
    const menuIcon = document.querySelector('.menu-icon');

    if (topNav.className === 'top-nav') {
        topNav.className += ' responsive'
        menuIcon.style.transform = 'rotate(-90deg)'
    } else {
        topNav.className = 'top-nav';
        menuIcon.style.transform = 'rotate(0)'
    }
}