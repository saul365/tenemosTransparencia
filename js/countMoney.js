firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  let count = 0;
  todos.forEach(element => {
    console.log(snapshot.val()[element].Monto)
    count = count + parseInt(snapshot.val()[element].Monto);
  })
  let percentage=(count*100)/coun456013740
  console.log(count);
  document.getElementById('actualCount').innerHTML = count;
  document.getElementById('porcentaje').innerHTML=percentage;
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
