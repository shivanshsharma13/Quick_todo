$("li").on("click", function(){
    console.log($(this).css("color"));
        if ($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "None"
        });
    }
    else{
    $(this).css({
        color: "Grey",
        textDecoration: "Line-through"
    });
}
});

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); //stop bubbling
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todotext =  $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todotext + "</li>")
        
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});