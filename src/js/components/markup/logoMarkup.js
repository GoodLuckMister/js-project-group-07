import refs from '../refs';

export default function createLogoMarkup() {
    refs.header.insertAdjacentHTML('afterbegin',
        '<picture class="logo header__logo"> <source srcset="./images/mobile/logo.png 1x, ./images/mobile/logo@2x.png 2x" media="(max-width: 767px)"/><source srcset="./images/desktop/logo.png 1x, ./images/desktop/logo@2x.png 2x" media="(min-width: 1200px)"><source srcset="./images/tablet/logo.png 1x, ./images/tablet/logo@2x.png 2x" media="(min-width: 768px)"/><img src="./images/desktop/logo.png" sizes="(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw"/></picture>')
}