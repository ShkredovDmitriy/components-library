/* eslint-disable func-names */

const dsMobMenu = (function($) {
  let state = 0;

  $('.mob-menu__sandwich').click(function() {
    if (state === 0) {
      this.classList.add('active');
      $('.ds-mob-menu').addClass('active');
      state = 1;
    } else {
      this.classList.remove('active');
      $('.ds-mob-menu').removeClass('active');
      state = 0;
    }
  });

  console.log('ds-mob-menu: started');
}(jQuery));
