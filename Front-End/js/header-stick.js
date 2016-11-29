
var doc = document;
var header = doc.getElementById('header');
// var fake_header = doc.getElementById('fake-header');

doc.onscroll = function() {
  var curPos = window.pageYOffset;
  // console.log(curPos);
  if (curPos < '240') {
    setInactive();
  }
  else {
    if (curPos >= '241') {
      setActive();
    }
  }
};

doc.onload = function () {
  var curPos = window.pageYOffset;
  // console.log(curPos);
  if (curPos < '240') {
    setInactive();
  }
  else {
    if (curPos >= '241') {
      setActive();
    }
  }
};

function setActive() {
  header.style.opacity = 1;

}
function setInactive() {
  header.style.opacity = 0;
}
