function editIdea () {
    var id = this.id.substr(5);
    window.location.href = '/ideas/' + id + '/edit';
}

function updateIdea () {
    var id = $('#edit-id').val();
    $.ajax({
        url: '/ideas/' + id,
        type: 'PUT',
        data: editedData(),
        success: function () {
            console.log('edited your ideas');
        }
    });
    window.location.href = '/';
}

function editedData(){
    return {
        idea: {
            title: $('#edit-title').val(),
            body: $('#edit-body').val()
        }
    };
}


$('document').ready(function () {
    $('#ideas').delegate('.edit', 'click', editIdea);
    $('#edit').on('click', updateIdea);
});
