$(document).ready(function(){
    const tarefa = [];

    $('form').on('submit',function(e){
        e.preventDefault();
                
        const adicionarTarefa = $('#input-tarefa').val();
        tarefa.push(adicionarTarefa)      
        const novaTarefa = $('<li></li>')
        $(`<h3 id="${tarefa.length}" >${adicionarTarefa}</h3>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#input-tarefa').val('');

        $(`#${tarefa.length}`).click(function () { 
            $(this).css('text-decoration', 'line-through');          
            
        });
    })  
})

