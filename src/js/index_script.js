function load_console () {
	$.ajax({
    	url: "http://52.37.98.127:3000/v1/5610545781?pin=5555",
    	type : "GET",
	    success : function(r) {
	      console.log(r);
	    }
	});
}

function load_page () {
	$('#sign-in').click(function(){
		console.log("test");
	    window.location.href='main.html';
	})
}
