/* eslint-disable func-names */

const dsTextarea = (function($) {
  const txt = $('textarea.ds-input__field');
  const hiddenDiv = $('.ds-textarea__hidden-div');
  let content = null;

  txt.on('keyup', function() {
    content = $(this).val();
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(`${content}<br class="lbr">`);
    $(this).css('height', hiddenDiv.height());
    console.log(hiddenDiv.height());
  });
}(jQuery));
