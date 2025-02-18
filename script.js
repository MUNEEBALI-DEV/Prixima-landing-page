
    $('#home').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText:['Prev','Next'],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            768:{
                items:1,
                nav:true,
            },
           
        }
    })
    $('#portfolio-cards').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            768:{
                items:1,
                center:false,
                margin:0,
            },
            1100:{
               items:2,
                center:true,
            },
           
        }
    })
    $('#reviews-cards').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
           0:{
            items:1,
           }
        }
    })


  
