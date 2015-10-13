function searchIdeas () {
    console.log('searchin your ideas');
    console.log(this.value);
}

$('document').ready(function(){
    $('#search').on("keyup", searchIdeas);
});
