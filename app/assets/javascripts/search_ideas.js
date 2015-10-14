function searchIdeas () {
    var dis = this.value;
    var searchString = dis.toString();
    console.log(searchString);
    if (searchString.length > 0) {
        $('#ideas').children().each(function (index, idea) {
            var $idea = $(idea);
            var titleAndBody = $idea.data('title').toString(); + $idea.data('body').toString();
            console.log(titleAndBody);
            console.log(searchString);
            if (titleAndBody.indexOf(searchString) !== -1) {
                $idea.show();
            } else {
                $idea.hide();
            }
        });
    } else {
        $('#ideas').children().show();
    }
}

$('document').ready(function(){
    $('#search').on("keyup", searchIdeas);
});
