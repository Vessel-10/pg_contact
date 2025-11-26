<?php
    include 'connect.php';

    $fullName = $_POST['fullName'];
    $email = $_POST['emailAddress'];
    $text = $_POST['messageBox'];

    $sql = "INSERT INTO contact (fullname, emailaddress, txtmessage)
        VALUES ($1, $2, $3)";

    $result = pg_query_params($conn, $sql, [$fullName, $email, $text]);

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Data saved!']);
    } else {
        echo json_encode(['success' => false, 'message' => pg_last_error($conn)]);
    }
?>  