/* eslint-disable func-names */
/*
ds-accordion v.1.0.2 для faq
автор shkredovdmitriy@gmail.com
Сделано:
  - сворачивание всех аккордионов при открытии одного
  - входящий конфиг перебивает дефолтный конфиг
  - раскрываем нужный аккордион по уникальному классу
*/

// -- КОНФИГУРАЦИЯ
// -- конфиг по умолчанию
const configDefault = {
  mainContainer: '.ds-accordion', // контейнер компонента
  dropdownBlock: '.ds-accordion__dropdown', // выпадающий блок
  activeClass: 'active', // класс на раскрытом аккордионе
  openOne: '', // раскрываем нужный аккордион по уникальному классу
  logging: true, // вывод данных в console.log, true / false
};

// -- конфиг с учетом входящих параметров
let config = {};

// -- ХЕЛПЕРЫ
// -- логгирование
const log = function(mes) {
  if (config.logging) {
    console.log(`ds-accordion: ${mes}`);
  }
};

// -- короткий селектор
const qa = function(cls) {
  return document.querySelectorAll(cls);
};

// -- ОСНОВНОЙ ФУНКЦИОНАЛ
// -- закрываем все аккордионы
const closeAllAccordions = function() {
  qa(config.mainContainer).forEach(element => {
    element.classList.remove(config.activeClass);
    const panel = element.querySelector(config.dropdownBlock);
    panel.style.maxHeight = 0;
  });
};

// -- раскрываем один аккордион
const openCurrentAccordion = function(element) {
  if (element.classList.contains(config.activeClass)) {
    closeAllAccordions();
  } else {
    closeAllAccordions();
    element.classList.add(config.activeClass);
    const panel = element.querySelector(config.dropdownBlock);
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
};

// -- работа аккордиона в автоматическом режиме
// -- раскрываем аккордионы по событию клик
function dsAccordion(configIncoming) {
  // -- входящий конфиг перебивает дефолтный
  config = Object.assign({}, configDefault, configIncoming);

  // -- подписка на клик для раскрытия аккордиона
  (function() {
    qa(config.mainContainer).forEach(element => {
      element.addEventListener('click', e => {
        openCurrentAccordion(element);
      });
    });
  }());

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');
}

// -- работа аккордиона в ручном режиме
// -- раскрываем нужный аккордион по уникальному классу
function dsAccordionManual(openClass) {
  if (document.querySelector(openClass)) {
    setTimeout(() => {
      openCurrentAccordion(document.querySelector(openClass));
    }, 300);
  }
}

// экспортируем
export { dsAccordion, dsAccordionManual };
