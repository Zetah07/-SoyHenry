const createElements =response=>{
    $('#lista').empty();
    response.forEach((amigo) => {
        $(`<li>${amigo.id} ${amigo.nombre}</li>`).appendTo('#lista');
    });
}

$('#boton').click(() => {
    $('#lista').empty();
    $.get("http://localhost:5000/amigos/", createElements);
});

$('#search').click(() => {
    const id = $('#input')[0].value;
    $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        $('#amigo').text(response.nombre);
});
});

$('#delete').click(() => {
    const id = $('#inputDelete')[0].value;
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: (response) => {
            $('#amigo').alert('Amigo eliminado');
            createElements(response);
        }
});
});