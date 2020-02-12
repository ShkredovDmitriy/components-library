function modalInfoControl(mes) {
  $('.modal-info .ds-modal__text').html(mes);
}

function getUserStatus(url, dsModal) {
  const modalError = new dsModal({
    container: '.modal-info',
    openButton: '.modal-info-open',
    closeButton: '.modal-info-close',
  });
  modalError.init();

  $.ajax({ url, type: 'POST', data: { email: 'peter@klaven' } })
    .done(data => {
      modalInfoControl('Соединение установлено');
      console.log(data);
      modalError.open();
    })
    .fail(data => {
      if (data.status === 404) {
        console.log(data.status);
        modalInfoControl(`Ошибка ${data.status} - Пользователь не найден`);
        modalError.open();
      }
      if (data.status === 400) {
        console.log(data.status);
        modalInfoControl(`Ошибка ${data.status} - Пользователь не найден`);
        modalError.open();
      } else {
        console.log(data.status);
        modalInfoControl(`Ошибка ${data.status}`);
        modalError.open();
      }
    });
}

export default getUserStatus;
