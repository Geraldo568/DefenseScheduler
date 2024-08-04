$(document).ready(function(){
    $('.partners-grid').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,  // Désactiver les flèches sur les petits écrans
                    dots: false  // Désactiver les points sur les petits écrans
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,  // Désactiver les flèches sur les petits écrans
                    dots: false  // Désactiver les points sur les petits écrans
                }
            }
        ]
    });
});
