<?php
	$dir='./gallery-thumbnails/';
	$dirHandler=opendir($dir);
	$i=0;
	$j=0;
	$data='';
	while ($file = readdir($dirHandler)) {
		if (!is_dir($file)) {
			$src=$dir.$file;
			$imgNumb = filter_var($file, FILTER_SANITIZE_NUMBER_INT);
			$data.='<div class="gallery-thumb"><img src='.$src.' 
			alt="Krunislava Boskovic slika '.++$i.'" data-gallery="'.$imgNumb.'" 
			data-imgnumb="'.$j++.'" class="gallery_images" /></div>';
		}
	}

	closedir($dirHandler);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="sr">
	<head>
		<title>Крунислава Бошковић | Галерија</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="shortcut icon" href="images/favicon.ico" />
		<meta charset="utf-8"/>
		<meta name="copyright" content="Krunislava Boskovic @2016" />  
		<meta name="author" content="Djordje Petrovic"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<?php include_once 'partials/navigation.php' ?>

		<div id="overlay" class="hideShow">
			
		</div>
		<div id="image_wreaper" class="hideShow">
			<div id="image_wreaper_left">
				<input type="button" value="" id="input1" />
			</div>
			<div id="image_wreaper_center">
				<div id="image_wreaper_exit">
					
				</div>
				<img src="" id="main_image" alt="Krunislava Boskovic Main Image">
			</div>
			<div id="image_wreaper_right">
				<input type="button" value="" id="input2" />
			</div>
		</div>
		

		<div id="wreaper">
			<div id="div_heading">
				<h2>Галерија</h2>
			</div>
			<?php echo $data; ?>
			<div class="clearfix"></div>
			
		</div>

		<?php include_once "partials/footer.php" ?>
		
	</body>
	<script src="scripts/galerija_script.js"></script>
</html>