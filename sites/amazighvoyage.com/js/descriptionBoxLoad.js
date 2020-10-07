$(document).ready(function(){
	$(".infoRaid").load("js/todra.html");
    $(".imageRaid h1").text("Gorge du Todra");
    $(".imageRaid #img1").css("background", "url(images/circuits/todra.jpg) bottom left");
    $(".imageRaid #img3").css("background", "url(images/circuits/todraCarte.jpg)");
	
	$("#btnRaid").click(function(){
		$(".infoRaid").load("js/todra.html");
		$( "#btnPdd, #btnPp, #btnTas").removeClass("active");
		$( "#btnTodra" ).addClass("active");
		$(".imageRaid #img1").css("background", "url(images/circuits/todra.jpg) bottom left");
        $(".imageRaid #img3").css("background", "url(images/circuits/todraCarte.jpg)");
		$("#bottomNavTrekk").css("display", "none");
		$("#bottomNavRaid").css("display", "inline"); 
		$( "#btnTrekk" ).removeClass("active");
        $(".imageRaid h1").text("Gorge du Todra");
		$( "#btnRaid" ).addClass("active");
		
		});
	
	$("#btnTrekk").click(function(){
		$(".infoRaid").load("js/trekk.html");
        $( "#btnOukai, #btnAa, #btnDec").removeClass("active");
		$( "#btnAtlas" ).addClass("active");
        $(".imageRaid h1").text("L'Atlas");
        $(".imageRaid #img1").css("background", "url(images/circuits/atlas.jpg) bottom left"); 
        $(".imageRaid #img3").css("background", "url(images/circuits/atlasCarte.jpg)"); 
		$("#bottomNavRaid").css("display", "none");
		$("#bottomNavTrekk").css("display", "inline"); 
		$( "#btnRaid" ).removeClass("active");
		$( "#btnTrekk" ).addClass("active");
        $(".imageRaid h1").text("L'Atlas");
		});
	
	//*      ----------------------            sous menu raids           -------------------------------   *//
	
	$("#btnTodra").click(function(){
		$(".infoRaid").load("js/todra.html");
		$( "#btnPdd, #btnPp, #btnTas").removeClass("active");
		$( "#btnTodra" ).addClass("active");
		$(".imageRaid h1").text("Gorge du Todra");
		$(".imageRaid #img1").css("background", "url(images/circuits/todra.jpg) bottom left");
		});
	
	$("#btnPdd").click(function(){
		$(".infoRaid").load("js/pdd.html");
		$( "#btnTodra, #btnPp, #btnTas" ).removeClass("active");
		$( "#btnPdd" ).addClass("active");
        $(".imageRaid h1").text("Portes du désert");
		$(".imageRaid #img1").css("background", "url(images/circuits/raidPorteDuDesert.jpg) bottom left");
		});
	
	$("#btnPp").click(function(){
		$(".infoRaid").load("js/pp.html");
		$( "#btnTodra, #btnPdd, #btnTas" ).removeClass("active");
		$( "#btnPp" ).addClass("active");
        $(".imageRaid h1").text("Petit prince");
		$(".imageRaid #img1").css("background", "url(images/circuits/dakhla.jpg) bottom left");
		});
	
	$("#btnTas").click(function(){
		$(".infoRaid").load("js/tas.html");
		$( "#btnTodra, #btnPp, #btnPdd" ).removeClass("active");
		$( "#btnTas" ).addClass("active");
        $(".imageRaid h1").text("Thé au Sahara");
        $(".imageRaid #img1").css("background", "url(images/circuits/sahara.jpg) bottom left"); 
		});
	
	//*      ----------------------            sous menu treks           -------------------------------   *//
	
	$("#btnAtlas").click(function(){
		$(".infoRaid").load("js/trekks.html");
		$( "#btnOukai, #btnAa, #btnDec").removeClass("active");
		$( "#btnAtlas" ).addClass("active");
        $(".imageRaid h1").text("L'Atlas");
        $(".imageRaid #img1").css("background", "url(images/circuits/atlas.jpg) bottom left"); 
		});
	
	$("#btnOukai").click(function(){
		$(".infoRaid").load("js/pdd.html");
		$( "#btnAtlas, #btnAa, #btnDec" ).removeClass("active");
		$( "#btnOukai" ).addClass("active");
        $(".imageRaid h1").text("Oukaimeden");
        $(".imageRaid #img1").css("background", "url(images/circuits/oukaimeden.jpg) bottom left"); 
		});
	
	$("#btnAa").click(function(){
		$(".infoRaid").load("js/pp.html");
		$( "#btnAtlas, #btnOukai, #btnDec" ).removeClass("active");
		$( "#btnAa" ).addClass("active");
        $(".imageRaid h1").text("L'Anti Atlas");
        $(".imageRaid #img1").css("background", "url(images/circuits/antiAtlas.jpg) bottom left"); 
		});
	
	$("#btnDec").click(function(){
		$(".infoRaid").load("js/tas.html");
		$( "#btnAtlas, #btnOukai, #btnAa" ).removeClass("active");
		$( "#btnDec" ).addClass("active");
        $(".imageRaid h1").text("Découverte");
        $(".imageRaid #img1").css("background", "url(images/circuits/decouverte.jpg) bottom left"); 
		});
});