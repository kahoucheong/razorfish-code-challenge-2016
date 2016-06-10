$(document).ready(function(){
    $(".btn").click(function(){
        if ($(this).hasClass("myprofile")){
            $(".edit").removeClass("edit-click")
            $(".dropdown-menu").toggle();
            $(this).addClass("myprofile-click");
        } else if($(this).hasClass("edit")){
            $(".myprofile").removeClass("myprofile-click");
            $(this).addClass("edit-click");
        };
    });
});