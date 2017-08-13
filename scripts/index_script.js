( function(doc){
  
  'use strict';
  
  var 
    w1 = doc.getElementById('wreaper-left'),
    w2 = doc.getElementById('wreaper-right');

  setTimeout(function(){
    w1.style.opacity=1;
    w2.style.opacity=1;
  },10);
})(document);