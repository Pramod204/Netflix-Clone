function myfunc() {
  var content = document.getElementById("lang");
  if (content.style.display === "none") {
    content.style.display = "block"; // Show the content
  } else {
    content.style.display = "none"; // Hide the content
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
