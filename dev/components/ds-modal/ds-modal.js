/* -- DS-MODAL МОДАЛЬНОЕ ОКНО v.1.0.1

  В планах:
    - добавить возможность закрывать модалку по data-type
    - входящий конфиг должен перебивать дефолтный конфиг
    - при вызове модалки нужно заменить скролл в боди паддингом

  Сделано:
    - экспорт открытых методов open и close
*/

const dsModal = (function($) {
  // -- КОНФИГ
  // -- конфиг по умолчанию
  const config = {
    modalContainer: '.ds-modal', // контейнер модального окна
    modalOpenButton: '.ds-modal-open-btn', // кнопки для раскрытия модального окна
    modalCloseButton: '.ds-modal-close-btn', // кнопки для закрытия модального окна
    modalLogging: true, // вывод данных в console.log, true / false
  };
  // -- объединение дефолтного и входящего конфига
  // -- внутренние переменные модуля
  let modalStatus = 0; // состояние модуля, 0 - закрыт, 1 - открыт

  // -- МАНИПУЛЯЦИИ С DOM И CLASSLIST
  // -- ОТКРЫТЫЕ МЕТОДЫ
  // -- метод открытия модального окна
  const open = function(dataType) {
    modal(dataType).addClass('fade-in-scale-block');
    setTimeout(() => {
      modal(dataType).addClass('fade-in-scale-bg');
    }, 10);
    setTimeout(() => {
      modal(dataType).addClass('fade-in-scale-body');
    }, 300);
    modalStatus = 1;
    log(`open, data-type: ${dataType}, status ${modalStatus}`);
  };
  // -- метод закрытия модального окна
  const close = function() {
    $(config.modalContainer).removeClass('fade-in-scale-body');
    setTimeout(() => {
      $(config.modalContainer).removeClass('fade-in-scale-bg');
    }, 300);
    setTimeout(() => {
      $(config.modalContainer).removeClass('fade-in-scale-block');
    }, 600);
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

  // -- МИНИ ХЕЛПЕРЫ
  // -- логгирование
  const log = function(mes) {
    if (config.modalLogging) {
      console.log(`ds-modal: ${mes}`);
    }
  };
  // -- проверка существования модалки с нужным data-type
  const modal = function(dataType) {
    const component = $(`${config.modalContainer}[data-type='${dataType}']`);
    if (component.length > 0) {
      return component;
    }
    log(`data-type ${dataType} не найден`);
  };
  // -- запись в лог о старте модуля
  log('started');

  // -- ЭКСПОРТ ОТКРЫТЫХ МЕТОДОВ
  return {
    open, // при вызове указываем data-type модалки, пример: dsModal.open("info");
    close,
  };
}(jQuery));

export default dsModal;
