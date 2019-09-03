const dsMobMenu = (function($) {
  state = 0;

  $('.ds-mob-menu-btn').click(function() {
    if (state === 0) {
      this.classList.add('active');
      state = 1;
    } else {
      this.classList.remove('active');
      state = 0;
    }
  });

  console.log('ds-mob-menu: started');
}(jQuery));
