( function(doc){

  'use strict';

  var
    lastSelectedInput = null;
    voteBtn           = doc.getElementById('pollbtn'),
    votingWreaper     = doc.getElementById('poll'),
    voteInputs        = Array.from(votingWreaper.getElementsByClassName('vote_c')),
    checking          = false;

  voteBtn      .addEventListener('click',vote,false);
  votingWreaper.addEventListener('click',highlightLabel,false);

  function highlightLabel(event) {
    var target = event.target;

    if ( checking && target.tagName === 'LABEL' ) {
      lastSelectedInput.setAttribute('class','labelfont');
    }

    if ( target.tagName === 'LABEL' ) {
      target.previousElementSibling.checked = true;
      target.setAttribute('class','votechecked');
      checking = true;
      lastSelectedInput = target;
    }
  }

  function vote() {
    var userVote;

    if ( !document.cookie ) {
      voteInputs.forEach(function(x){
        if ( x.checked ) userVote = x.value;
      });

      document.cookie = "vote=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }

    votingWreaper.innerHTML = 'Молимо ,сачекајте...'
    votingWreaper.style.textAlign = "center";

    var xhr = new XMLHttpRequest();

    xhr.open('GET','poll/poll.php?vote=' + userVote,true);

    xhr.onreadystatechange = function() {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        votingWreaper.innerHTML=xhr.responseText;
      }
    }

    xhr.send();
  }

})(document);