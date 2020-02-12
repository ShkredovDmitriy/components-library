// подключаем стили проекта
import '../common/scss/main.scss';

// подключаем ds библиотеку js
import {
  dsTruncateHtml,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsInputPass,
  dsSelect,
  dsTextarea,
  dsModal,
  dsMobileMenu,
  getUserStatus,
} from '../ds-components/ds-components';

// импортируем компоненты
// import '../components/ds-mob-menu/ds-mob-menu';
const mobileMenu = new dsMobileMenu({ logging: true });
mobileMenu.init();

// подключаем полифиллы
require('./polyfills/polyfills');

// инициализация - аккордион
if (document.querySelector('.faq-page')) {
  dsAccordion({ logging: true, mainContainer: '.ds-accordion' });
  dsAccordion({ logging: true, mainContainer: '.ds-accordion2' });
  dsAccordionManual({ logging: true, openOne: '.ds-accordion-list-03' });
}

// инициализация - элементов формы
if (document.querySelector('.form-page')) {
  console.log('Form page opened');
  const inputFile = new dsInputFile({ logging: true });
  inputFile.init();
  const inputPass = new dsInputPass({ logging: true });
  inputPass.init();
  const select = new dsSelect({ logging: true });
  select.init();
  dsTextarea();
  dsTruncateHtml('.test', 10);
}

// инициализация - модальные окна
if (document.querySelector('.modal-page')) {
  // модалка инфо
  const modalInfo = new dsModal({
    logging: true,
    container: '.modal-info',
    openButton: '.modal-info-open',
    closeButton: '.modal-info-close',
  });
  modalInfo.init();
  // document.modalInfo = modalInfo;

  // модалка сообщение
  const modalMessage = new dsModal({
    container: '.modal-message',
    openButton: '.modal-message-open',
    closeButton: '.modal-message-close',
  });
  modalMessage.init();
  // document.modalMessage = modalMessage;

  // модалка ошибка
  const modalError = new dsModal({
    container: '.modal-error',
    openButton: '.modal-error-open',
    closeButton: '.modal-error-close',
  });
  modalError.init();
  // document.modalError = modalError;
}

if (document.querySelector('.blazy-page')) {
  console.log('Blazy page opened');
  const bLazy = new Blazy();
}

if (document.querySelector('.modal-page')) {
  // проверка статуся пользователя
  // https://reqres.in/api/login - 400
  // https://reqres.in/api/users/23 - 404
  // https://reqres.in/api/users/2 - 204

  getUserStatus('https://reqres.in/api/login', dsModal);
}
