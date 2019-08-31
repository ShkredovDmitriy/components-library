/* eslint-disable func-names */
/* -- DS-SELECT v.1.0.1

  В планах:
    - Скролл внутри выпадающего списка
    - Направление выпадения в зависимости от положения на экране

  Сделано:

*/

const dsSelect = (function($) {
  // -- КОНФИГУРАЦИЯ МОДУЛЯ
  // -- конфиг по умолчанию
  const container = document.querySelector('.ds-select'); // главный контейнер каждого компонента
  const htmlSelect = document.querySelector('.ds-select__html-select'); // скрытый html select

  const htmlSelectOptions = htmlSelect.querySelectorAll('option'); // //////////////////////////////
  const userSelect = document.querySelector('.ds-select__dropdown-option');
  const dropdownList = document.querySelector('.ds-select__dropdown-select');
  const dropdown = document.querySelector('.ds-select__selected-option');

  // -- конфиг по умолчанию
  const config = {
    selectContainer: '.ds-select', // контейнер компонента
  };

  let state = 0;

  function openCloseDropdown() {
    if (state == 0) {
      userSelect.style.maxHeight = `${userSelect.scrollHeight}px`;
      container.classList.add('active');
      state = 1;
    } else {
      userSelect.style.maxHeight = 0;
      container.classList.remove('active');
      state = 0;
    }
  }

  function addSelectToOption(arg) {
    const htmlSelectOptions = document.querySelectorAll('.ds-select__html-select option');
    for (let i = 0; i < htmlSelectOptions.length; i++) {
      if (i == arg) {
        htmlSelectOptions[i].setAttribute('selected', true);
      } else {
        htmlSelectOptions[i].removeAttribute('selected');
      }
    }
  }

  function addSelectToDefault(arg) {
    const userSelects = document.querySelectorAll('.ds-select__dropdown-select li');
    for (let i = 0; i < userSelects.length; i++) {
      if (i == arg) {
        document.querySelector('.ds-select__selected-text').innerHTML = userSelects[i].innerHTML;
      }
    }
  }

  // раскрытие списка с псевдоопциями
  dropdown.addEventListener('click', e => {
    openCloseDropdown();
  });

  // -- ЗАКРЫТЫЕ МЕТОДЫ
  // -- Для каждого компонента заполняем выпадающий список
  const addSelectsToList = function() {
    document.querySelectorAll(config.selectContainer).forEach(element => {
      const options = element.querySelectorAll('option');
      const list = element.querySelector('.ds-select__dropdown-select');
      for (let i = 0; i < options.length; i++) {
        const elem = document.createElement('li');
        elem.innerHTML = options[i].innerHTML;
        list.appendChild(elem);
      }
    });
  };
  // -- автостарт методов при старте модуля
  addSelectsToList();

  dropdownList.querySelectorAll('li').forEach((li, i) => {
    li.addEventListener('click', e => {
      addSelectToOption(i);
      addSelectToDefault(i);
      openCloseDropdown();
      console.log(`Выбрана опция ${i}`);
    });
  });

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  console.log('ds-select: started');
}(jQuery));
