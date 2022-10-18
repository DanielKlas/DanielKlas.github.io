window.onload = function () {
  var item = document.getElementById("sub_js");
  item.addEventListener("click", func_js, false);
  
  item = document.getElementById("sub_cs");
  item.addEventListener("click", func_cs, false);

  item = document.getElementById("sub_cpp");
  item.addEventListener("click", func_cpp, false);

  item = document.getElementById("top_projects");
  item.addEventListener("click", func_background_off, false);

  item = document.getElementById("top_library");
  item.addEventListener("click", func_background_off, false);

  item = document.getElementById("top_about");
  item.addEventListener("click", func_background_off, false);
}

// clicking on another function overrides active div

function func_js() {
  let target = document.getElementById("body");
  target.setAttribute("style", "background-image: linear-gradient(hsl(52, 74%, 59%), hsl(0, 11%, 9%));")
}

function func_cs() {
  let target = document.getElementById("body");
  target.setAttribute("style", "background-image: linear-gradient(hsl(288, 55%, 38%), hsl(0, 11%, 9%));")
}

function func_cpp() {
  let target = document.getElementById("body");
  target.setAttribute("style", "background-image: linear-gradient(hsl(206, 100%, 31%), hsl(0, 11%, 9%));")
}

function func_background_off(){
  let target = document.getElementById("body");
  target.setAttribute("style", "background-image: linear-gradient(hsl(0, 4%, 18%), hsl(0, 11%, 9%));");
}