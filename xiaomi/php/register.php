<?php
$json = file_get_contents('php://input');
$json = json_decode($json);
$username = $json -> username;
$psd = $json -> psd;
$coon = new Mysqli('localhost','root','','db_student_admin',3306);
$sql = "INSERT INTO xiaomi(username,password) VALUES ('$username','$psd')";
$coon -> query("SET CHARACTER SET 'utf8'");
$coon -> query("SET NAMES 'utf8'") ;
$result = $coon -> query($sql);
if($result){
   $arr = array("code" => "200","msg" => "注册成功");
}else{
    $arr = array("code" => "1000","msg" => "注册失败");
};
echo json_encode($arr);
?>