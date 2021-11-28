window.addEventListener('mousemove', function (e) {
    const translateBlock = document.querySelectorAll('.translateOnMouseMove');

    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth / 2;
    let windowHeight = window.innerHeight / 2;

    if(windowWidth >= 1024) {
        translateBlock.forEach(function(item) {
            let translateSpeed = item.getAttribute('data-animateSpeed')
            item.style.transform = `translate( ${ (windowWidth - x) / translateSpeed}px, ${( windowHeight - y ) / translateSpeed}px)`
        });
    }
})

// const sections = document.querySelectorAll('.cubes-fonts__color')
// const animateClass = 'cubes-fonts__animate'
// const options = {
//     rootMargin: '0px',
//     threshold: 0.25
// }
//
// const callback = entries => {
//     entries.forEach(entry => {
//         let target = entry.target
//         if (entry.intersectionRatio >= 0.5) {
//             target.classList.add(animateClass);
//         } else {
//             target.classList.remove(animateClass);
//         }
//     })
// }
//
// let observer = new IntersectionObserver(callback, options)
//
// sections.forEach((section, index) => {
//     observer.observe(section)
// })

let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling === false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let listItems = document.querySelectorAll("#mainContent ol li");
let firstBox = document.querySelector("#firstBox");
let secondBox = document.querySelector("#secondBox");

function scrolling(e) {

    if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("active");

        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }

    if (isFullyVisible(secondBox)) {
        secondBox.classList.add("active");

        document.body.classList.add("colorTwo");
        document.body.classList.remove("colorOne");
    }

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        } else {
            listItem.classList.remove("active");
        }
    }
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}