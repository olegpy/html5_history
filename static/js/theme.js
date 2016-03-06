$(document).ready(function(){

    $('.historyAPI').on('click', function(e){
        e.preventDefault();
        var href = $(this).children().attr('href');

        // Getting Content
        getContent(href, true);

        $('.historyAPI').removeClass('active');
        $(this).addClass('active');
    });

});

// Adding popstate event listener to handle browser back button
window.addEventListener("popstate", function(e) {
    console.log(location.pathname);
    // Get State value using e.state
    getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    $.get(url)
    .done(function( data ) {

        // Updating Content on Page
        $('#contentHolder').html($(data).find("#contentHolder").html());

        if(addEntry == true) {
            // Add History Entry using pushState
            history.pushState(null, null, url);
        }

    });
}
