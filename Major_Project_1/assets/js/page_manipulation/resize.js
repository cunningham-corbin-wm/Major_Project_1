
var doc = document;
var pic = doc.getElementById('path_pic');

window.onresize = function () {
  // console.log(window.outerWidth);
  var mar = ((window.outerWidth - 696 ) / 2);
  pic.style.marginLeft = mar + 'px';

};

var wait = setInterval(setMargin, 200);

function setMargin() {
  var mar = ((window.outerWidth - 696 ) / 2);
  pic.style.marginLeft = mar + 'px';
  clearInterval(wait);
}
