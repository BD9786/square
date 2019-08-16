/// ///////////////Linking/////////////////

var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

var y = 0
canvas.height *= 5
function updateCamera (timenow) {
  requestAnimationFrame(updateCamera)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'green'

  ctx.fillRect(0, y, 300, 300)
  y++
}
///
updateCamera()
