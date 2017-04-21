function Slider(id, sliderList) {

	var self = this;
	var iImgList = 0;
	var activePageCount = 0;
	var count = sliderList.length;
	
	this.delay = 3000;

	this.run = function() {
		initPages();
		initTimer();
	}


	function initPages() {
		var html = '';
		for (var i = 0; i < count; i++) {
			if (i === 0)
				html += '<li class="active" id="page-'+i+'" onclick="currentPage('+i+')"></li>';
			else
				html += '<li id="page-'+i+'" onclick="currentPage('+i+')"></li>';
		}
		$(id + ' .slider-page').html(html);
	}

	function initTimer() {
		setInterval(function() {
			nextSlide();
		}, self.delay);

	}

	function nextSlide() {	
		changeSlide(iImgList);
		iImgList++;		
	}

	function changeSlide(page) {
		$(id + ' img').animate({
			opacity: 0
		}, 500, function() {
			$(id + ' img').attr('src', sliderList[page % count].img);
			$(id + ' .slide-text h1').html(sliderList[page % count].h1);
			$(id + ' .slide-text p').html(sliderList[page % count].p);
			activePage(page);
			$(id + ' img').animate({
				opacity: 1
			}, 500);
		});	
	}

	this.currentPage = function(page) {
		iImgList = page;
		changeSlide(page);
	}
	
	function activePage(page) {
		$(id + ' .slider-page #page-' + activePageCount).removeClass();
		$(id + ' .slider-page #page-' + page % sliderList.length).addClass('active');
		activePageCount = page % sliderList.length;
	}


}

var sliderOBJ = [
{"img":'/img/slider/1.jpg',"h1":"Старт продаж iPhone 7 Plus 64GB", "p":"Познакомьтесь с iPhone — самым мощным персональным устройством в мире."},
{"img":'/img/slider/2.jpg',"h1":"Samsung S8", "p":"При покупке s8 второй в подарок."}]
var slider = new Slider('#store-shares', sliderOBJ);
slider.run();


function currentPage(id) {
	slider.currentPage(id);
}