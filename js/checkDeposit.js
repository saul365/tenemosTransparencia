
function check( numAut){
firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  todos.forEach(element => {
    numCuenta=parseInt(snapshot.val()[element].Autorizacion);
    if(numCuenta==numAut){
      document.write('<iframe src="ticket.html/?id=1&number'+numCuenta+'" style="width: 800px,height:800px;"></iframe>')
    }
  })
  M.toast({html: 'No se econtró su número de autorización'})
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}
function getNum(){
  var checking=document.getElementById("numAut").value;
  check(checking);
}
