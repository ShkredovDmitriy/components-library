/* eslint-disable func-names */

const dsTextarea = (function($) {
  const txt = $('textarea.ds-input__field');
  const hiddenDiv = $('.ds-textarea__hidden-div');
  let content = null;

  txt.on('keyup', function() {
    content = $(this).val();
    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(`${content}<br class="lbr">`);
    const hiddenHeight = hiddenDiv.height();
    const hiddenHeightInRem = `${hiddenHeight / parseInt($('body').css('font-size')) + 1}rem`;
    $(this).css('height', hiddenHeightInRem);
    console.log(hiddenDiv.height());
  });
}(jQuery));
