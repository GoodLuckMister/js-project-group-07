export default class Preloader {
  constructor(element) {
    this.element = element;
  }

  markupPreloader() {
    return (this.element.innerHTML = `
              <ul class="cssload-loader">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            `);
  }

  preloaderShow() {
    this.markupPreloader();
    return (this.element.style = 'display: block');
  }
  preloaderRemove() {
    return (this.element.style = 'display: none');
  }
}
