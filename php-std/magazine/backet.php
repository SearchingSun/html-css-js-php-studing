<?php
class Korzina
{
    public $tovari = array();

    public function addTovar($tovar){
    array_push($this->tovari, $tovar);
    }
    public function removeTovar($tovar){
        $thp = array_search($tovar, $this->tovari);
        array_splice($this->tovari, $thp, 1);
    }


}







?>



<!--Описать (как минимум) классы корзина и товар.-->
<!--Задать методы для добавления и уделания товаров из корзины.-->
<!--Далее добавить класс Заказ для формирования корзины-->