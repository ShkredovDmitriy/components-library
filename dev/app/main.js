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
  ds,
} from '../ds-components/ds-components-js';

// импортируем компоненты
import '../components/ds-modal/ds-modal';
import '../components/ds-select/ds-select';
import '../components/ds-input-pass/ds-input-pass';
import '../components/ds-mob-menu/ds-mob-menu';

// подключаем полифиллы
require('./polyfills/polyfills');

// запускаем компоненты
dsAccordion({ logging: true, mainContainer: '.ds-accordion' });
dsAccordion({ logging: true, mainContainer: '.ds-accordion2' });
dsAccordionManual({ logging: true, openOne: '.ds-accordion-list-03' });
dsInputFile({ logging: true });

// активируем функции
dsTruncateHtml('.test', 10);

// выполняем тест
ds();
ds('info');
