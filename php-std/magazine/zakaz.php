<?php
class Zakaz extends Korzina
{
    function formirovat($korz){
        $this->tovari = $korz->tovari;
        $form = $this->tovari;

//        foreach ($form as $key=>$value1){
//            $z = null;
//        foreach ($value1 as $key2 => $value2){
//            if($key2 == 'name'){
//                $z .=$value2;
//            }
//            var_dump($z);
//        }
//        }
        $x = null;
        $y = null;
        $z = count($form);
        foreach ($form as $value){
            $x .= $value->name . ", ";
            $y += $value->count;
        }
        echo "Поздравляю, ваш заказ сформирован и отправлен в унитаз. Вы выбрали для покупки следующие товары : $x на
         общую стоимость $y рублей. В подарок от фирмы флакончик цианида. Флакончик цианида - нет таких проблем, которые нельзя решить!";

    }
}



?>                                     