<?php
print_r($_POST);
require_once '../includes/db.php';
if (isset($_POST)) {
   if ($connection1){
            $re1= $_POST['name'];
            $re2= $_POST['email'];
            $sql = "INSERT INTO `personal_data`( `name`, `email`) VALUES ('$re1', '$re2')";
            $stmt = mysqli_prepare($connection1, $sql);
                if(!$stmt) {
                echo "Ошибка подготовки запроса: " . mysqli_error($connection1);
                exit();}

        mysqli_query($connection1,$sql );
   }
   else{
    echo mysqli_connect_error();
   }
};
