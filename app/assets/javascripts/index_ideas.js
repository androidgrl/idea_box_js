function loadIdeas () {
    $.ajax({
        url: '/ideas.json',
        type: 'GET',
        success: function (data) {
            console.log('gettin your ideas');
            console.log(data);
            data.forEach(function(idea){
                $('#ideas').prepend(makeIdea(idea));
            });
        }
    });
}

$('document').ready(function(){
    loadIdeas();
});
