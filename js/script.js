function fly() {
    var elem = document.getElementById("group1");
    var pos = 0;
    var width =window.innerWidth;
    var id = setInterval(frame, 100);
  
    function frame() {
      if (pos == width) {
        pos = 0;
    } else {
        pos=pos+1;
        elem.style.top= pos + 'px';
      }
    }
  }
function fly2() {
    var elem = document.getElementById("group2");
    var pos = 0;
    var width =window.innerWidth;
    var id = setInterval(frame, 100);
  
    function frame() {
      if (pos == width) {
        pos = 0;
    } else {
        pos=pos+1;
        elem.style.left= pos + 'px';
      }
    }
  }