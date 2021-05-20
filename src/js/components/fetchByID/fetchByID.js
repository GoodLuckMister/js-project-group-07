import API from '../../API/DiscoveryAPI';
import Preloader from '../preloader/Preloader';
import renderModal from '../modal-fn/modalMarkup';

const preloader = new Preloader();
const event = new API();

export default function (Id) {
  preloader.show();
  event
    .fetchDetails(Id)
    .then(r => {
      renderModal(r);
    })
    .catch(e =>
      console.log(
        'Unfortunately, no matches found. Please change search conditions.',
        e,
      ),
    )
    .finally(() => preloader.remove());
}
