let navbar = $("nav");
let aboutOffset = $("#about").offset().top;
$(window).scroll(()=>{
    if ($("html, body").scrollTop() >= aboutOffset - 50) {
        navbar.css({'backgroundColor':'rgba(0, 0, 0, 1)'}) 
    }else {
        navbar.css({'backgroundColor':'rgba(0, 0, 0, .5)'}) 
    }
})