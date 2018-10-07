firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  let count = 0;
  todos.forEach(element => {
    count = count + parseInt(snapshot.val()[element].Monto);
  })
  let percentage=(count*100)/456013740;
  document.getElementById('actualCount').innerHTML =count;
  document.getElementById('porcentaje').innerHTML=Math.round(percentage)+"%";
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
