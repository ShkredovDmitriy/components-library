/*
ds-input-file
автор shkredovdmitriy@gmail.com
Сделано:
  - входящий конфиг перебивает дефолтный конфиг
*/
function dsInputFile(configIncoming) {
  // -- КОНФИГУРАЦИЯ
  // -- конфиг по умолчанию
  const configDefault = {
    mainContainer: '.ds-input-file', // контейнер компонента
    fileNameBlock: '.ds-input-file__file-name', // блок для постановки именя выбранного файла
    htmlInputField: '.ds-input-file__html-field', // html input type=file
    logging: false, // вывод данных в console.log, true / false
  };

  // -- входящий конфиг перебивает дефолтный
  const config = Object.assign({}, configDefault, configIncoming);

  // -- ХЕЛПЕРЫ
  // -- логгирование
  function log(mes) {
    if (config.logging) {
      console.log(`ds-input-file: ${mes}`);
    }
  }

  // -- ОСНОВНОЙ ФУНКЦИОНАЛ
  // -- прослушивание изменений в каждом input file
  document.querySelectorAll(config.mainContainer).forEach(element => {
    const inputFileField = element.querySelector(config.htmlInputField);
    inputFileField.addEventListener('change', e => {
      const inputFileValue = inputFileField.value.split(/(\\|\/)/g).pop();
      element.querySelector(config.fileNameBlock).innerHTML = inputFileValue;
      log(`value = ${inputFileValue}`);
    });
  });

  // -- ОТЧЕТ О СТАРТЕ МОДУЛЯ
  log('started');
}

// экспортируем
export { dsInputFile };
