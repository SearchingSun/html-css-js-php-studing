<!--Написать функцию, которая возвращает-->
<!--максимальный элемент массива. Использовать функции php запрещено-->
<?php
$arr = array(1,4,7,13,2,9);
$arrText = array("Cheburaska","ubil","i","siel","krokodila","Genu");
function pereborBig($arr){
    $i = null;
    foreach ($arr as $value){
        if ($i < $value){
            $i = $value;
        }
    }
    return $i;
}

function pereborBigText($arr){
    $i = null;
    foreach ($arr as $value){
        if ($i < strlen($value)){
            $i = strlen($value);
            $k = $value;
        }
    }
    return $k;
}
var_dump(pereborBig($arr));
var_dump(pereborBigText($arrText));
?>

<!--Написать функцию, которая возвращает-->
<!--минимальный элемент массива. Использовать функции php запрещено\-->

<?php
function pereborSmall($arr){
    $i = INF;
    foreach ($arr as $value){
        if ($i > $value){
            $i = $value;
        }
    }
    return $i;
}

function pereborSmallText($arr){
    $i = INF;
    foreach ($arr as $value){
        if ($i > strlen($value)){
            $i = strlen($value);
            $k = $value;
        }
    }
    return $k;
}
var_dump(pereborSmall($arr));
var_dump(pereborSmallText($arrText));
?>

<!--Вывести данные из многомерного массива в html, выполнить get запрос,-->
<!--в нем передать параметр, например, id-->
<!--вывести данные из многомерного массива по полученному параметру-->
<?php
$array = array(
    "klavisin"=>[
        "id" => 1,
        "count" => 100500
        ],
    "lavisin"=>[
        "id" => 2,
        "count" => 10050
    ],
    "avisin"=>[
        "id" => 3,
        "count" => 1005
    ]
    );
?>
<html>
    <body>
        <p>
            <?php
            var_dump($array);
            ?>
            <form action="hw1.php" method="GET">
                <input type="text" name="parametr" />
                <input type="submit" value="Погнали" />
            </form>
        </p>
    </body>
</html>

<?php
function perebor($array){
    $get = $_GET;
    foreach ($array as $key=>$value){
        if ($get["parametr"] == (string)$value["id"]){
            return "Ключ: " . $key . PHP_EOL . "Значение id = " . $value["id"] . PHP_EOL . "Стоимость = " . $value["count"];
        }else if ($get["parametr"] == (string)$value["count"]){
            return "Ключ: " . $key . PHP_EOL . "Значение id = " . $value["id"] . PHP_EOL . "Стоимость = " . $value["count"];
        }
    }
}
var_dump(perebor($array));
?>








