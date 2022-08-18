<?php 
require 'includes/db.php' ?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Document</title>
</head>
<body>
<?php 
$result = mysqli_query($connection,"SELECT * FROM `blog_page` WHERE `id` = ". (int) $_GET['id']);
$tmp_res = mysqli_fetch_assoc($result);
?>

    <div class="container"><div class="blog__page-label"> <?php echo $tmp_res['page_title']?></div>
        <img class="blog__page-img" src="../img/<?php echo $tmp_res['page_img']?>.png" alt="">
        <div class="blog__page-text"><?php echo $tmp_res['page_text']?></div>
        <a href="index.php" class="blog__page-link">- - back - - </a>
    </div>
</body>
</html>