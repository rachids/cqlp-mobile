<?php

$array = array(
	array(
		'choix1'	=>'Google',
		'url1'	=>'http://www.google.fr'),
	array(
		'choix1'	=>'Facebook',
		'url1'	=>'http://www.facebook.com'),
	array(
		'choix1'	=>'Reddit',
		'url1'	=>'http://www.reddit.com'),
	array(
		'choix1'	=>'Yahoo',
		'url1'	=>'http://www.yahoo.fr')
	);


$random = $array[array_rand($array)];

echo json_encode($random);