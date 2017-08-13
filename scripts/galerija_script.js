(function(doc){

  'use strict';

  var
    exitBtn  = _id('image_wreaper_exit'),
    images   = Array.from(doc.getElementsByClassName('gallery-thumb'));

  var images_datasets = images.map(function(x){
    return x.firstElementChild.dataset.gallery + '.jpg';
  });

  var
    wreaper        = _id('wreaper'),
    overlay        = _id('overlay'),
    image_wreaper  = _id('image_wreaper'),
    input_previous = _id('input1'),
    input_next     = _id('input2'),
    main_image     = _id('main_image');

  var
    numberOfImages = images.length,
    currentImage   = 0,
    counter        = 0,
    loc            = 'gallery-images/Kruna_Boskovic_slika_',
    loc2           = 'gallery-thumbnails/Kruna_Boskovic_slika_',
    wreaper.style.textAlign = 'center';
  //wreaper.style.paddingRight=2+'%';

  //preloading
  for (var i = 0 ; i < numberOfImages ; i++) {
    var 
      tmpImageFull  = doc.createElement('img'),
      tmpImageThumb = doc.createElement('img');

    tmpImageFull.src  = loc + (i + 1) + '.jpg';
    tmpImageFull.alt  = 'Slika' + (i + 1);
    tmpImageThumb.src = loc2 + (i + 1) + '.jpg';
    tmpImageThumb.alt = 'Slika' + (i + 1);
  }

  var slideImages = setInterval(function(){
    images[counter].style.opacity = 1;
    images[counter++].style.left = 0 + 'px';

    if ( counter === numberOfImages ) {
      clearInterval(slideImages);
    }
  },100);

  wreaper       .addEventListener('click',toggleOverlay,false);
  overlay       .addEventListener('click',toggleOverlay,false);
  input_previous.addEventListener('click',changeImage,false);
  input_next    .addEventListener('click',changeImage,false);
  exitBtn       .addEventListener('click',toggleOverlay,false);

  function toggleOverlay(event) {
    var target = event.target;

    if ( target.id === 'overlay' || target.id === 'image_wreaper_exit' ) {
      overlay.classList.toggle('hideShow');
      image_wreaper.classList.toggle('hideShow');
    
    } else if ( target.hasAttribute('data-gallery') || target.className === 'gallery-thumb' ) {
      currentImage = target.hasAttribute('data-gallery')
        ? +target.dataset.imgnumb
        : +target.firstElementChild.dataset.imgnumb;

      main_image.src = loc + images_datasets[currentImage]; 
      overlay.classList.toggle('hideShow');
      image_wreaper.classList.toggle('hideShow');
    }
  }

  function changeImage(event) {
    currentImage =  event.target.id === 'input1'
      ? --currentImage
      : ++currentImage;
 
    if ( currentImage = == -1 ) currentImage =  numberOfImages - 1;
    if ( currentImage === numberOfImages ) currentImage = 0;

    main_image.src = loc + images_datasets[currentImage]; 
  }

  function _id(id) {
    return doc.getElementById(id);
  }

})(document);