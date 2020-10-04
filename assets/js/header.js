var header_animation = anime({
  targets: '.header-border',
  width: ['0%', '100%'],
  opacity: [0, 1],
  delay: anime.stagger(300),
  duration: 2000,
  easing: 'easeInOutSine'
});
