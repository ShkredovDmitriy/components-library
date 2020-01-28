/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */

/* -- DS-SELECT СТИЛИЗОВАННЫЙ HTML SELECT v.2.0.1 */

export default class dsSelect {
  constructor(incomingConfig) {
    // конфиг по умолчанию
    this.defaultConfig = {
      container: '.modal', // уникальный класс контейнера компонента
      openButton: '.modal-open', // кнопки для раскрытия модального окна
      closeButton: '.modal-close', // кнопки для закрытия модального окна
      animBlock: 'fade-in-scale-block', // первый шаг анимации
      animBg: 'fade-in-scale-bg', // второй шаг анимации
      animBody: 'fade-in-scale-body', // третий шаг анимации
      bodyOverflow: 'ds-modal__overflow-hidden', // класс для блокировки скролла
      logging: false, // вывод данных в console.log, true / false
    };
    // входящий конфиг заменяет дефолтный
    this.config = Object.assign({}, this.defaultConfig, incomingConfig);
  }
  // -- конфиг по умолчанию
  const config = {
    mainContainer: '.ds-select', // контейнер компонента
    selectedOption: '.ds-select__selected-option', // блок с выбранным значением
    dropdownOption: '.ds-select__dropdown-option', // раскрывающийся блок со списком опций
    optionsList: '.ds-select__options-list', // формируем список опций
    selectedText: '.ds-select__selected-text', // блок с выбранным текстом
    activeClass: 'active', // класс на раскрытом селекте
    logging: false, // вывод данных в console.log, true / false
  };
  // -- объединение дефолтного и входящего конфига

  // -- ПЕРЕМЕННЫЕ
  let state = 0; // состояние модуля, 0 - закрыт, 1 - открыт

  // -- ХЕЛПЕРЫ
  // -- добавляем selected=true в выбранный html option
  const addSelectedToOption = function(element, arg) {
    $(element)
      .find('option')
      .each((i, option) => {
        if (i == arg) {
          option.setAttribute('selected', true);
        } else {
          option.removeAttribute('selected');
        }
      });
  };
  // -- меняем текст по умолчанию в блоке на текст из html select
  const changeTextFromDefault = function(element, arg) {
    $(element)
      .find('li')
      .each((i, li) => {
        if (i == arg) {
          element.querySelector(config.selectedText).innerHTML = li.innerHTML;
        }
      });
  };
  // -- логгирование
  const log = function(mes) {
    if (config.logging) {
      console.log(`ds-select: ${mes}`);
    }
  };

  // -- ЗАКРЫТЫЕ МЕТОДЫ
  // -- метод открытия и закрытия выпадающего списка
  const openCloseDropdown = function(element) {
    if (state == 0) {
      $(element)
        .find(config.dropdownOption)
        .each((i, dropdown) => {
          dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
        });
      $(element).addClass(config.activeClass);
      state = 1;
    } else {
      $(config.dropdownOption).css('max-height', '0');
      $(config.mainContainer).removeClass(config.activeClass);
      state = 0;
    }
  };

  // -- Заполняем выпадающий список для каждого ds-select на странице
  const addOptionsToList = function() {
    $(config.mainContainer).each((i, element) => {
      const list = element.querySelector(config.optionsList);
      const options = $(element)
        .find('option')
        .each((j, htmlOption) => {
          if (j > 0) {
            const costumOption = document.createElement('li');
            costumOption.innerHTML = htmlOption.innerHTML;
            list.appendChild(costumOption);
          }
        });
    });
  };

  // -- устанавливаем подписки на раскрытие списка
  const addOpenListeners = function() {
    $(config.mainContainer).each((i, element) => {
      $(element)
        .find(config.selectedOption)
        .click(() => {
          openCloseDropdown(element);
        });
    });
  };

  // -- устанавливаем подписки на клик по элементу выпадающего списка
  const selectAnyOption = function() {
    $(config.mainContainer).each((i, element) => {
      $(element)
        .find('li')
        .each((i, li) => {
          li.addEventListener('click', e => {
            addSelectedToOption(element, i);
            changeTextFromDefault(element, i);
            openCloseDropdown();
            log(`выбрана опция ${i}`);
          });
        });
    });
  };

  // -- автостарт методов при старте модуля
  addOptionsToList();
  addOpenListeners();
  selectAnyOption();

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');

  // -- ЭКСПОРТ ОТКРЫТЫХ МЕТОДОВ
  return {
    state,
  };
}(jQuery));
