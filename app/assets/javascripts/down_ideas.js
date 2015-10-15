function downIdea () {
    var id = this.id.substr(5);
    $.ajax({
        url: '/thumbs_down/' + id + '.json',
        type: 'GET',
        success: function (data) {
            $('#quality-' + data.id).html("Quality: " + data.quality);
        }
    });
}

$('document').ready(function () {
    $('#ideas').delegate('.down', 'click', downIdea);
});
