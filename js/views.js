document.getElementById('fourthView').style.display = 'none';
document.getElementById('secondView').style.display = 'none';
document.getElementById('thirdView').style.display = 'none';
document.getElementById('monitoreoDinero').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'none';
  document.getElementById('fourthView').style.display = 'block';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('thirdView').style.display = 'none';

})

$(document).ready(function(){
  $('.collapsible').collapsible();
});
$(document).ready(function(){
    $('.modal').modal();
  });
document.getElementById('return4to1').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'block';
  document.getElementById('fourthView').style.display = 'none';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('thirdView').style.display = 'none';
})
document.getElementById('return2to1').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'block';
  document.getElementById('fourthView').style.display = 'none';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('thirdView').style.display = 'none';
})

document.getElementById('rastreoDinero').addEventListener('click', ()=> {
  document.getElementById('thirdView').style.display = 'block';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('firstView').style.display = 'none';
  document.getElementById('fourthView').style.display = 'none';
})
document.getElementById('rastreoBanmex').addEventListener('click', ()=> {
  document.getElementById('thirdView').style.display = 'block';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('firstView').style.display = 'none';
  document.getElementById('fourthView').style.display = 'none';
})

document.getElementById('home').addEventListener('click', ()=> {
  document.getElementById('firstView').style.display = 'block';
  document.getElementById('fourthView').style.display = 'none';
  document.getElementById('secondView').style.display = 'none';
  document.getElementById('thirdView').style.display = 'none';
})
