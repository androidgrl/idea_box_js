function editIdea () {
    console.log(this);
    var id = this.id.substr(5);
    //send the put request
    //have it render the edit page
    //have it redirect to root
    //$.ajax({
        //url: '/ideas/' + id + '/edit',
        //type: 'GET',
        //success: function () {
            //console.log("editing idea");
        //}
    //});
    window.location.href = '/ideas/' + id + '/edit';
}

$('document').ready(function () {
    $('#ideas').delegate('.edit', 'click', editIdea);
});
