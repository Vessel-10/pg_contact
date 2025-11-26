 <?php
    $host = "localhost";
    $port = "Enter the port nummber";
    $dbname = "Name of database";
    $username = "postgres";
    $password = "Password for the database";
    $appName = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $option = "--application_name=$appName";

    $connStr = "host=$host port=$port dbname=$dbname user=$username password=$password options=$option";
    $conn = pg_connect($connStr);

    if(!$conn){
        die();
    }
?> 
