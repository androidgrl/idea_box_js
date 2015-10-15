//function searchIdeas () {
    //var dis = this.value;
    //var searchString = dis.toString();
    //if (searchString.length > 0) {
        //$('#ideas').children().each(function (index, idea) {
            //var $idea = $(idea);
            //var titleAndBody = $idea.data('title').toString(); + $idea.data('body').toString();
            //if (titleAndBody.indexOf(searchString) !== -1) {
                //$idea.show();
            //} else {
                //$idea.hide();
            //}
        //});
    //} else {
        //$('#ideas').children().show();
    //}
//}

//$('document').ready(function(){
    //$('#search').on("keyup", searchIdeas);
//});

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
    //if you need to call the function later wrap it in an unnamed function
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
