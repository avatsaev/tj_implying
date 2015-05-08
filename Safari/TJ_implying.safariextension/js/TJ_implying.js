$(document).ready(function(){

  $.each($(".commentWrapper .b-comment__text"), function(i,e){

    $(e).find("p").append("<br>").html(function(j, oldHTML){
      return oldHTML.replace(/(^&gt;.*?)\<br\>/gm, "<span style='color: #789922 !important'>$1</span><br>");
    })

  });

});
