var fade_in = anime({
  targets: '.game-embed',
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(300, {start: 500}),
  duration: 1000,
  easing: 'easeOutQuad'
})

//TODO recolor the embed links
const iframe_color_bg = "#090909";
const iframe_color_fg = "#aaaaaa";

// fix iframe colors
var iframes = document.querySelectorAll('iframe');
for(i = 0; i < iframes.length; i++){
  var iframe = iframes[i]
  iframe.addEventListener("load", function() {
    this.style.background = iframe_color_bg;
    this.contentWindow.document.body.style.backgroundColor = iframe_color_bg;
  });
}
