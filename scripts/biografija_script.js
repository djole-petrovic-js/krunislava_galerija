var bioModule=(function(){
  "use strict";
  var parags_wreaper=document.getElementById('biography_left')
  var parags=Array.from(parags_wreaper.getElementsByTagName('p'));
  var counter=0;
  var repeat=setInterval(function(){
    parags[counter].style.opacity=1;
    parags[counter++].style.top=0+'px';
    if (counter===parags.length) clearInterval(repeat);
  },300);

})();


    