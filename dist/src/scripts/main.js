window.addEventListener('mousemove', function (e) {
    const translateBlock = document.querySelectorAll('.translateOnMouseMove');

    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth / 2;
    let windowHeight = window.innerHeight / 2;

    if(windowWidth <= 1024) {
        translateBlock.forEach(function(item) {
            let translateSpeed = item.getAttribute('data-animateSpeed')
            item.style.transform = `translate( ${ (windowWidth - x) / translateSpeed}px, ${( windowHeight - y ) / translateSpeed}px)`
        });
    }
})

// carousel
// const carousel = document.getElementById('carousel')
// const carouselElements = carousel.querySelectorAll('.cubes-fonts__element')
//
// let cloneElement = carousel.
//
// console.log(carouselElements);