function dsSelect() {
  const dropdown = document.querySelector('.ds-select__default-option');
  const htmlSelect = document.querySelector('.ds-select__html-select');
  const userSelect = document.querySelector('.ds-select__user-select');
  const htmlSelectOptions = htmlSelect.querySelectorAll('option');
  let state = 0;

  function openCloseDropdown() {
    if (state == 0) {
      userSelect.style.maxHeight = `${userSelect.scrollHeight}px`;
      dropdown.classList.add('opened');
      state = 1;
    } else {
      userSelect.style.maxHeight = 0;
      dropdown.classList.remove('opened');
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
    const userSelects = document.querySelectorAll('.ds-select__user-select li');
    for (let i = 0; i < userSelects.length; i++) {
      if (i == arg) {
        document.querySelector('.ds-select__default-option').innerHTML = userSelects[i].innerHTML;
      }
    }
  }

  // раскрытие списка с псевдоопциями
  dropdown.addEventListener('click', e => {
    openCloseDropdown();
  });

  // устанавливаем прослушивание на все выпадающие элементы
  for (let i = 0; i < htmlSelectOptions.length; i++) {
    const elem = document.createElement('li');
    elem.innerHTML = htmlSelectOptions[i].innerHTML;
    userSelect.appendChild(elem);
  }
  userSelect.querySelectorAll('li').forEach((li, i) => {
    li.addEventListener('click', e => {
      addSelectToOption(i);
      addSelectToDefault(i);
      openCloseDropdown();
      console.log(`Выбрана опция ${i}`);
    });
  });
}

dsSelect();
