export default class {
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

  show() {
    this.markupPreloader();
    return (this.element.style = 'display: block');
  }
  remove() {
    return (this.element.style = 'display: none');
  }
}
