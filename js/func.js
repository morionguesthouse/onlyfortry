function show_subnav(subnav)
{
    var display = ($(subnav).css('display') === 'none')?'block':'none';
    unshown_all_subnav();
    $(subnav).css('display', display);
}
function unshown_all_subnav()
{
    $('#subnav-space').css('display', 'none');
    $('#subnav-traffic').css('display', 'none');
}

$('#nav-space').click(function() {
    show_subnav('#subnav-space');
});
$('#nav-traffic').click(function() {
    show_subnav('#subnav-traffic');
});

$(document).ready(function(){
    $('.nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    });

});


