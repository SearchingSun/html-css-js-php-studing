<!--Задание 1-->
<!--Реализовать загрузку нескольких файлов на сервер. На сервере проверять размер и тип файла,
файлы, которые прошли проверку, загружать. Если файл не загружен сообщать пользователю имя
файла и почему файл не был загружен.-->
<!--Пишите функции!-->
<?php

// ЗАГРУЗКА ФАЙЛОВ НА СЕРВЕР
$files = $_FILES; // хранит всю информацию о загруженных файлах
var_dump($files['picture']);

$name = $files['picture']['name'];
$tmp_name = $files['picture']['tmp_name'];
// md5();
//md5_file();
$x = $files['file']['name'[0]];
move_uploaded_file($files['file']['tmp_name'[0]], "serverFileBase/$x");



//Версия 2
//$path = 'serverFileBase/';
//if ($_SERVER['REQUEST_METHOD'] == 'POST')
//{
//    if (!@copy($_FILES['picture']['tmp_name'], $path . $_FILES['picture']['name']))
//        echo 'Что-то пошло не так';
//    else
//        echo 'Загрузка удачна';
//}
//


?>

<form enctype="multipart/form-data"
      action="hw4.php" method="post">
    <input name="picture[]" size="" type="file" multiple accept="image/*"> <br>
    <input type="submit" value="Send">
</form>


<!--Задание 2-->
<!--Простая система аутентификации по логин/паролю.-->
<!--Для хранения информации о пользователе использовать CSV файл.-->
<!--Пример записи:-->
<!--username;password;sess_id-->
<!--username;password;sess_id-->
<!--username;password;sess_id-->

<!--Имя пользователя должно быть уникальными.-->
<!--1)Сверстать HTML-форму для регистрации нового пользователя.-->
<!--2)Написать обработчик регистрационной формы:-->
<!--операция добавить нового пользователя в файл.-->
<!--Логин пользователя должен быть уникальным-->
<!--(реализовать функцию поиска совпадений по имени пользователя).-->
<!--3)Сверстать HTML-форму входа пользователя на сайт.-->
<!--4)Написать обработчик формы входа,-->
<!--который будет проверять существование пользователя в файле,-->
<!--сверять введенный хеш пароля и хеш из файла на равенство.-->
<!--Посмотрите функции password_hash() и password_verify()-->
<!--5)Создать закрытую страницу сайта, которая будет доступна только тем пользователям,-->
<!--которые прошли регистрацию и выполнили вход на сайт.-->
<!--Посмотрите функцию header("Location: адрес");-->
<!--6) Реализовать возможность разлогиниться-->
