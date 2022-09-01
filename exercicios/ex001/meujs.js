$(function(){
        $("p").on("click", function(){
            $(this).css({
                color: "darkblue",
                "font-size": "20pt",
                "font-weight": "bold"
            });
        });
});

 function mudacor(color){
    document.getElementsByTagName("BODY") [0].style.backgroundColor = color;

}
