$(document).ready(function(){

    $('.historyAPI').on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');

        // Getting Content
        getContent(href, true);
        console.log($(this));

        

        // console.log($(this).parent);
        $('.historyAPI').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.openmodal').on('click', function(){
        // window.location.href = '#myModal';
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
        $('.content-page').html($(data).find(".content-page").html());

        if(addEntry == true) {
            // Add History Entry using pushState
            history.pushState(null, null, url);
        }

    });
}
