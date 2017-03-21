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
      $('#todo-progress')
        .progress('set percent', 8/30*100)
      ;
      $('#todo-progress')
      .progress({
        label: 'ratio',
        text: {
          ratio: '{percent}%'
        }
      })
      ;
  });
