loadCircles = () => {
  let offset = 0
  for(var i = 0;i < 12; i++){
    const circle = document.createElement('div')
    circle.setAttribute('class', 'circle up');
    circle.style.animationDelay = offset.toString() + 's'
    container.append(circle)
    offset += .2
  }
}

loadCircles()
