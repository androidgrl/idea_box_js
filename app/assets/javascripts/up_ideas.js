function upIdea () {
    var id = this.id.substr(3);
    $.ajax({
        url: '/thumbs_up/' + id + '.json',
        type: 'GET',
        success: function (data) {
            $('#quality-' + id).html("Quality: " + data.quality);
        }
    });
}

$('document').ready(function () {
    $('#ideas').delegate('.up', 'click', upIdea);
});
