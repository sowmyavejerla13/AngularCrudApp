<?php
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data

$data = json_decode(file_get_contents("php://input"));
error_log(json_encode($data));
// Escaping special characters from submitting data & storing in new variables.
$name = mysqli_real_escape_string($conn, $data->name);
$email = mysqli_real_escape_string($conn, $data->email);
$gender = mysqli_real_escape_string($conn, $data->gender);
$address = mysqli_real_escape_string($conn, $data->address);

// mysqli insert query
$query = "INSERT into emp_details (emp_name,emp_email,emp_gender,emp_address) VALUES ('$name','$email','$gender','$address')";
// Inserting data into database
mysqli_query($conn, $query);
echo true;
?>