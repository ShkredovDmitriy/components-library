/* eslint-disable func-names */
/*
ds-accordion v.1.0.2 для faq
автор shkredovdmitriy@gmail.com
Сделано:
  - сворачивание всех аккордионов при открытии любого
  - входящий конфиг перебивает дефолтный конфиг
  - раскрываем нужный аккордион по уникальному классу
*/

function dsAccordion(configIncoming) {
  // -- КОНФИГУРАЦИЯ

  // -- конфиг по умолчанию
  const configDefault = {
    mainContainer: '.ds-accordion', // контейнер компонента
    dropdownBlock: '.ds-accordion__dropdown', // выпадающий блок
    activeClass: 'active', // класс на раскрытом аккордионе
    openOne: '', // раскрываем нужный аккордион по уникальному классу
    logging: false, // вывод данных в console.log, true / false
  };

  // -- входящий конфиг перебивает дефолтный
  const config = Object.assign({}, configDefault, configIncoming);

  // -- ХЕЛПЕРЫ
  // -- логгирование
  const log = function(mes) {
    if (config.logging) {
      console.log(`ds-accordion: ${mes}`);
    }
  };

  // -- селекторы
  const qa = function(cls) {
    return document.querySelectorAll(cls);
  };

  // -- МАНИПУЛЯЦИИ С CLASSLIST
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

  // -- прослушивание клика для раскрытия аккордиона
  const addOpenList = function() {
    qa(config.mainContainer).forEach(element => {
      element.addEventListener('click', e => {
        openCurrentAccordion(element);
      });
    });
  };

  // раскрываем нужный аккордион по уникальному классу
  if (document.querySelector(config.openOne)) {
    setTimeout(() => {
      openCurrentAccordion(document.querySelector(config.openOne));
    }, 300);
  }

  // -- автостарт методов при старте модуля
  addOpenList();

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');
}

// экспортируем
export { dsAccordion };
