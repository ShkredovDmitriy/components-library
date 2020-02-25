/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */

/* -- DS-SELECT СТИЛИЗОВАННЫЙ HTML SELECT v.2.0.1 */

export default class dsSelect {
  constructor(incomingConfig) {
    // конфиг по умолчанию
    this.defaultConfig = {
      container: '.ds-select', // уникальный класс контейнера компонента
      optionsList: '.ds-select__options-list', // формируем список опций
      selectedOption: '.ds-select__open-button', // блок с выбранным значением
      dropdownOption: '.ds-select__dropdown-block', // раскрывающийся блок со списком опций
      activeClass: 'active', // класс на раскрытом селекте
      selectedText: '.ds-select__open-button', // блок с выбранным текстом
      logging: false, // вывод данных в console.log, true / false
    };
    // входящий конфиг заменяет дефолтный
    this.config = Object.assign({}, this.defaultConfig, incomingConfig);
    // состояние - открыт или закрыт
    this.state = 0;
    this.name = [];
  }

  // -- ХЕЛПЕРЫ
  // -- логгирование
  log(mes) {
    if (this.config.logging) {
      console.log(`ds-select: ${mes}`);
    }
  }

  // -- добавляем selected=true в выбранный html option
  addSelectedToOption(element, arg) {
    $(element)
      .find('option')
      .each((i, option) => {
        if (i === arg + 1) {
          option.setAttribute('selected', true);
        } else {
          option.removeAttribute('selected');
        }
      });
  }

  // -- меняем текст по умолчанию в блоке на текст из html select
  changeTextFromDefault(element, arg) {
    $(element)
      .find('li')
      .each((i, li) => {
        if (i === arg) {
          element.querySelector(this.config.selectedText).innerHTML = li.innerHTML;
        }
      });
  }

  // -- открываем и закрываем выпадающее меню
  openCloseDropdown(element) {
    if (this.state === 0) {
      $(element)
        .find(this.config.dropdownOption)
        .each((i, dropdown) => {
          dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
        });
      $(element).addClass(this.config.activeClass);
      this.state = 1;
    } else {
      $(this.config.dropdownOption).css('max-height', '0');
      $(this.config.container).removeClass(this.config.activeClass);
      this.state = 0;
    }
  }

  // -- заполняем выпадающий список для каждого ds-select на странице
  addOptionsToList() {
    document.querySelectorAll(this.config.container).forEach(element => {
      const list = element.querySelector(this.config.optionsList);
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
  }

  // -- устанавливаем подписки на раскрытие списка
  addOpenListeners() {
    $(this.config.container).each((i, element) => {
      console.log(element);
      this.name[i] = $(element)
        .find('.ds-select__selected-text')
        .html();
      $(element)
        .find(this.config.selectedOption)
        .click(() => {
          this.openCloseDropdown(element);
        });
    });
  }

  // -- устанавливаем подписки на клик по элементу выпадающего списка
  selectAnyOption() {
    $(this.config.container).each((j, element) => {
      $(element)
        .find('li')
        .each((i, li) => {
          $(li).click(() => {
            this.addSelectedToOption(element, i);
            this.changeTextFromDefault(element, i);
            this.openCloseDropdown();
            this.log(`выбрана опция ${i}`);
            $('.ds-select__html-select').trigger('change');
          });
        });
    });
  }

  // -- click on body close components
  closeActiveSelect() {
    document.querySelector('html, body').addEventListener('click', event => {
      let closeElement = true;
      $(this.config.container).each((i, element) => {
        if ($(element).is(event.target) || $(element).has(event.target).length > 0) {
          closeElement = false;
        }
      });
      if (closeElement) {
        if (this.state === 1) {
          $(this.config.container).each((i, element) => {
            this.openCloseDropdown(element);
          });
        }
      }
    });
  }

  // component reset
  reset(id) {
    console.log();
    $(id)
      .find(this.config.container)
      .each((i, element) => {
        // сброс текста
        $(element)
          .find('.ds-select__selected-text')
          .html(this.name[i]);
        this.log(`reset: ${this.name[i]}`);

        // сброс selected
        $(element)
          .find('option')
          .each((i, option) => {
            if (i === 0) {
              option.setAttribute('selected', true);
            }
          });
      });
  }

  // component init
  init() {
    this.closeActiveSelect();
    this.addOptionsToList();
    this.addOpenListeners();
    this.selectAnyOption();
    // -- start logs
    this.log(`initialized, class: ${this.config.container}`);
  }
}
