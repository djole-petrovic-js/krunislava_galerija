var contactModule=(function(){
  "use strict";
  var doc=document;
  var vote_btn=doc.getElementById('pollbtn');
  var vote_wreaper=doc.getElementById('poll');
  var vote_inputs=Array.from(vote_wreaper.getElementsByClassName('vote_c'));
  var target,last_selected_input;
  var checking=false;

  vote_btn.addEventListener('click',vote,false);
  vote_wreaper.addEventListener('click',highlightLabel,false);

  function highlightLabel(event) {
    target=event.target;
    if (checking && target.tagName==='LABEL') {
      last_selected_input.setAttribute('class','labelfont');
    }

    if (target.tagName==='LABEL') {
      target.previousElementSibling.checked=true;
      target.setAttribute('class','votechecked');
      checking=true;
      last_selected_input=target;
    }
  }

  function vote() {
    var voted;

    var cookie = document.cookie;

    if ( !cookie ) {

      vote_inputs.forEach(function(x){
        if (x.checked) voted = x.value;
      });

      document.cookie = "voted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    }

    vote_wreaper.innerHTML='Молимо ,сачекајте...'
    vote_wreaper.style.textAlign = "center";

    var xhr = new XMLHttpRequest();
    xhr.open('GET','poll/poll.php?vote='+voted,true);
    xhr.onreadystatechange=function() {
      if (xhr.readyState===4 && xhr.status===200) {
        var response=xhr.responseText;
        vote_wreaper.innerHTML=response;
      }
    }

    xhr.send();
  }

})();