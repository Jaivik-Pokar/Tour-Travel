function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    alert("Data Has Not been been saved");
  } else {
    alert("Data Has been been saved");
  }
  document.getElementById("demo").innerHTML = txt;
}
