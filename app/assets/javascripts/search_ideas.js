function searchIdeas () {
    var dis = this.value;
    console.log(dis);
    if (dis.length > 0) {
        $('#ideas').children().each(function (index, idea) {
            var $idea = $(idea);
            var titleAndBody = $idea.data('title') + $idea.data('body');
            console.log(titleAndBody);
            console.log(dis);
            if (titleAndBody.indexOf(dis) !== -1) {
                $idea.show();
            } else {
                $idea.hide();
            }
        });
    } else {
        $('#ideas').show();
    }
}

$('document').ready(function(){
    $('#search').on("keyup", searchIdeas);
});
