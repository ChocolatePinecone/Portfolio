const toggleMobileMenu = () => {
    const burger = document.querySelector('.mobile-burger-container');
    const nav = document.querySelector('.navigation');

    burger.classList.toggle('menu-opened');
    nav.classList.toggle('menu-opened');
};

export default toggleMobileMenu;