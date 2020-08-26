function fly() {
  var elem = document.getElementById("group1");
  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == -4000) {
      pos = 5800;
    } else {
      pos = pos -2;
      elem.style.left = pos + 'px';
    }
  }
}
function fly2() {
  var elem = document.getElementById("group2");
  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos == 6000) {
      pos = -4000;
    } else {
      pos = pos + 5;
      elem.style.left = pos + 'px';
    }
  }
}