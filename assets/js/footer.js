
function grow(obj){
  anime({
    targets: obj,
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 500,
  })
}

function shrink(obj){
  anime({
    targets: obj,
    scaleX: 1,
    scaleY: 1,
    duration: 500,
  })
}
