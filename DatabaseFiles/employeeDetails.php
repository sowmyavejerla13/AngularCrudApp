<?php
include_once 'database_connections.php';
$query = 'SELECT * from emp_details ORDER BY emp_id ASC ';

$result = mysqli_query ( $conn, $query );
$arr = array ();
if (mysqli_num_rows ( $result ) != 0) {
	while ( $row = mysqli_fetch_assoc ( $result ) ) {
		$arr [] = $row;
	}
}
// Return json array containing data from the databasecon
echo $json_info = json_encode ( $arr );

?>