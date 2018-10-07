document.getElementById('fourthView').style.display = 'none';
document.getElementById('monitoreoDinero').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'none';
  document.getElementById('fourthView').style.display = 'block';
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});
document.getElementById('return4to1').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'block';
  document.getElementById('fourthView').style.display = 'none';
})
