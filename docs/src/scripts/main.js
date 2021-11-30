window.addEventListener('mousemove', function (e) {
    const translateBlock = document.querySelectorAll('.translateOnMouseMove');

    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth / 2;
    let windowHeight = window.innerHeight / 2;

    console.log(windowWidth);
    if(windowWidth >= 960) {
        translateBlock.forEach(function(item) {
            let translateSpeed = item.getAttribute('data-animateSpeed')
            item.style.transform = `translate( ${ (windowWidth - x) / translateSpeed}px, ${( windowHeight - y ) / translateSpeed}px)`
        });
    }
})

const sections = document.querySelectorAll('.cubes-fonts__color')
const animateClass = 'cubes-fonts__animate'
const options = {
    rootMargin: '200px',
    threshold: [0, 0.79, 0.8]
}

const callback = entries => {
    entries.forEach(entry => {
        let target = entry.target
        if (entry.intersectionRatio > 0.8) {
            target.classList.add(animateClass);
        } else {
            target.classList.remove(animateClass);
        }
    })
}

let observer = new IntersectionObserver(callback, options)

sections.forEach((section, index) => {
    observer.observe(section)
})