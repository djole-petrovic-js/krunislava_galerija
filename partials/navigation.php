<?php
  $url=$_SERVER['PHP_SELF']; ;
  $index='class=';
  $galerija='class=';
  $biografija='class=';
  $kontakt='class=';
  switch ($url) {
    case '/index.php':
      $index.='selected';
      break;
    case '/galerija.php':
      $galerija.='selected';
      break;
    case '/biografija.php':
      $biografija.='selected';
      break;
    case '/kontakt.php':
      $kontakt.='selected';
      break;
  }
?>
<nav id="nav-header">
  <div id="nav-left">
    <h1><a href="index.php">Крунислава Бошковић</a></h1>
  </div>
  <div id="nav-right">
    <ul>
      <li><a href="index.php" title="Крунислава Бошковић Почетна" <?php if ($index != 'class=') echo $index; ?> >Почетна</a></li>
      <li><a href="galerija.php" title="Крунислава Бошковић Галерија" <?php if ($galerija != 'class=') echo $galerija; ?> >Галерија</a></li>
      <li><a href="biografija.php" title="Крунислава Бошковић Биографија" <?php if ($biografija != 'class=') echo $biografija; ?> >Биографија</a></li>
      <li><a href="kontakt.php" title="Крунислава Бошковић Контакт" <?php if ($kontakt != 'class=') echo $kontakt; ?> >Контакт</a></li>
    </ul>
  </div>
</nav>
