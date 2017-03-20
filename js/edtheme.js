$(document)
  .ready(function(){
    $('.ui.menu a.item')
        .on('click', function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
          ;
        })
      ;
        $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
  });
