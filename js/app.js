// регистрируем плагин
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//если моб.верс. отключаем плавный скролл
if (ScrollTrigger.isTouch !==1){
   ScrollSmoother.create({ 
    wrapper: '.wrapper',
    content: '.content',
    // скорость прокрутки
    smooth: 1.5,
    effects: true,
}) 

//значение до анимации и после

gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
         //э-т триггера
        trigger: '.hero-section',
        start: 'center',
        //где э-т исчезает
        end: '820',
        //возращаем предыдущее значение
        scrub: true
    }
})
//всплытие элементов

let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')

itemsLeft.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
})
let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

itemsRight.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-750',
            end: 'top',
            scrub: true
        }
    })
})

}

