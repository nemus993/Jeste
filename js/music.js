$(document).ready(function(e) {
	
	$.ajax({
		url: "json/music.json",
		dataType: "json",
		async: false,
		success: function(data) {
			for(var i=0; i<data.songs.length; i++) {
				var newLiArtist = $(document.createElement("li"));
				
				var newArtistSpan = $(document.createElement("span"));
				
				newArtistSpan.text(data.songs[i].artist);
				newArtistSpan.addClass("artist");
				newLiArtist.append(newArtistSpan);
                
                $("#artistPlaylist").append(newLiArtist);
				
                var newLiSong = $(document.createElement("li"));
				var newSongSpan = $(document.createElement("span"));
				
				newSongSpan.addClass("song");
				newSongSpan.text(data.songs[i].title);
				newLiSong.data("songURL", data.songs[i].file);
				newLiSong.append(newSongSpan);
				
				$("#songPlaylist").append(newLiSong);
			}
		},
		error: function(xhr, ajaxOptions, error) {
			alert(error);
		}
	});
	
	$("#artistPlaylist").on("click", "li", function() {
		
		var artist = $(this).text();
		$("#songPlaylist li").remove();
		
		$.ajax({
			url: "json/music.json",
			dataType: "json",
			async: false,
			success: function(data) {
				for(var i=0; i<data.songs.length; i++) {
					if(data.songs[i].artist == artist) {
						var newLi = $(document.createElement("li"));
						
						var newArtistSpan = $(document.createElement("span"));
				
						newArtistSpan.text(data.songs[i].artist);
						newArtistSpan.addClass("artist");
						newLi.append(newArtistSpan);
						
						var newSongSpan = $(document.createElement("span"));
						
						newSongSpan.addClass("song");
						newSongSpan.text(data.songs[i].title);
						newLi.data("songURL", data.songs[i].file);
						newLi.append(newSongSpan);
						$("#songPlaylist").append(newLi);
					}
				}
			},
			error: function(xhr, ajaxOptions, error) {
				alert(error);
			}
		});
    });
	
	$("#songPlaylist").on("click", "li", function() {
		
		$("#nowPlaying").fadeIn("fast");
		
		var artist = $(this).find("span.artist").text();
		var title = $(this).find("span.song").text();
		var file = $(this).data("songURL");
		
		$("#nowPlaying .artist").text(artist);
		$("#nowPlaying .song").text(title);
		$("#nowPlaying audio").attr("src", file);
		$("#nowPlaying audio").trigger("play");
	});
	
	

});