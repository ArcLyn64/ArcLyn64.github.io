var fade_in = anime({
  targets: '.fade-in',
  //translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(50, {start: 500}),
  duration: 1000,
  easing: 'easeOutQuad'
})

var pull_down = anime({
  targets: '.pull-down',
  height: ["0px", $(".content-stripe-container")[0].clientHeight],
  duration: 3000,
  easing: 'easeOutQuad'
})

var pull_down_fadein = anime({
  targets: '.pull-down',
  opacity: [0, 1],
  delay: 300,
  duration: 1000,
  easing: 'easeOutQuad'
})
