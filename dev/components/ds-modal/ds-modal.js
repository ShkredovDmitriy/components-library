/* eslint-disable func-names */
/* -- DS-MODAL МОДАЛЬНОЕ ОКНО v.1.0.2

  В планах:
    - анимация модалки на промисах и transitionend
    - добавить возможность закрывать модалку по data-type
    - входящий конфиг должен перебивать дефолтный конфиг
    - входящий конфиг с вариантами анимации модалки

  Сделано:
    - меняем скроллбар на паддинг при вызове модалки
    - экспорт открытых методов open, close, modalStatus
    - вызов модалки по data-type
*/

const dsModal = (function($) {
  // -- КОНФИГУРАЦИЯ МОДУЛЯ
  // -- конфиг по умолчанию
  const config = {
    modalContainer: '.ds-modal', // контейнер модального окна
    modalOpenButton: '.ds-modal-open-btn', // кнопки для раскрытия модального окна
    modalCloseButton: '.ds-modal-close-btn', // кнопки для закрытия модального окна
    animBlock: 'fade-in-scale-block', // первый шаг анимации
    animBg: 'fade-in-scale-bg', // второй шаг анимации
    animBody: 'fade-in-scale-body', // третий шаг анимации
    modalLogging: true, // вывод данных в console.log, true / false
  };
  // -- объединение дефолтного и входящего конфига

  // -- ПЕРЕМЕННЫЕ
  let modalStatus = 0; // состояние модуля, 0 - закрыт, 1 - открыт

  // -- МИНИ ХЕЛПЕРЫ
  // -- выполнение анимации по очереди через transitionend
  function cssAnimation(animatedElement, animationClass, directionFlag = true) {
    return new Promise((resolve, reject) => {
      const onCssAnimationEnd = event => {
        resolve();
        animatedElement.removeEventListener('animationend', onCssAnimationEnd);
        animatedElement.removeEventListener('transitionend', onCssAnimationEnd);
      };
      animatedElement.addEventListener('animationend', onCssAnimationEnd);
      animatedElement.addEventListener('transitionend', onCssAnimationEnd);
      if (directionFlag) {
        animatedElement.classList.add(animationClass);
      } else {
        animatedElement.classList.remove(animationClass);
      }
    });
  }
  // -- логгирование
  const log = function(mes) {
    if (config.modalLogging) {
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
    // cssAnimation(modal(dataType), config.animBlock)
    //   .then(() => {
    //     return cssAnimation(modal(dataType), config.animBg);
    //   })
    //   .then(() => {
    //     return cssAnimation(modal(dataType), config.animBody);
    //   });
    addClass(modal(dataType), config.animBlock, 1);
    addClass(modal(dataType), config.animBg, 10);
    addClass(modal(dataType), config.animBody, 300);
    modalStatus = 1;
    log(`open, data-type: ${dataType}, status ${modalStatus}`);
  };
  // -- метод закрытия модального окна
  const close = function() {
    scrollBarShow();
    remClass($(config.modalContainer), config.animBody, 1);
    remClass($(config.modalContainer), config.animBg, 300);
    remClass($(config.modalContainer), config.animBlock, 600);
    modalStatus = 0;
    log(`close, status ${modalStatus}`);
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
  // -- автостарт подписок при старте модуля
  addOpenButtons();
  addCloseButtons();

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');

  // -- ЭКСПОРТ ОТКРЫТЫХ МЕТОДОВ
  return {
    open, // при вызове указываем data-type модалки, пример: dsModal.open("info");
    close,
    modalStatus,
  };
}(jQuery));
