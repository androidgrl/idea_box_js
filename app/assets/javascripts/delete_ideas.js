function deleteIdea () {
    console.log("Deleting idea");
    //find the id of the idea being deleted
    //you'll want to put the id in the idea div
    //send the ajax request to the route
    //then clear the div with that id
}

$('document').ready(function () {
    $('#ideas').delegate('#delete', 'click', deleteIdea);
});
