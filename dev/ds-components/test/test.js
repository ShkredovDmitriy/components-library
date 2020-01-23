/* eslint-disable func-names */
function ds(conf) {
  // -- конфиг по умолчанию
  const config = {
    modalContainer: '.ds-modal', // контейнер компонента
    modalOpenButton: '.ds-modal-open-btn', // кнопки для раскрытия модального окна
    modalCloseButton: '.ds-modal-close-btn', // кнопки для закрытия модального окна
    animBlock: 'fade-in-scale-block', // первый шаг анимации
    animBg: 'fade-in-scale-bg', // второй шаг анимации
    animBody: 'fade-in-scale-body', // третий шаг анимации
    logging: true, // вывод данных в console.log, true / false
  };

  // -- ХЕЛПЕРЫ
  // -- логгирование
  const log = function(mes) {
    if (config.logging) {
      console.log(`ds-modal: ${mes}`);
    }
  };
  // -- сокращение длинного селектора
  const modal = function(dataType) {
    return $(`${config.modalContainer}[data-type='${dataType}']`);
  };
  // -- вычисление ширины скроллбара
  const scrollBarWidth = function() {
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowsWidth = parseInt(window.innerWidth);
    const scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  };

  // -- МАНИПУЛЯЦИИ С DOM И CLASSLIST
  // -- добавляем классы + timeout
  const addClass = function(element, style, time) {
    setTimeout(() => {
      element.addClass(style);
    }, time);
  };
  // -- убираем классы + timeout
  const remClass = function(element, style, time) {
    setTimeout(() => {
      element.removeClass(style);
    }, time);
  };
  // -- замена скролбара на padding в body
  const scrollBarHide = function() {
    addClass($('body'), 'ds-modal__overflow-hidden', 0); // блокируем body при появлении модалки
    $('body').css('padding-right', `${scrollBarWidth()}px`); // ставим padding вместо скроллбара
  };
  // -- возврат скроллбара
  const scrollBarShow = function() {
    remClass($('body'), 'ds-modal__overflow-hidden', 2); // разблокируем body при скрытии модалки
    $('body').css('padding-right', '0'); // убираем padding
  };

  // -- ОТКРЫТЫЕ МЕТОДЫ
  // -- метод открытия модального окна
  const open = function(dataType) {
    scrollBarHide();
    addClass(modal(dataType), config.animBlock, 1);
    addClass(modal(dataType), config.animBg, 10);
    addClass(modal(dataType), config.animBody, 300);
    log(`open, data-type: ${dataType}`);
  };
  // -- метод закрытия модального окна
  const close = function() {
    scrollBarShow();
    remClass($(config.modalContainer), config.animBody, 1);
    remClass($(config.modalContainer), config.animBg, 300);
    remClass($(config.modalContainer), config.animBlock, 600);
  };

  // -- ЗАКРЫТЫЕ МЕТОДЫ
  // -- подписка на открытие модалки
  const addOpenButtons = function() {
    $(config.modalOpenButton).click(function() {
      const dataType = $(this).attr('data-type'); // определяем data-type на кнопке
      open(dataType); // вызываем метод открытия модалки с нужным data-type
    });
  };
  // -- подписка на закрытие модалки
  const addCloseButtons = function() {
    $(config.modalCloseButton).click(() => {
      close(); // вызываем метод закрытия любой открытой модалки
    });
  };

  if (conf) {
    console.log(`Запуск модалки ${conf}`);
    open(conf); // вызываем метод открытия модалки с нужным data-type
  } else {
    console.log('TEST');
    // -- автостарт методов при старте модуля
    addOpenButtons();
    addCloseButtons();
    // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
    log('started');
  }
}

export default ds;
