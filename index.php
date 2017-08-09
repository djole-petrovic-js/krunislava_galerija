<?php
	$dir='visit_counter/visit_counter.txt';
	$dirHandler=fopen($dir, 'r');
	$visitC=fgets($dirHandler);
	fclose($dirHandler);
	$visitC++;
	$dirHandler=fopen($dir, 'w');
	fwrite($dirHandler, $visitC);
	fclose($dirHandler);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="sr">
	<head>
		<title>Крунислава Бошковић | Почетна</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="shortcut icon" href="images/favicon.ico" />
		<meta charset="utf-8"/>
		<meta name="copyright" content="Krunislava Boskovic @2016" />  
		<meta name="author" content="Djordje Petrovic"/>
		<meta name="description" content="Opis"/>
		<meta name="keywords" content="Крунислава,Галерија,Бошковић,Пирот" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<?php include_once 'partials/navigation.php' ?>

		<div id="wreaper">

			<div id="wreaper-left">
				<div class="left-1">
					<img src="gallery-images/Kruna_Boskovic_slika_1.jpg" alt="Kruna Boskovic Pocetna slika 1">
				</div>
				<p id="parag1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				</p>
				<div class="clearfix" ></div>
			</div>

			<div id="wreaper-right">
				<div class="left-1">
					<img src="gallery-images/Kruna_Boskovic_slika_8.jpg" alt="Kruna Boskovic Pocetna slika 2">
				</div>
				<p id="parag2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
				</p>
				<div class="clearfix" ></div>
			</div>
			<div class="clearfix"></div>
		</div>

		<?php include_once "partials/footer.php" ?>

	</body>
	<script src="scripts/index_script.js"></script>
</html>