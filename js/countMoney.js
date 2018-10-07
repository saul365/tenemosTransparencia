firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  let count = 0;
  todos.forEach(element => {
    count = count + parseInt(snapshot.val()[element].Monto);
  })
  let percentage=(count*100)/456013740;
  var prim=count%1000000000;
  var sec=prim%1000000;
  document.getElementById('actualCount').innerHTML ="$"+Math.trunc(prim/1000000)+","+Math.trunc(sec/1000)+","+(count%1000);
  document.getElementById('porcentaje').innerHTML=Math.round(percentage)+"%";
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
