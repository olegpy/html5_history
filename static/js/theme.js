$(document).ready(function(){

    $('.historyAPI').on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');

        // Getting Content
        getContent(href, true);

        $('.historyAPI').parent().removeClass('active');
        $(this).parent().addClass('active');
    });

    // add some text to url and open modal window
    modalWindow('modal');

    $(document).on('click', '.close-modal', function(){
        $(this).closest(".modal" ).modal('hide');
    });

});


// Adding popstate event listener to handle browser back button
window.addEventListener("popstate", function(e) {
    // Get State value using e.state
    getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    $.get(url)
    .done(function( data ) {
        // Updating Content on Page
        $('.content-page').html($(data).find(".content-page").html());

        if(addEntry == true) {
            // Add History Entry using pushState
            history.pushState(null, null, url);
        }

    });
}

function modalWindow(text) {
    // add to window location text
    $(document).on('click', '.openmodal' ,function(){
        window.location.hash = text;
    });

    if (window.location.hash == "#" + text) {
        $('#myModal').modal('show') 
    }
}

