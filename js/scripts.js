console.log("hello designers")
function menuToggle() {
    const element = document.getElementById("myNavtoggle");

    if (element.className === "navtoggle") {
        element.classList.remove ("navtoggle");
        element.classList.add("navtoggle-responsive");

    } else{
        element.className = "navtoggle";
    }
}




