function testLodash(){
    var template = _.template("Hello {{ name }}!");
    console.log(template({name: "Mustache"}));
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
