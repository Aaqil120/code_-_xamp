$(document).ready(function(){
        $("#btn").click(function(){
        $.ajax({url: "data.txt", success: function(result){
        $("#test").html(result);
    }});
        $("btn").click(function(){
        $.ajax({url: "webpage_1.html", success: function(result){
        $("data").txt(result);
    }});
        })
    });
   });
   