function testLodash(){
    var compiled = _.template('hello <%= user %>!');
    var greet = compiled({ 'user': 'fred' });
    console.log(greet);
}

function formData(){
    return {
        idea: {
            title: $('#title').val(),
            body: $('#body').val()
        }
    };
}

function makeIdea(data){
    var compiled = _.template('<li>Title: <%= title %> </li><li>Body: <%= body %> </li><li>Quality: <%= quality %></li>');
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
                console.log(data);
                $('#ideas').prepend(makeIdea(data));
            });
}

$('docoment').ready(function(){
    testLodash();
    $('#save').on('click', postData);
});
