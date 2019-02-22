<?php
$json = file_get_contents('php://input');
$json = json_decode($json);
$username = $json -> username;
$psd = $json -> psd;
$coon = new Mysqli('localhost','root','','db_student_admin',3306);
$sql = "SELECT * FROM xiaomi where username = '$username' and password = '$psd'";
$coon -> query("SET CHARACTER SET 'utf8'");
$coon -> query("SET NAMES 'utf8'") ;
$row = $coon -> query($sql);
$result = $row -> fetch_assoc( );
if($result){
   $arr = array("code" => "200","msg" => "","_data" => array("name" => $result['username'],"psw" => $result['password']));
}else{
    $arr = array("code" => "1000","msg" => "用户名或密码输入错误");
};
echo json_encode($arr);
?>