function searchIdeas () {
    var dis = this.value;
    var searchString = dis.toString();
    if (searchString.length > 0) {
        $('#ideas').children().each(function (index, idea) {
            var $idea = $(idea);
            var titleAndBody = $idea.data('title').toString(); + $idea.data('body').toString();
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
