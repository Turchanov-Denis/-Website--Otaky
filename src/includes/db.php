<?php

require_once 'config.php';

$connection = mysqli_connect($config['db']['server'],$config['db']['login'],$config['db']['password'],$config['db']['db_name']);

if ($connection == false){
    echo mysqli_connect_error();
};