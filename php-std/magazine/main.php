<?php
include_once "tovak.php";
include_once "backet.php";

$smzShit = new Tovar("Shit","200 тыщ");
var_dump($smzShit);

$smzShit2 = new Tovar("Shitище","20 тыщ");
var_dump($smzShit2);

$korz = new Korzina();
$korz->addTovar($smzShit);
$korz->addTovar($smzShit2);
$korz->addTovar("конь");
var_dump($korz);

?>