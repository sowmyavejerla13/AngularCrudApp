<?php
require_once 'database_connections.php';
$data = json_decode(file_get_contents("php://input"));
error_log(json_encode($data));
$query = "DELETE FROM emp_details WHERE emp_id=$data->del_id";
mysqli_query($conn, $query);
echo true;
?>