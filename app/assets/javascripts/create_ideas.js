function formData(){
    return {
        idea: {
            title: $('#title').val(),
            body: $('#body').val()
        }
    };
}

function deleteButton (id) {
    return "<button class='delete' id='delete-" + id +"'>Delete</button>";
}

function editButton (id) {
    return "<button class='edit' id='edit-" + id + "'>Edit</button>";
}

function upButton (id) {
    return "<button class='up' id='up-" + id +"'>Thumbs Up</button>";
}

function downButton (id) {
    return "<button class='down' id='down-" + id + "'>Thumbs Down</button>";
}

function makeIdea(data){
    var truncatedBody = smartTrim(data.body, 100, " ", "...");
    var compiled = _.template("<div id='<%= id %>' class=idea data-title='<%= title %>' data-body='<%= body %>' data-quality='<%= quality %>'><li>Title: <%= title %> </li><li>Body: <%= body %> </li><li id='quality-<%= id %>'>Quality: <%= quality %></li> <%= deleteButton(id) %> <%= editButton(id) %> <%= upButton(id) %> <%= downButton(id) %></div>");
    var newIdea = compiled({'title': data.title,
                            'body': truncatedBody,
                            'quality': data.quality,
                            'id': data.id
                        });
    return newIdea;
}

function smartTrim(str, length, delim, appendix) {
    if (str.length <= length) return str;

    var trimmedStr = str.substr(0, length+delim.length);

    var lastDelimIndex = trimmedStr.lastIndexOf(delim);
    if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
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
