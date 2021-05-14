import refs from '../refs';
import mobile from '../../../images/mobile/logo.png';
import mobile2x from '../../../images/mobile/logo@2x.png';
import desktop from '../../../images/desktop/logo.png';
import desktop2x from '../../../images/desktop/logo@2x.png';
import tablet from '../../../images/tablet/logo.png';
import tablet2x from '../../../images/tablet/logo@2x.png';

export default function createLogoMarkup() {
  refs.header.insertAdjacentHTML(
    'afterbegin',
    `<picture class="logo header__logo"> <source srcset="${mobile} 1x, ${mobile2x} 2x" media="(max-width: 767px)"/><source srcset="${desktop} 1x, ${desktop2x} 2x" media="(min-width: 1200px)"><source srcset="${tablet} 1x, ${tablet2x} 2x" media="(min-width: 768px)"/><img src=".${mobile}" sizes="(max-width: 767px) 450px, (min-width: 768px) 354px, (min-width: 1200px) 270px, 100vw"/></picture>`,
  );
}
