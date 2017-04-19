function Slider(id, imgList) {

	var self = this;
	var iImgList = 0;
	this.delay = 3000;

	this.run = function() {
		initPages();
		initTimer();
	}

	function initPages() {
		var html = '';
		for (var i = 0; i < imgList.length; i++) {
			if (i === 0)
				html += '<li class="active" id="page-'+i+'"></li>';
			else
				html += '<li id="page-'+i+'"></li>';
		}
		$(id + ' .slider-page').html(html);
	}

	function initTimer() {
		setInterval(function() { 
			nextSlide();
		}, self.delay);
	}

	function nextSlide() {		
		$(id + ' img').animate({
			opacity: 0
		}, 500, function() {
			$(id + ' img').attr('src', imgList[iImgList % imgList.length]);
			$(id + ' img').animate({
				opacity: 1
			}, 500);
		});	

		iImgList++;
	}
}

var slider = new Slider('#store-shares', ['/img/slider/1.jpg', '/img/slider/2.jpg', '/img/slider/2.jpg']);
slider.run();