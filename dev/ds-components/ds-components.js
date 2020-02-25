/*
бибоиотека компонентов
автор shkredovdmitriy@gmail.com
2018 - 2020
*/

// -- мини функции хелперы
import { dsTruncateHtml } from './helpers-js/ds-truncate'; // обрезка содержимого

import dsResizeHtmlFontRem from './helpers-js/ds-resize-html-font-rem'; // перещет html font-size от высоты экрана

// -- компоненты
import { dsAccordion, dsAccordionManual } from './ds-accordion/ds-accordion'; // аккордион для faq

import dsInputFile from './ds-input-file/ds-input-file'; // -- стилизованный выбор файла

import dsInputPass from './ds-input-pass/ds-input-pass'; // -- стилизованный ввод пароля

import dsSelect from './ds-select/ds-select'; // -- стилизованный html select

import dsMultiSelect from './ds-multi-select/ds-multi-select'; // -- стилизованный html select multiple

import dsTextarea from './ds-textarea/ds-textarea'; // -- блок подстраивается под высоту текста

import dsModal from './ds-modal/ds-modal'; // -- модальное окно

import dsMobileMenu from './ds-mobile-menu/ds-mobile-menu'; // мобильное меню

// api
import getUserStatus from './api/api'; // -- статус пользователя

// -- экспортируем нужные функции
export {
  dsTruncateHtml,
  dsResizeHtmlFontRem,
  dsAccordion,
  dsAccordionManual,
  dsInputFile,
  dsInputPass,
  dsSelect,
  dsMultiSelect,
  dsTextarea,
  dsModal,
  dsMobileMenu,
  getUserStatus,
};
