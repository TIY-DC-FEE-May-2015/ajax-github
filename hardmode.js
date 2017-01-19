
    var rigTemp = function(data){

      var arrayRepo = ??
      var rightTemplate = Handlebars.compile ($("rigSide").html() );
      

      $.ajax({
        url:  repos.url,
        method: "GET",
        data:{
        access_token: access
        },
        success: function(data) { 
             _.each(data, function(repos){
              name: repos.name,
              language: repos.language,
              stars: repos.stargazers_count,
              forks: repos.forks,
              update: repos.updated_at
          })
          var htmlString = rightTemplate(repos)
          $("#right-side").append(htmlString)
        }
})

}