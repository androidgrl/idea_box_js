//function prependData(data){
    //console.log(data);
    //console.log("prepending data");
//}

function formData(){
    return {
        idea: {
            title: $('#title').val(),
            body: $('#body').val()
        }
    };
}

function postData(){
    $.post('/ideas', formData(), function(data){console.log(data);console.log("posted data");});
}

$('docoment').ready(function(){
    $('#save').on('click', postData);
});
