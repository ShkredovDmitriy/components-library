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

// запускаем компоненты
dsAccordion({ logging: true, mainContainer: '.ds-accordion' });
dsAccordion({ logging: true, mainContainer: '.ds-accordion2' });
dsAccordionManual({ logging: true, openOne: '.ds-accordion-list-03' });

// стилизуем инпут файл
const inputFile = new dsInputFile({ logging: true });
inputFile.init();

// активируем функции
dsTruncateHtml('.test', 10);

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
