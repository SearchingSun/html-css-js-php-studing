<?php
session_start();

function is_session(){
    return isset($_SESSION['login']);
}
//if ($_SESSION['login'] == false){
//    header('Location:http://php/hw4_2.php');
//    exit;
//}
var_dump($_SESSION['login']);

?>
<?php if(is_session()): ?>

<h2>
    <?php echo "Hello " . $_SESSION['login']?>
</h2>

<?php endif;?>

<li><a href="hw4_2.php">First page</a></li>
