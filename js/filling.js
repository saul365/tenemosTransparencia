
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("?");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var prim=document.getElementById('Monto');
var sec=document.getElementById('mensaje');
var ammount=getQueryVariable('number');
 prim.innerHTML='$'+ammount;
if(ammount/3030<1){
  sec.innerHTML='Gracias por donar al Teletón, has contribuido a:  '+Math.round((ammount/101)*100)/100+' dias de rehabilitación para un niño.';
}
else if(ammount/36360<1){
  sec.innerHTML='Gracias por donar al Teletón, has contribuido a:  '+Math.round((ammount/3030)*100)/100+' meses de rehabilitación para un niño.';
}
else{
  sec.innerHTML='Gracias por donar al Teletón, has contribuido a: ' +Math.round((ammount/36360)*100)/100+' años de rehabilitación para un niño.';
}
