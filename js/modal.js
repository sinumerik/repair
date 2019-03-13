$(document).ready(function() {
    var button = $('.navbar__button');
    var offerButton = $('.offer__button');
    var close = $('#close');
    var modal = $('#modal');

    button.on('click', function() {
        modal.addClass('modal_active');
    });
    close.on('click', function() {
        modal.removeClass('modal_active');
    });
    // offerButton.on('click', function() {
    //     modal.addClass('modal_active');
    // });
    // close.on('click', function() {
    //     modal.removeClass('modal_active');
    // });

});

$(document).ready(function(){
    //Обработка нажатия на кнопку "Вверх"
    $(".top__link").click(function(){
    //Необходимо прокрутить в начало страницы
    var curPos=$(document).scrollTop();
    var scrollTime=curPos/1.5;
    $("body,html").animate({"scrollTop":0},scrollTime);
    });
});

// $(document).ready(function() {
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         prevArrow: $('.arrows__left'),
//         nextArrow: $('.arrows__right'),
//         responsive: [
//             {
//               breakpoint: 1200,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 960,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 768,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     fade: true,
//                     cssEase: 'linear'
//                 }
//             }
//           ]
//     });
// });

// OWL carousel

