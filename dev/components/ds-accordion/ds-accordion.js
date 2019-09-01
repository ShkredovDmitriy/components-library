/* eslint-disable func-names */
/* -- DS-ACCORDION v.1.0.2
  В планах:
    - входящий конфиг должен перебивать дефолтный конфиг
    - входящий конфиг с вариантами анимации модалки
  Сделано:
    - сворачивание всех аккордионов при открытии любого
*/

const dsAccordion = (function($) {
  // -- КОНФИГУРАЦИЯ МОДУЛЯ
  // -- конфиг по умолчанию
  const config = {
    mainContainer: '.ds-accordion', // контейнер компонента
    dropdownBlock: '.ds-accordion__dropdown', // выпадающий блок
    activeClass: 'active', // класс на раскрытом аккордионе
    logging: false, // вывод данных в console.log, true / false
  };
  // -- объединение дефолтного и входящего конфига

  // -- ПЕРЕМЕННЫЕ
  let state = 0; // состояние модуля, 0 - закрыт, 1 - открыт

  // -- ХЕЛПЕРЫ
  // -- логгирование
  const log = function(mes) {
    if (config.modalLogging) {
      console.log(`ds-accordion: ${mes}`);
    }
  };

  // -- МАНИПУЛЯЦИИ С DOM И CLASSLIST
  // -- закрываем все аккордионы
  const closeAllAccordions = function() {
    $(config.mainContainer).each((i, element) => {
      element.classList.remove(config.activeClass);
      const panel = element.querySelector(config.dropdownBlock);
      panel.style.maxHeight = 0;
    });
  };
  // -- раскрываем один аккордион
  const openCurrentAccordion = function(element) {
    if (element.classList.contains(config.activeClass)) {
      closeAllAccordions();
      state = 0;
    } else {
      closeAllAccordions();
      element.classList.add(config.activeClass);
      const panel = element.querySelector(config.dropdownBlock);
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      state = 1;
    }
  };

  // -- ЗАКРЫТЫЕ МЕТОДЫ
  // -- подписка на раскрытие аккордиона по клику
  const addOpenList = function() {
    $(config.mainContainer).each((i, element) => {
      element.addEventListener('click', e => {
        openCurrentAccordion(element);
      });
    });
  };
  // -- автостарт методов при старте модуля
  addOpenList();

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');

  // -- ЭКСПОРТ ОТКРЫТЫХ МЕТОДОВ
  return {
    state,
  };
}(jQuery));
