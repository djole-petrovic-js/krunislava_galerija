<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="sr">
	<head>
		<title>Крунислава Бошковић | Контакт</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="shortcut icon" href="images/favicon.ico" />
		<meta charset="utf-8"/>
		<meta name="copyright" content="Krunislava Boskovic @2016" />  
		<meta name="author" content="Djordje Petrovic"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<?php include_once 'partials/navigation.php' ?>


		<div id="wreaper">
		<div id="div_heading">
			<h2>Контакт</h2>
		</div>
		<div id="contact">
			<p>Можете нас контактирати на следеће бројеве телефона :</p>
			<br/>
			<span>010 / 346 - 413</span><br/><br/>
			<span>063 / 103 - 7 - 403</span><br/><br/>
			<br/>
			<p>Можете нас контактирати и преко електронске поште : </p>
			<br/>
			<span>djordje.petrovic.6.15@ict.edu.rs</span> 
		</div>
		<div id="poll">
			<h3>Како вам се допада галерија?</h3>
			<br/><br/>
			<input type="radio" name="radio1" value="a" class="vote_c"><label class="labelfont" >1 : Веома ми се свиђа</label><br/><br/>
			<input type="radio" name="radio1" value="b" class="vote_c"><label class="labelfont" >2 : Треба мало поправити</label><br/><br/>
			<input type="radio" name="radio1" value="c" class="vote_c"><label class="labelfont" >3 : Може много боље</label><br/><br/>
			<input type="radio" name="radio1" value="d" class="vote_c"><label class="labelfont" >4 : Не свиђа ми се</label><br/><br/>
			<input type="button" value="Гласај!" id="pollbtn">
		</div>
		<div class="clearfix"></div>

		</div>
		<?php include_once "partials/footer.php" ?>

	</body>
	<script src="scripts/kontakt_script.js"></script>
</html>