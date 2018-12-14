<?php
class Tovar
{
public $name ;
public $count ;
    public function __construct($name, $prize)
    {
        $this->name = $name;
        $this->count = $prize;
    }
}
?>




<!--Описать (как минимум) классы корзина и товар.-->
<!--Задать методы для добавления и уделания товаров из корзины.-->
<!--Далее добавить класс Заказ для формирования корзины-->