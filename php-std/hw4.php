<!--Задание 1-->
<!--Реализовать загрузку нескольких файлов на сервер. На сервере проверять размер и тип файла,
файлы, которые прошли проверку, загружать. Если файл не загружен сообщать пользователю имя
файла и почему файл не был загружен.-->
<!--Пишите функции!-->
<?php

// ЗАГРУЗКА ФАЙЛОВ НА СЕРВЕР
$files = $_FILES; // хранит всю информацию о загруженных файлах
var_dump($files['picture']);
$maxSize = 777777; //Максимально возможный размер изображения менять тута.

for ($i = 0; $i<count($files['picture']['name']);$i++) {
    $size = $files['picture']['size'][$i];
    $type = $files['picture']['type'][$i];

    if ($size <= $maxSize && ($type === 'image/jpeg' || $type === "image/png")) {
        $name = $files['picture']['name'][$i];
        $tmp_name = $files['picture']['tmp_name'][$i];
        move_uploaded_file($tmp_name, "serverFileBase/$name");
    } else if ($size >= $maxSize && ($type === 'image/jpeg' || $type === "image/png")) {
        var_dump("Изображение " . $files['picture']['name'][$i] . " превышает максимальный 
        возможный размер изображения и не было загружено на сервер (Идите лесом, господа)");
    } else if ($size <= $maxSize && ($type != 'image/jpeg' || $type != "image/png")) {
        var_dump("Ты что, совсем бум-бум?. По русски же написано - только PNG и JPEG. А " .
            $files['picture']['name'][$i] . "К ним не относится");
    } else if ($size >= $maxSize && ($type != 'image/jpeg' || $type != "image/png")) {
        var_dump("Я так не играю. И файл не тот и размер не пролазит. Дорогой пользователь, убейся АП стену вместе с " .
            $files['picture']['name'][$i]);
    }
}


?>

<form enctype="multipart/form-data"
      action="hw4.php" method="post">
    <p>Для загрузки на сервер доступны картинки размером менее <?php echo $maxSize ?> байт и расширений PNG  и JPEG</p>
    <input name="picture[]" size="" type="file" multiple> <br>
    <input type="submit" value="Send">
</form>
