<?php
header('Content-Type: application/json');
include 'connect.php';

$sql = "SELECT fullname, emailaddress, txtmessage, date_created, time_created FROM contact ORDER BY date_created DESC, time_created DESC";
$result = pg_query($conn, $sql);

$messages = [];

if($result){
    while ($row = pg_fetch_assoc($result)) {
        $messages[] = $row;
    }
}
echo json_encode($messages);
