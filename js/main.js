// ==============================================
//                                      Preloader
// ==============================================
$(document)
  .ajaxStart(function () {
    $('body').css('overflow', 'auto')
    $('body').append('<div class="preloader"><i class="fas fa-spinner fa-spin"></i></div>');
  })
  .ajaxStop(function () {
    $('.body').removeClass('.preloader');
    $('body').removeClass('preloader-site');
    $('body').css('overflow', 'auto');
  });

$('body').addClass('animated fadeIn');


// ==============================================
//                                   Start Select
// ==============================================
$(document).ready(function () {
  $('select').niceSelect();
});


// ==============================================
//                               Add Participante
// ==============================================
$(document).ready(function () {
  var button = $('[data-id="btn-add-participante"]');
  var tipoParticipante = $('[data-id="select-tipo-participante"]');
  var nomeParticipante = $('[data-id="select-nome-participante"]');

  button.removeAttr('href');

  tipoParticipante.change(function () {
    checkSelects()
  });

  nomeParticipante.change(function () {
    checkSelects()
  });

  button.click(function () {
    addParticipante()
  });


  function checkSelects() {
    if (tipoParticipante.val() !== 'Selecione' && nomeParticipante.val() !== 'Selecione') {
      button.removeClass('opacity-06');
    } else {
      button.addClass('opacity-06');
    }
  }

  function addParticipante() {
    $('.lista-chamada').append('<li class="chamada"><p class="font12 on-bold">' + nomeParticipante.val() + '</p><p class="font12">' + tipoParticipante.val() + '</p></li>');

    tipoParticipante.val('');
  }

});
