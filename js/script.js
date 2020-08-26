function fly() {
  var elem = document.getElementById("group1");
  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == -800) {
      pos = 1500;
    } else {
      pos = pos -1;
      elem.style.left = pos + 'px';
    }
  }
}
function fly2() {
  var elem = document.getElementById("group2");
  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == 1500) {
      pos = -800;
    } else {
      pos = pos + 3;
      elem.style.left = pos + 'px';
    }
  }
}