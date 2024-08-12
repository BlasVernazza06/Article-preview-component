document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("button_share")
    var content = document.getElementById("redes")

    button.addEventListener('click', function(){
        if(content.style.display === "none"){
            content.style.display = "flex";
        } else {
            content.style.display = "none";
        }
    });

})

