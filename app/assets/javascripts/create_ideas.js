function testLodash(){
    var compiled = _.template('hello <%= user %>!');
    var greet = compiled({ 'user': 'fred' });
    console.log(greet);
    var floats = [1.2, 1.7, 3.3, 4.4];
    var grouped = _.groupBy(floats, function(element){
        return Math.floor(element);
    });
    console.log(grouped);
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
