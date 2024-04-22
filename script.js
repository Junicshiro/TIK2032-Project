function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementsByClassName("content")[0];
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}

function mouseover(x) {
    x.style.background = "yellow";
  }

function mouseout(x) {
    x.style.background = "white";
  }