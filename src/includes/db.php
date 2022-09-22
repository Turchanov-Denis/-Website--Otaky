<?php

require_once 'config.php';

$connection = mysqli_connect($config['db']['server'],$config['db']['login'],$config['db']['password'],$config['db']['db_name_blog']);
$connection1 = mysqli_connect($config['db']['server'],$config['db']['login'],$config['db']['password'],$config['db']['db_name_subscribe']);
if ($connection == false){
    echo mysqli_connect_error();
};
if ($connection1 == false){
    echo mysqli_connect_error();
};