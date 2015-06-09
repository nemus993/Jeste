// JavaScript Document
$(document).ready(function(e) {

$.ajax({
		url: "json/users.json",
		dataType: "json",
		async: false,
		success: function(data) {
			for(var i=0; i<data.users.length; i++) {
				var newDiv = $(document.createElement("div"));
                newDiv.addClass("image");
				newDiv.css("background-image", "url(images/user.png)");
				
				var newfirstNameSpan = $(document.createElement("span"));
				var newlastNameSpan = $(document.createElement("span"));
				
				newfirstNameSpan.text(data.users[i].firstname);
				newlastNameSpan.text(data.users[i].lastname);
				newfirstNameSpan.addClass("name");
				newlastNameSpan.addClass("namel");
				newDiv.append(newfirstNameSpan);
				newDiv.append(newlastNameSpan);
				
				
				$("#sidebar_container").append(newDiv);
			}
		},
		error: function(xhr, ajaxOptions, error) {
			alert(error);
		}
		
	});    
	$("#search-form").submit(function(e) {
        e.preventDefault();
		
		$("#sidebar_container").empty();
		
        var searchTerm = $("#searchInput").val();
		
        if(searchTerm != "") {
            $.ajax({
                url: "json/users.json",
                dataType: "json",
                async: false,
                success: function(data) {
					
                    for(var i=0; i<data.users.length; i++) {
                       
                        if(data.users[i].firstname.toLowerCase().indexOf(searchTerm) >= 0) {
                            var newDiv = $(document.createElement("div"));
                            newDiv.addClass("image");
							newDiv.css("background-image", "url(images/user.jpg)");
				
							var newfirstNameSpan = $(document.createElement("span"));
							var newlastNameSpan = $(document.createElement("span"));
				
							newfirstNameSpan.text(data.users[i].firstname);
							newlastNameSpan.text(data.users[i].lastname);
							newfirstNameSpan.addClass("name");
							newlastNameSpan.addClass("namel");
							newDiv.append(newfirstNameSpan);
							newDiv.append(newlastNameSpan);
				
							$("#sidebar_container").append(newDiv);
                       	 }
                    }
					
					if($("#sidebar_container").html() == "") {
		
						alert("Trazeni korisnik ne postoji!");
	
					}
					
	              $("#search-form").trigger('reset');
                },
                error: function(xhr, ajaxOptions, error) {
                    alert(error);
                }
            });    
        } else{
			alert("Trazeni korisnik ne postoji!");	
		}
    });
	
	
	
	setTime();
	setInterval(setTime, 1000);	
	
	function setTime() {
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear();
	
		$("#clockDiv").text(hours + ":" + minutes + "." + seconds);
		$("#dateDiv").text(day + "." + month + "." + year + ".")
	}
});