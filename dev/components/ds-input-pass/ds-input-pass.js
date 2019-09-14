/* eslint-disable func-names */

const dsInputPass = (function($) {
  $('.ds-input-pass').each((i, element) => {
    let status = 0;
    const eyeIcon = element.querySelector('.ds-input__eye-icon');
    const inputField = element.querySelector('.ds-input__field');
    $(eyeIcon).click(() => {
      if (status === 0) {
        $(inputField).attr('type', 'text');
        status = 1;
        console.log('type: text');
      } else {
        $(inputField).attr('type', 'password');
        status = 0;
        console.log('type: password');
      }
    });
  });
}(jQuery));
