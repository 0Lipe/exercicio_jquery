$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const TarefaNova = $('#nova-tarefa').val();
        const novoitem = $('<li></li>');
        $(`<li>${TarefaNova}</li>`).appendTo(novoitem);
        $(novoitem).appendTo('ul');
    });
});


