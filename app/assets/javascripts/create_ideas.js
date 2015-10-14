function formData(){
    return {
        idea: {
            title: $('#title').val(),
            body: $('#body').val()
        }
    };
}

function deleteButton () {
    return '<button>Delete</button>';
}

function editButton () {
    return '<button>Edit</button>';
}

function upButton () {
    return '<button>Thumbs Up</button>';
}

function downButton () {
    return '<button>Thumbs Down</button>';
}

function makeIdea(data){
    var compiled = _.template("<div class=idea data-title='<%= title %>' data-body='<%= body %>' data-quality='<%= quality %>'><li>Title: <%= title %> </li><li>Body: <%= body %> </li><li>Quality: <%= quality %></li> <%= deleteButton() %> <%= editButton() %> <%= upButton() %> <%= downButton() %></div>");
    var newIdea = compiled({'title': data.title,
                            'body': data.body,
                            'quality': data.quality
                        });
    return newIdea;
}

function postData(){
    $.post('/ideas',
            formData(),
            function(data){
                $('#ideas').prepend(makeIdea(data));
                $('#title').val('');
                $('#body').val('');
            });
}

$('document').ready(function(){
    $('#save').on('click', postData);
});
