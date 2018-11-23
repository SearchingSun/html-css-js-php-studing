<!--1)6-7 функций:-->
<!--sort — Сортирует массив-->
<!--array_key_exists — Проверяет, присутствует ли в массиве указанный ключ или индекс-->
<!--array_count_values — Подсчитывает количество всех значений массива-->
<!--array_fill_keys — Создает массив и заполняет его значениями с определенными ключами-->
<!--array_fill — Заполняет массив значениями-->
<!--array_multisort — Сортирует несколько массивов или многомерные массивы-->
<!--array_pad — Дополнить массив определенным значением до указанной длины-->
<!--array_slice — Выбирает срез массива-->
<!--array_walk — Применяет заданную пользователем функцию к каждому элементу массива-->

<!--2)Дан массив [3.1.6.0.4.5] с помощью foreach найти сумму-->
<!--квадратов элементов этого массива-->
<?php
echo 'Задание № 2<br>';
$arr = [3, 1, 6, 0, 4, 5];
$summ = 0;
foreach ($arr as $value){
    $value = $value*$value;
        $summ += $value;
}
echo "<p> Сумма квадратов элементов массива = $summ</p><br>";
?>
<!--3)нарисовать треугольник, или ромб из символов *-->
<!--Высота = 15-->
<?php echo 'Задание № 3 <br>';
$prob = "&nbsp&nbsp";
$tochka = '*';
$centr = 15;
for ($i = 0; $i<15; $i++){
    $storona1 = $centr - $i;
    $storona2 = $centr + $i;
    $string2 = "";
    for ($k = 1; $k < 30; $k++){
    	if ($k === $storona1){
    		$string2 .= $tochka;
    	}else if ($k === $storona2 ){
    		$string2 .= $tochka;
    	}else if ($i === 14){
    		$string2 .= $tochka;
    	}else {
    		$string2 .= $prob;
    	}
    }
echo "$string2 <br>" ;
}
?>
<!--4)Создать массив из дней недели. С помощью цикла foreach вывести все дни недели, 
а текущий день вывести жирным.-->
<!--Текущий день можно получить с помощью date.-->
<!--Названия выводить по русски-->
<?php echo 'Задание № 4<br>';
$nedelia = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
$date = date("N");
$i=0;
foreach ($nedelia as $val){
	$i+=1;
	if ($i == $date){
		echo "<p><b> $val </b> <br></p>";
	}else{
		echo "<p> $val <br></p>";
	}
}
?>

<!--5)отсортировать массив по 'price'-->
<?php echo 'Задание № 4<br>';
$arrr = [
'1'=> [
'price' => 10,
'count' => 2
],
'2'=> [
'price' => 5,
'count' => 5
],
'3'=> [
'price' => 8,
'count' => 5
],
'4'=> [
'price' => 12,
'count' => 4
],
'5'=> [
'price' => 8,
'count' => 4
],
];
function price_sort($x, $y){
    return ($x['price'] > $y['price']);
}
uasort($arrr, 'price_sort');
echo '<pre>' . print_r($arrr, 1) . '</pre>' ;

$data_price=array();
foreach($arrr as $key=>$arr){
    $data_price[$key]=$arr['price'];
}

array_multisort($data_price, SORT_NUMERIC, $arrr);
var_export('<pre>' . print_r($arrr, 1) . '</pre>');
?>
