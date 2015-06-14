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
            data.created_at = moment(data.created_at).format("MMM Do YYYY")
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
          repos.created_at = moment(repos.created_at).startOf('day').fromNow()
        var htmlRight = rightTemplate(repos)
        $("#right-side").append(htmlRight)
      })
    }
  })


 $.ajax({ 
   url: "https://api.github.com/users/tajlo/starred",
   method: "GET",
   data: {
     access_token: "9b9b4817119099b5e467e1e8fcdcde0ffab438c3"
   },
   success: function(data) { 
     console.log(data)
       
     $("#starred").text(data.length)
   
   }
 })

var orgTemp = Handlebars.compile( $("#Organizations").html() )
   
 $.ajax({ 
   url: "https://api.github.com/users/tajlo/orgs",
   method: "GET",
   data: {
    access_token: "9b9b4817119099b5e467e1e8fcdcde0ffab438c3"
   },
   success: function(data) { 
     console.log(data)

     _.each(data, function(org){
       var htmlString = orgTemp({
         org_url: "https://api.github.com/users/tajlo/orgs",
         avatar_url: "https://avatars.githubusercontent.com/u/12126092?v=3"
         })
       $("#left-side").append(htmlString)

       })
     
   }
     
 })

})


