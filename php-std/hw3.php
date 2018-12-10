<?php
//Задача 1
// В переменную $dir внесите путь для удаляемых файлоф. Безошибочно работает с папками и файлами .txt . Остальное не тестил.
$dir = 'D:\ItmoStudy\html-css-js-php-studing\php-std\deleteThis';
deletingDir($dir);

function deletingDir($dir){
    $file = scandir($dir);
        unset($file[0]);
        unset($file[1]);
    foreach ($file as $value){
        $nextDir = $dir. '/' . $value;
        if (is_file ($nextDir)){
            unlink($nextDir);
        }else {
            deletingDir($nextDir);
            rmdir($nextDir);
        }
    }
}
?>
<html>
<body>
<!--//Задача 2-->
<form action = "hw3.php" method="post">
    <input type="text" name="place" placeholder="Введите URL">
    <input type="submit">
</form>

<?php
$post = $_POST;
$file = 'URLs.txt';

$urls = file('URLs.txt');



function getSmth($urls, $post){
    foreach($urls as $value){
        if ($value === $post['place'] . PHP_EOL) {
            return "x";
        }
    }
}
if (getSmth($urls, $post) === "x"){
}else {
    writeFile($file, $post['place'] . PHP_EOL);
}

function writeFile($file, $data) {
    $fp = fopen($file, 'a'); // w
    fwrite($fp, $data);
    fclose($fp);
}

var_dump($urls);

?>




<!--//1. создать html форму с одним текстовым полем и кнопкой submit-->
<!--//2. пользователь вводит в форму ссылку (URL адрес)-->
<!--//3. написать обработчик,-->
<!--//который проверяет наличие такой же ссылки в файле,-->
<!--//если не находит, то записывает ее в конец файла-->
</body>
</html>


