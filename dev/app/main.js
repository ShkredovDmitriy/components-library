// подключаем стили проекта
import '../common/scss/main.scss';

// подключаем ds библиотеку scss
import '../ds-components/ds-components-scss';

// подключаем ds библиотеку js
import { dsTruncateHtml, dsAccordion } from '../ds-components/ds-components-js';

// импортируем компоненты
import '../components/ds-modal/ds-modal';
import '../components/ds-select/ds-select';
import '../components/ds-input-pass/ds-input-pass';
import '../components/ds-textarea/ds-textarea';

import '../components/ds-mob-menu/ds-mob-menu';

// запускаем компоненты
dsAccordion({ openOne: '.ds-accordion-list-03' });

// подключаем полифиллы
require('./polyfills/polyfills');

// активируем функции
dsTruncateHtml('.test', 10);
