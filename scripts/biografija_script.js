( function(doc){

  'use strict';

  var 
  	slice = [].prototype.slice;

  var 
  	parags_wreaper = doc.getElementById('biography_left'),
    parags 				 = slice.call(parags_wreaper.getElementsByTagName('p')),
    counter				 = 0;

  var repeat = setInterval(function(){
    parags[counter].style.opacity = 1;
    parags[counter++].style.top = 0 + 'px';

    if (counter === parags.length) {
    	clearInterval(repeat);
    }
  },300);

})(document);    