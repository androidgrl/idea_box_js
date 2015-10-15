function loadIdeas () {
    $.ajax({
        url: '/ideas.json',
        type: 'GET',
        success: function (data) {
            data.forEach(function(idea){
                $('#ideas').append(makeIdea(idea));
            });
        }
    });
}

$('document').ready(function(){
    loadIdeas();
});
