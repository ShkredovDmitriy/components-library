// -- СТОРОННИЕ КОМПОНЕНТЫ

// -- DS КОМПОНЕНТЫ

// -- мини функции хелперы
import { dsTruncateHtml } from './helpers-js/ds-truncate'; // обрезка содержимого

// -- компоненты
import { dsAccordion, dsAccordionManual } from './ds-accordion/ds-accordion'; // js - аккордион для faq

// -- стилизованный выбор файла
import dsInputFile from './ds-input-file/ds-input-file';

// -- стилизованный ввод пароля
import dsInputPass from './ds-input-pass/ds-input-pass';

// -- импортируем тестовую библиотеку
import dsModal from './ds-modal/ds-modal'; // js - стилизованный input file

// -- экспортируем нужные функции
export { dsTruncateHtml, dsAccordion, dsAccordionManual, dsInputFile, dsInputPass, dsModal };