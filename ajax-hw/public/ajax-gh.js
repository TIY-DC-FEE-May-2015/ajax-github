$(document).on('ready', function() {

//Profile

	var profileTempFunction = Handlebars.compile( $("#profileTemplate").html() )

	$.ajax({
	  url: "https://api.github.com/users/ghaea",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) {

	  	console.log(data)

	  	data.created_at = moment(data.created_at).format("MMM Do YY")

	  	$(".profile").append(profileTempFunction(data))
	  }
	})

//Repository

	var repoTempFunction = Handlebars.compile( $("#ghRepoTemplate").html() )

	$.ajax({
	  url: "https://api.github.com/users/ghaea/repos",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) { 

	  	_.each(data, function(repo) {

	  		repo.updated_at = moment(repo.updated_at, "YYYYMMDD").fromNow()
	  		
	  		var htmlString = repoTempFunction(repo)
	  		
	  		$(".gh-pages").append(htmlString)
	  	})
	  	
	  }
	})

// Hard mode

	var starTempFunction = Handlebars.compile( $("#profileTemplate").html() )

	$.ajax({ 
	  url: "https://api.github.com/users/ghaea/starred",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) { 
	  	console.log(data)
	  		
	  	$("#starred").text(data.length.toString())
  	
	  }
	})

	var orgTempFunction = Handlebars.compile( $("#profileTemplate").html() )

	$.ajax({ 
	  url: "https://api.github.com/users/ghaea/orgs",
	  method: "GET",
	  data: {
	    access_token: "3b2e77f921315bbd9d39a0ec8267ff75107c7aff"
	  },
	  success: function(data) { 
	  	console.log(data)

	  	_.each(data, function(org){
	  		var htmlString = orgTempFunction({
		  		org_url: "https://api.github.com/users/ghaea/orgs",
		  		avatar_url: "https://avatars.githubusercontent.com/u/12126092?v=3"
		  		})
	  		$(".orgAvatar").append(htmlString)

	  		})
	  	
		}
	  	
	})
})