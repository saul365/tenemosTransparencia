
function check( numAut){
firebase.database().ref().on("value", function(snapshot) {
  let todos = Object.keys(snapshot.val());
  todos.forEach(element => {
    numCuenta=parseInt(snapshot.val()[element].Autorizacion);
    if(numCuenta==numAut){
      var dir=parseInt(snapshot.val()[element].Monto);
      console.log(dir);
      var myWindow = window.open("ticket.html?number="+dir,"newWindow", "width=500,height=700");
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
