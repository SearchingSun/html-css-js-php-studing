<?php
include_once "tovak.php";
include_once "backet.php";
include_once "zakaz.php";

$smzShit = new Tovar("Shit",200000);


$smzShit2 = new Tovar("Shitище",20500);


$korz = new Korzina();


$korz->addTovar($smzShit);
$korz->addTovar($smzShit2);
//$korz->addTovar("Конь");
//$korz->addTovar("Пальто");



//$korz->removeTovar("Конь");
//$korz->removeTovar($smzShit2);
//$korz->removeTovar("Shit");

$zakaz = new Zakaz();
$zakaz->formirovat($korz);


?>