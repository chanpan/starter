$('a#nav').click(function () {
    let url = $(this).attr('data-url');
    route(url);
});
route = (url)=>{
    $.ajax({
       url:url,
       success:function(res){
           $("#root").html(res);
       }
   });
}

route("./views/home.html");