// mouse animate
window.addEventListener('mousemove', function (e) {
    const translateBlock = document.querySelectorAll('.translateOnMouseMove');

    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth / 2;
    let windowHeight = window.innerHeight / 2;

    if(windowWidth >= 960) {
        translateBlock.forEach(function(item) {
            let translateSpeed = item.getAttribute('data-animateSpeed')
            item.style.transform = `translate( ${ (windowWidth - x) / translateSpeed}px, ${( windowHeight - y ) / translateSpeed}px)`
        });
    }
})

// colors animate by scroll
const section = document.getElementById('fonts')
const colors = section.querySelectorAll('.cubes-fonts__color')
const animateClass = 'cubes-fonts__animate'
const options = {
    rootMargin: '200px',
    threshold: [0, 0.79, 0.8]
}

const callback = entries => {
    entries.forEach(entry => {
        let target = entry.target
        if (entry.intersectionRatio > 0.8) {
            colors.forEach(color => color.classList.add(animateClass))
        } else if (entry.intersectionRatio < 0.79 && entry.boundingClientRect.y > -200) {
            colors.forEach(color => color.classList.remove(animateClass))
        }
    })
}

let observer = new IntersectionObserver(callback, options)

observer.observe(section)