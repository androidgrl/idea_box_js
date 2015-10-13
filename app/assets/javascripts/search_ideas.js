function searchIdeas () {
    console.log(this.value);
    $('#ideas').children().each(function (index, idea) {
        var $idea = $(idea);
        console.log($idea.data('title'));
    });
}

$('document').ready(function(){
    $('#search').on("keyup", searchIdeas);
});
