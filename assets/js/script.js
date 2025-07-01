// header //

// mở/đóng menu ở màn hình moblie
document.getElementById("btn-menu")
    .addEventListener("click", function() 
    {
        var nav = document.getElementById("nav");
        if (nav.classList.contains("show"))
            nav.classList.remove("show");
        else
            nav.classList.add("show");
    });

