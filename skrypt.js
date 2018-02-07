var images = [];
var ps = [];
var divs = [];
var urls = [];

function addImg(){
	var index = images.length;
	var place = document.getElementById('place');
	divs.push(document.createElement("div"));

	for (var i = 0; i < 3; i++) {	
		ps.push(document.createElement("A"));
		images.push(document.createElement("img"));
		images[images.length - 1].src = "http://source.unsplash.com/" + urls[images.length - 1].post_url.substring(28);
	    images[images.length - 1].style.width = '300px';
		divs[divs.length -1].appendChild(ps[ps.length - 1]);
		ps[ps.length - 1].appendChild(images[images.length - 1]);

	}

	place.appendChild(divs[divs.length - 1]);
}

function getData(){
	$.get( "https://picsum.photos/list", function( data ) {
		urls = data;
	})
	.done(function(){
		addImg();
	});

}