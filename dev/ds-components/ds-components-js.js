// мини функции хелперы
import { dsTruncateStr, dsTruncateHtml } from './helpers-js/ds-truncate'; // обрезка содержимого

import dsResizeHtmlFontRem from './helpers-js/ds-resize-html-font-rem'; // перещет html font-size от высоты экрана

// компоненты
import { dsAccordion, dsAccordionManual } from './ds-accordion/ds-accordion'; // js - аккордион для faq

// стилизованный выбор файла
import { dsInputFile } from './ds-input-file/ds-input-file';

// импортируем тестовую библиотеку
import dsModal from './ds-modal/ds-modal'; // js - стилизованный input file

// экспортируем нужные функции
export {
  dsTruncateStr,
  dsTruncateHtml,
  dsResizeHtmlFontRem,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsModal,
};
