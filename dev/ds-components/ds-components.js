/*
бибоиотека компонентов
автор shkredovdmitriy@gmail.com
2018 - 2020
*/

// -- мини функции хелперы
import { dsTruncateHtml } from './helpers-js/ds-truncate'; // обрезка содержимого

import dsResizeHtmlFontRem from './helpers-js/ds-resize-html-font-rem'; // перещет html font-size от высоты экрана

// -- компоненты
import { dsAccordion, dsAccordionManual } from './ds-accordion/ds-accordion'; // js - аккордион для faq

// -- стилизованный выбор файла
import dsInputFile from './ds-input-file/ds-input-file';

// -- стилизованный ввод пароля
import dsInputPass from './ds-input-pass/ds-input-pass';

// -- стилизованный html select
import dsSelect from './ds-select/ds-select';

// -- импортируем тестовую библиотеку
import dsModal from './ds-modal/ds-modal'; // js - стилизованный input file

// -- экспортируем нужные функции
export {
  dsTruncateHtml,
  dsResizeHtmlFontRem,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsInputPass,
  dsSelect,
  dsModal,
};
