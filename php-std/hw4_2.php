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

<?php
session_start(); // инициализация сессии

// записываем данные сессии
//$_SESSION['auth'] = true;
//$_SESSION['username'] = 'qwe';

// проверка наличия переменной
//isset($_SESSION['username']);

// удалить переменную
//unset($_SESSION['username']);

// закрыть сессию
//session_destroy();

/*
session_name(); // возвращает имя сессии
session_name($name); //устанавливает или возвращает имя сессии

session_id();// возвращает id сессии
session_id($id);// id id сессии

session_regenerate_id(); // создает новый id сессии

session_save_path(); // возвращает имя каталога с сессиями
session_save_path($dir); // устанавливает имя каталога с сессиями
*/

$post = $_POST;

function getCSV() {
    $handle = fopen("polzovateli.csv", "r"); //Открываем csv для чтения

    $array_line_full = array(); //Массив будет хранить данные из csv
    //Проходим весь csv-файл, и читаем построчно. 3-ий параметр разделитель поля
    while (($line = fgetcsv($handle, 50, ",")) !== FALSE) {
        $array_line_full[] = $line; //Записываем строчки в массив
    }
    fclose($handle); //Закрываем файл
    return $array_line_full; //Возвращаем прочтенные данные
}
$data = getCSV();


function auth($login, $pwd, $data) {
    if (!$login || !$pwd) { return false; }

    // проверка логина и пароля
    foreach ($data as $value){
        if ($login == $value[0] && $pwd == $value[1]) {
//        $_SESSION['auth'] = true;
            $_SESSION['login'] = $login;
        }
    }
    return true;
}

function logout(){
    session_destroy();
    unset($_SESSION['login']);
}

var_dump($post['login'], $post['pwd'], $data);
auth($post['login'], $post['pwd'], $data);

$get = $_GET;
$out = $get['out'];

// проверка существования значения переменной
//isset($get['out']);
// проверка существования значения переменной и самой переменной
//empty($get['out']);

if ($out) {
    logout();
}

?>

<?php if (isset($_SESSION['login'])): ?>
    <!--    <form action="first.php" method="post">-->
    <!--        <input type="submit" value="Выход">-->
    <!--    </form>-->


    <h2><a href="hw4_2.php?out=true">Выход</a></h2>
<?php else: ?>

    <form method="post" action="hw4_2.php">
        <?php
        var_dump($get);


        ?>
        <div>
            <input name="login" type="text" placeholder="login">
        </div>
        <div>
            <input name="pwd" type="password" placeholder="password">
        </div>
        <div>
            <input type="submit" value="Войти">
        </div>
    </form>
<?php endif; ?>