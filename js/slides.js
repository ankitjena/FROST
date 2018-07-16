window.addEvent('domready', function(){
	    var data = {
	      '1.jpg': { caption: '' }, 
		  '2.jpg': { caption: '' },
		  '3.jpg': { caption: '' },
		  '4.jpg': { caption: '' },
		  '5.jpg': { caption: '' }
	    };
	    var myShow = new Slideshow('show', data, {controller: true, height: 262, hu: 'images/slideshow', thumbnails: true, width: 982});
	  });