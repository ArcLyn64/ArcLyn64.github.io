var fade_in = anime({
  targets: '.fade-in',
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(300, {start: 500}),
  duration: 1000,
  easing: 'easeOutQuad'
})
