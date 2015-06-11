$(document).on("ready", function(){
	

	var templateLeft = Handlebars.compile($("#left-side").html() )
	
	$.ajax({
	  url: "https://api.github.com/users/cdjones7071",
	  method: "GET",
	  data: {
	    access_token: "d28cc881585c57917e49be1bdc87af5a574e4d49"
	  },
	  success: function(data) {

	  	var htmlString = templateLeft(data)
	  	
	  	$("#left").append( htmlString )
	  }
      
	})

    var templateRight = Handlebars.compile( $("#right-side").html() )
   
   	$.ajax({
	  url: "https://api.github.com/users/cdjones7071/repos",
	  method: "GET",
	  data: {
	    access_token: "d28cc881585c57917e49be1bdc87af5a574e4d49"
	  },
	  success: function(data) { 
	  	console.log(data)
	  	_.each(data, function(repo){
	  		var htmlString = templateRight(repo)
		  	console.log(htmlString)

		  	$("#right").append( htmlString )
	  	})
	  	
	  } 
    
    })

})



