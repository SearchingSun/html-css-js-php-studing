<form action="registration.php" method="post">
    <!--**** save_user.php - это адрес обработчика.  То есть, после нажатия на кнопку "Зарегистрироваться", данные из полей  отправятся на страничку save_user.php методом "post" ***** -->
    <p>
        <label>Ваш логин:<br></label>
        <input name="login" type="text" size="15" maxlength="15">
    </p>
    <!--**** В текстовое поле (name="login" type="text") пользователь вводит свой логин ***** -->
    <p>
        <label>Ваш пароль:<br></label>
        <input name="password" type="password" size="15" maxlength="15">
    </p>
    <!--**** В поле для паролей (name="password" type="password") пользователь вводит свой пароль ***** -->
    <p>
        <input type="submit" name="submit" value="Зарегистрироваться">
        <!--**** Кнопочка (type="submit") отправляет данные на страничку save_user.php ***** -->
    </p></form>
<?php
$post = $_POST;
$login = $post['login'];
$password = $post['password'];
$hashPwd = password_hash($password, PASSWORD_DEFAULT );

function getCSV() {
    $handle = fopen("polzovateli.csv", "r"); //Открываем csv для чтения

    $array_line_full = array(); //Массив будет хранить данные из csv
    //Проходим весь csv-файл, и читаем построчно. 3-ий параметр разделитель поля
    while (($line = fgetcsv($handle, 250, ",")) !== FALSE) {
        $array_line_full[] = $line; //Записываем строчки в массив
    }
    fclose($handle); //Закрываем файл
    return $array_line_full; //Возвращаем прочтенные данные
}
$data = getCSV();
$newbye = array($login, $hashPwd);

function checkPolz($data,$login){
    foreach ($data as $value){
        if ($value[0] === $login){
            return "Хрен вам, а не печеньки";
        }
    }
}
$check = checkPolz($data,$login);

if($check != "Хрен вам, а не печеньки"){
    newbyeReg($newbye);
}else var_dump("Такой пользователь уже существует. Убейтесь ап стену");




function newbyeReg($newbye){
    $handle2 = fopen("polzovateli.csv", "a");
        fputcsv($handle2, $newbye, ",",'"');
    fclose($handle2);
}



?>