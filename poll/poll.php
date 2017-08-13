<?php
  header('Content-Type: application/text');
  $vote=$_GET['vote'];
  $file='poll.txt';
  $fileHandler=fopen($file,"r");
  $votes=fgets($fileHandler);
  $results=explode("||", $votes);
  $a=$results[0];
  $b=$results[1];
  $c=$results[2];
  $d=$results[3];
  
  switch($vote) {
    case 'a': $a++;break;
    case 'b': $b++;break;
    case 'c' : $c++;break;
    case 'd' : $d++;break;
  }

  fclose($fileHandler);
  $fileHandler=fopen($file,"w");
  $final=$a.'||'.$b.'||'.$c.'||'.$d;
  fwrite($fileHandler, $final);
  fclose($fileHandler);

  $aPercent=round($a/($a+$b+$c+$d)*100);
  $bPercent=round($b/($a+$b+$c+$d)*100);
  $cPercent=round($c/($a+$b+$c+$d)*100);
  $dPercent=round($d/($a+$b+$c+$d)*100);
  $ukupno=$a+$b+$c+$d;

  $data='<h3>Резултати!</h3><h4>Укупно : '.$ukupno.'</h4>
    Веома ми се свиђа : '.$a.'<br>
    <div class="polldivs"><div class="poll_r" style="width:'.$aPercent.'%;background:green"></div>'.$aPercent.'%</div><br>
    Треба мало поправити : '.$b.'<br>
    <div class="polldivs"><div class="poll_r" style="width:'.$bPercent.'%;background:orange"></div>'.$bPercent.'%</div><br>
    Може много боље : '.$c.'<br>
    <div class="polldivs"><div class="poll_r" style="width:'.$cPercent.'%;background:grey"></div>'.$cPercent.'%</div><br>
    Не свиђа ми се : '.$d.'<br>
    <div class="polldivs"><div class="poll_r" style="width:'.$dPercent.'%;background:red"></div>'.$dPercent.'%</div><br>'
    ;

  echo $data;

?>