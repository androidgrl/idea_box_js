function searchIdeas (searchBox, ideasContainer) {
    var dis = searchBox.value;
    if (dis.length > 0) {
        ideasContainer.children().each(function (index, idea) {
            var $idea = $(idea);
            var title = $idea.data('title').toString();
            var body = $idea.data('body').toString();
            if (title.indexOf(dis) !== -1 || body.indexOf(dis) !== -1) {
                $idea.show();
            } else {
                $idea.hide();
            }
        });
    } else {
        ideasContainer.children().show();
    }
}

function listenForSearch (searchBox, ideasContainer) {
    searchBox.on("keyup", function () {
        searchIdeas(searchBox[0], ideasContainer);
    });
}

$('document').ready(function(){
    var s = $('#search');
    if (s) {
        listenForSearch(s, $('#ideas'));
    }
});
