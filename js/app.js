// регистрируем плагин
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({ 
    wrapper: '.wrapper',
    content: '.content',
    // скорость прокрутки
    smooth: 1.5,
    effects: true,
})