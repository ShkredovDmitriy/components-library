// -- СТОРОННИЕ КОМПОНЕНТЫ

// -- DS КОМПОНЕНТЫ

// -- мини функции хелперы
import { dsTruncateHtml } from './helpers-js/ds-truncate'; // обрезка содержимого

// -- компоненты
import { dsAccordion, dsAccordionManual } from './ds-accordion/ds-accordion'; // аккордион для faq

import dsInputFile from './ds-input-file/ds-input-file'; // -- стилизованный выбор файла

import dsInputPass from './ds-input-pass/ds-input-pass'; // -- стилизованный ввод пароля

import dsModal from './ds-modal/ds-modal'; // -- модальное окно

import dsMobileMenu from './ds-mobile-menu/ds-mobile-menu'; // мобильное меню

// -- экспортируем нужные функции
export {
  dsTruncateHtml,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsInputPass,
  dsModal,
  dsMobileMenu,
};
