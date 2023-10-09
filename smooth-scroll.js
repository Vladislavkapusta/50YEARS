const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function playSound1() {
  var sound = document.getElementById("sound1");
  sound.play();
}
function playSound2() {
  var sound = document.getElementById("sound2");
  sound.play();
}
function playSound3() {
  var sound = document.getElementById("sound3");
  sound.play();
}