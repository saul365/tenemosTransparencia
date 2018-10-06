var updateLogEl = document.querySelector('#update .current-time-log');
var progressLogEl = document.querySelector('#update .progress-log');

var update = anime({
  targets: '#callbacks .el',
  translateX: 250,
  delay: 2000,
  update: function(anim) {
    updateLogEl.value = 'current time : ' + Math.round(anim.currentTime) + 'ms';
    progressLogEl.value = 'progress : ' + Math.round(anim.progress) + '%';
  }
});
