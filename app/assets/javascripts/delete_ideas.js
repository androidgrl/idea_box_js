function deleteIdea () {
    var id = this.id.substr(7);
    $.ajax({
        url: '/ideas/' + id,
        type: 'DELETE',
        success: function (data) {
            console.log(data);
            $('#' + data.id).html('');
        }
    });
}

$('document').ready(function () {
    $('#ideas').delegate('.delete', 'click', deleteIdea);
});
