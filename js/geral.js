$(document).ready(function(){
	var xmlhttp = new XMLHttpRequest();
	var url = "products.json";

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var Objects = JSON.parse(this.responseText);
		    item = Objects[0].data.item;
		    Objects = Objects[0].data.recommendation;
		    makeCarrousel(Objects, item);
			criarTabs('controle-thumbs-home');
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
});



function criarTabs(elPai) {
	qtde = $('.'+ elPai +' > ul').length;
	$('.'+ elPai +' > ul:eq(0)').addClass('active');
	
	for(i = 0; i < qtde; i++) {
		$controle = $('.'+ elPai +' .controle');

		$controle.append("<button id='"+ i +"'>"+ (i + 1) +"</button>");
	}

	$('.'+ elPai +'').on('click', 'button', function(){
		id = $(this).attr('id');
		$('.'+ elPai +' > ul').removeClass('active');
		$('.'+ elPai +' > ul:eq('+ id +')').addClass('active');
	});
}

function makeCarrousel(Objects) {
	var text = ""
	text += "";
	text += "<ul class=\"thumbnails-home\">";
	for(i = 0; i < Objects.length; i++){
		var obj = Objects[i];
		text += "<li>\n";
		text += "<a rel=\"nofollow\" href=\"about:blank\"><img src=\"/" + obj["imageName"] + "\" />\n";
		text += "<div class=\"content\"><p>" + obj["name"] + "</p></a>";
		if(obj["oldPrice"] != null){
			text += "<p>De: <strong>" + obj["oldPrice"] + "</strong></p>";
		}
		text += "<p>Por: <strong>" + obj["price"] + "</strong></p>\n";
		for (x in obj["productInfo"]){
			text += "<p><span>" + obj["productInfo"][x] + "</span></p></div>\n";
		}
		text += "<button><a href=\"\">Adicionar ao carrinho <i class=\"material-icons\">add_shopping_cart</i></a></button>";
		text += "</li>";
		if( (i+1)%3==0 ){
			text += "</ul><ul class=\"thumbnails-home\">";
		}
	}
	text += "</ul>";
	text += "<div class=\"controle wrapper\">\n</div>";
	document.getElementById("carousel").innerHTML += text;
};


function makeCarrousel(Objects, item) {
	var obj = item;
	var text = "";
	var estatico = "<h2>Você visitou:</h2>\n<li>\n<a href=\"#\">\n<img src=\"/" + obj["imageName"] + "\" />\n";
	estatico += "<div class=\"content\"><p>" + obj["name"] + "</p></a>";
	if(obj["oldPrice"] != null){
		estatico += "<p>De: <strong>" + obj["oldPrice"] + "</strong></p>";
	} 
	estatico += "<p>Por: <strong>" + obj["price"] + "</strong></p>\n";
	for (x in obj["productInfo"]){
		estatico += "<p><span>" + obj["productInfo"][x] + "</span></p></div>\n";
	}
	estatico += "<button><a href=\"\">Adicionar ao carrinho <i class=\"material-icons\">add_shopping_cart</i></a></button>";
	estatico += "</li>";


	text += "<div class=\"thumbnails-home\">";
	text += estatico
	text += "\n</div>\n<h2>e talvez tenha interesse por:</h2><ul class=\"thumbnails-home\">";
	for(i = 0; i < Objects.length; i++){
		obj = Objects[i];
		text += "<li>\n";
		text += "<a rel=\"nofollow\" href=\"about:blank\"><img src=\"/" + obj["imageName"] + "\" />\n";
		text += "<div class=\"content\"><p>" + obj["name"] + "</p></a>";
		if(obj["oldPrice"] != null){
			text += "<p>De: <strong>" + obj["oldPrice"] + "</strong></p>";
		}
		text += "<p>Por: <strong>" + obj["price"] + "</strong></p>\n";
		for (x in obj["productInfo"]){
			text += "<p><span>" + obj["productInfo"][x] + "</span></p></div>\n";
		}
		text += "<button><a href=\"\">Adicionar ao carrinho <i class=\"material-icons\">add_shopping_cart</i></a></button>";
		text += "</li>";
		if( (i+1)%3==0 ){
			text += "</ul><ul class=\"thumbnails-home\">";
		}
	}
	text += "</ul>";
	text += "<div class=\"controle wrapper\">\n</div>";
	document.getElementById("carousel").innerHTML += text;
};