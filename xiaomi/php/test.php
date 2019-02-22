<?php
header("Content-type:text/html;charset=utf-8");
$json = file_get_contents('php://input');
$json = json_decode($json);
$username = $json -> username;
$coon = new Mysqli('localhost','root','','db_student_admin',3306);
$coon -> query("SET CHARACTER SET 'utf8'");
$coon -> query("SET NAMES 'utf8'") ;
$sql = "SELECT * from xiaomi WHERE username LIKE '$username'";
$row= $coon -> query($sql);
// var_dump($result);
$arr = array();
if($result = $row -> fetch_object()){
    $arr = array("code" => "200","msg" => "该用户已注册");
 }else{
     $arr = array("code" => "1000","msg" => "可以注册");
 };
echo json_encode($arr);
?>