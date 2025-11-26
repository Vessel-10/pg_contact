 <?php
    $host = "localhost";
    $port = "5432";
    $dbname = "Contact-us";
    $username = "postgres";
    $password = "123456789";
    $appName = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $option = "--application_name=$appName";

    $connStr = "host=$host port=$port dbname=$dbname user=$username password=$password options=$option";
    $conn = pg_connect($connStr);

    if(!$conn){
        die();
    }
?> 