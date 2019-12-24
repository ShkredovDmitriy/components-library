function dsInputFile() {
  document.querySelectorAll('.ds-input-file').forEach(element => {
    element.querySelector('.ds-input-file__html-field').addEventListener('change', () => {
      let fileName = element.querySelector('.ds-input-file__html-field').value;
      fileName = fileName.split(/(\\|\/)/g).pop();
      element.querySelector('.ds-input-file__file-name').innerHTML = fileName;
      console.log(fileName);
    });
  });
}

// экспортируем
export { dsInputFile };
