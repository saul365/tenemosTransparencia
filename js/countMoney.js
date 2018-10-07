firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  let count = 0;
  todos.forEach(element => {
    console.log(snapshot.val()[element].Monto)
    count = count + parseInt(snapshot.val()[element].Monto);
  })
  console.log(count);
  document.getElementById('actualCount').innerHTML = count;
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});