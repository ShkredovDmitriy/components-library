// подключаем стили проекта
import '../common/scss/main.scss';

// подключаем ds библиотеку scss
import '../ds-components/ds-components-scss';

// подключаем ds библиотеку js
import {
  dsTruncateHtml,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsModal,
} from '../ds-components/ds-components-js';

// импортируем компоненты
import '../components/ds-select/ds-select';
import '../components/ds-input-pass/ds-input-pass';
import '../components/ds-mob-menu/ds-mob-menu';

// подключаем полифиллы
require('./polyfills/polyfills');

// инициализация - аккордион
if (document.querySelector('.faq-page')) {
  dsAccordion({ logging: true, mainContainer: '.ds-accordion' });
  dsAccordion({ logging: true, mainContainer: '.ds-accordion2' });
  dsAccordionManual({ logging: true, openOne: '.ds-accordion-list-03' });
}

// инициализация - форма
if (document.querySelector('.form-page')) {
  dsInputFile({ logging: true });
  dsTruncateHtml('.test', 10);
}

// инициализация - модальные окна
if (document.querySelector('.modal-page')) {
  // модалка инфо
  const modalInfo = new dsModal({
    container: '.modal-info',
    openButton: '.modal-info-open',
    closeButton: '.modal-info-close',
  });
  modalInfo.init();

  // модалка сообщение
  const modalMessage = new dsModal({
    container: '.modal-message',
    openButton: '.modal-message-open',
    closeButton: '.modal-message-close',
  });
  modalMessage.init();

  // модалка ошибка
  const modalError = new dsModal({
    container: '.modal-error',
    openButton: '.modal-error-open',
    closeButton: '.modal-error-close',
  });
  modalError.init();
}

if (document.querySelector('.blazy-page')) {
  console.log('Blazy page opened');
}

const bLazy = new Blazy();
