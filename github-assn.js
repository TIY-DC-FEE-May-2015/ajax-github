$(document).on("ready", function(){

  var leftTemplate = Handlebars.compile($("#repoTemplate").html() );

    $.ajax({
        url:  "https://api.github.com/users/tajlo",
        method: "GET",
        data:{
        access_token:"9b9b4817119099b5e467e1e8fcdcde0ffab438c3"
      	},
      	success: function(data) { 
            console.log(data)
        		var htmlString = leftTemplate(data)
            $("#left-side").append(htmlString)
  	     }

  })

   var rightTemplate = Handlebars.compile($("#rigSide").html() );
    $.ajax({
      url:  "https://api.github.com/users/tajlo/repos",
      method: "GET",
      data:{
      access_token:"9b9b4817119099b5e467e1e8fcdcde0ffab438c3"
      },
      success: function(data){
        console.log(data)
        _.each(data, function(repos){
        var htmlRight = rightTemplate(repos)
        $("#right-side").append(htmlRight)
      })
    }
  })
})


