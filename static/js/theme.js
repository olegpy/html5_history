//this code needed for identification for vk 
// vk init
// VK.init({
// 	apiId: 5238735, 
// 	onlyWidgets: true
// });

// vk auth login
// VK.Auth.getLoginStatus(function(response) {
// 	if (response.session) {
// 		if (window.location.pathname == "/") {
// 			window.location.href = '/blogs/';
// 		} 
// 	} 
// });


// $(document).ready(function(){
//     $("#comments").on("click", ".reply", function(event){
//         event.preventDefault();
//         var form = $("#comment_post").clone(true);
//         form.find('.parent').val($(this).parent().parent().attr('id'));
//         $(this).parent().append(form);
//     });
// });


// return !!(window.history && history.pushState);

// history.pushState()

// history.replaceState()

$('document').ready(function() {

    $('.historyAPI').on('click', function(e) {
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

    // Get State value using e.state
    getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    $.get(url)
        .done(function(data) {

            // Updating Content on Page
            $('#contentHolder').html(data);

            if (addEntry == true) {
                // Add History Entry using pushState
                history.pushState(null, null, url);
            }

        });
}
