$(document).ready( function () {
    $('.sellers .content2').fadeOut();
    $('.sellers .btn-tab1').click( function() {
        $(this).parent().addClass('active')
        $('.sellers .btn-tab2').parent().removeClass('active')
        $('.sellers .content1').fadeIn();
        $('.sellers .content2').fadeOut();
    })
    $('.sellers .btn-tab2').click( function() {
        $(this).parent().addClass('active')
        $('.sellers .btn-tab1').parent().removeClass('active')
        $('.sellers .content2').fadeIn();
        $('.sellers .content1').fadeOut();
    })
})