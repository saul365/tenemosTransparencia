
function check( numAut){
firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  todos.forEach(element => {
    numCuenta=parseInt(snapshot.val()[element].Autorizacion);
    if(numCuenta==numAut){
      document.write('<iframe src="ticket.html"><\iframe>')
    }
    else{
    M.toast({html: 'No se econtró su número de autorización'})
    }
  })
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}
