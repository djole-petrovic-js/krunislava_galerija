var imageHandler=(function(){
	"use strict";
	var doc=document;
	var exit_btn=doc.getElementById('image_wreaper_exit');
	var images=Array.from(doc.getElementsByClassName('gallery-thumb'));
	var images_datasets=images.map(function(x){
		return x.firstElementChild.dataset.gallery+'.jpg';
	});
	var numberOfImages=images.length;
	var current_image=0;
	var loc='gallery-images/Kruna_Boskovic_slika_';
	var loc2='gallery-thumbnails/Kruna_Boskovic_slika_';
	var wreaper=doc.getElementById('wreaper');
	var overlay=doc.getElementById('overlay');
	var image_wreaper=doc.getElementById('image_wreaper');
	var target,counter=0;
	var input_previous=doc.getElementById('input1');
	var input_next=doc.getElementById('input2');
	var main_image=doc.getElementById('main_image');
	wreaper.style.textAlign='center';
	//wreaper.style.paddingRight=2+'%';

	//preloading
	for (var i = 0 ; i < numberOfImages ; i++) {
		var temp_img1 = doc.createElement('img');
		var temp_img2 = doc.createElement('img');
		temp_img1.src=loc+(i+1)+'.jpg';
		temp_img1.alt='Slika'+(i+1);
		temp_img2.src=loc2+(i+1)+'.jpg';
		temp_img2.alt='Slika'+(i+1);
	}

	var repeat=setInterval(function(){
		images[counter].style.opacity=1;
		images[counter++].style.left=0+'px';
		if (counter===numberOfImages) { clearInterval(repeat); }
	},100);

	wreaper.addEventListener('click',toggleOverlay,false);
	overlay.addEventListener('click',toggleOverlay,false);
	input_previous.addEventListener('click',changeImage,false);
	input_next.addEventListener('click',changeImage,false);
	exit_btn.addEventListener('click',toggleOverlay,false);

	function toggleOverlay(event) {
		target=event.target;
		if (target.id==='overlay' || target.id==='image_wreaper_exit') {
			overlay.classList.toggle('hideShow');
			image_wreaper.classList.toggle('hideShow');
		
		} else if (target.hasAttribute('data-gallery') || target.className==='gallery-thumb' ) {
			current_image = target.hasAttribute('data-gallery') ? 
			+target.dataset.imgnumb : 
			+target.firstElementChild.dataset.imgnumb;
			main_image.src=loc+images_datasets[current_image];
			overlay.classList.toggle('hideShow');
			image_wreaper.classList.toggle('hideShow');
		}
	}

	function changeImage(event) {
		target=event.target;
		current_image = target.id==='input1' ?
		--current_image : ++current_image;
		if (current_image === -1 ) current_image = numberOfImages-1;
		if (current_image === numberOfImages ) current_image=0;
		main_image.src = loc+images_datasets[current_image];
	}

})();