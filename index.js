loadCircles = () => {
  let offset = 0
  for(var i = 0;i < 13; i++){
    const circle = document.createElement('div')
    circle.setAttribute('class', 'circle');
    circle.style.animationDelay = offset.toString() + 's'
    container.append(circle)
    offset += .07
  }
}

loadCircles()
