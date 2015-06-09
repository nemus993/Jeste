$(document).ready(function(){

    var users = new Array("Nemanja:12345", "Petar:54321", "Dragan:56789");

    
    $("#Login").submit(function(e) {
			//pokupimo vernosti unete u username i password polja
			var user = $("#Login input[username]").val();
			var pass = $("#Login input[password]").val();
    
            for(i=0; i<users.length; i++) {
				var element = users[i];
				var elementSplit = element.split(':');

				var splitUser = elementSplit[0];

				var splitPass = elementSplit[1];
				
				if(splitUser == user && splitPass == pass) {
					window.location.href="index.html";
				}
            }
        
            
            alert('Wrong input!');
			e.preventDefault();
            
            
    });

        
});