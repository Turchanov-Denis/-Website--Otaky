<?php
    require 'includes/db.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
     <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Rajdhani:wght@300;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <section class="vending">
        <div class="vending__preview_label">By Otaky</div>
        <div class="vending-stickers">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="vending-stickers__label">random vending stickers </div>
                    </div>
                    <div class="col-md-3">
                        <div class="vending-stickers__decoration-element"><img src="img/decoration-element.png" alt=""></div></div>
                
                </div>
                <div class="row">
                    <div class="col-md-3"><img src="img/decoration_stiсker.png" class="vending-stickers__decoration-sticker" alt=""></div>
                    <div class="col-md-6"><img  src="img/vending_machine.png" class="vending-stickers__decoration-machine" alt=""></div>
                    <div class="col-md-3"><button data-modal="sticker-modal-reset" class="vending-stickers__button">*Click*</button></div>
    
                </div>
                <div class="row">
                    <div class="col-md-6 offset-md-2">
                        <div class="vending-stickers__remark">Note: gives out random stickers when clicking on the button</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="vending-stickers__bg-line"></div> -->
    <div class="vending__preview_label"><?php echo $config['title'] ?></div>


    <div class="sticker-modal active" id="sticker-modal">
        <div class="sticker-modal__header">
            <div class="sticker-modal__label">&lt;Some sticker&gt;</div>
            <button data-modal="sticker-modal" class="sticker-modal__close-btn">X</button>
        </div>
        <img id="modal-img" src="../src/sticker/1.png" class="sticker-modal__img"></img>
        <button id="copyPng" class="sticker-modal__copy-btn">Copy</button>
        <div id="successMessage" class="sticker-modal__label sticker-modal_success">Success!</div>
    </div>

    

    <section class="blog">
        <div class="blog__slider">
            <?php 
            $result = mysqli_query($connection, "SELECT * FROM `blog_page`");
            while ( $tmp_result = mysqli_fetch_assoc($result)) {
                echo '<a href="article.php?id='.$tmp_result['id'].'" style="text-decoration:none;min-width:248px;min-height:248px;background:url(\'img/blog_img-preview/'.$tmp_result['blog_preview-img'].'.png\') center center/cover no-repeat;border-radius:4px">'.
                '<div class="blog__preview-label">' .$tmp_result['blog_label'] . '</div>'
                . '<div class="blog__preview-sublabel">'  .$tmp_result['blog_sublabel'] . '</div></a>';
            }
            ?>
        <!-- <a href="pages/page1.html" style="text-decoration:none;min-width:248px;min-height:248px;background:url(../img/otaky_promo copy.jpg/) center center/cover no-repeat;border-radius:4px">
            <div class="blog__preview-label"> New Sticker</div>
            <div class="blog__preview-sublabel">Review</div>
        </a> -->
        
    </div>
    </section>


    <div class="vending__preview_label">About project Otaky</div>
    <section class="otaky-advertisement">
        <div class="container">
            <div class="row">
                <div class="col-md-7"><img src="img/otaky_img.png" class="otaky-advertisement__img" alt=""></div>
                <div class="col-md-5">
                    <div class="about__mark">
                        <div class="about__label">Otaky</div>
                        <div class="about__sublabel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</div>
                    <div class="social">
                        <button id="modal-subscribe-btn" class="social__button">Подписаться</button>
                        <a href="#" class="social__icon-link">подписаться на бусти</a>
                    </div>
                </div>
            </div>
            

        </div>
    </section>
    <footer>
        <div class="modal-subscribe active">
            <div class="modal-subscribe__header">
                <div class="modal-subscribe__label">Подпишись на рассылку новостей о нашем проекте</div>
                <button id="modal-subscribe-close-btn" class="modal-subscribe__close">X</button>
            </div>
            
            <form id="mail_subscribe" class="form-subscribe"  method="POST" >
                <input type="text" name="name" class="form-subscribe__input" placeholder="Укажите имя">
                <input type="text"name="email" class="form-subscribe__input" placeholder="Элетронная почта">
                <input type="submit" class="form-subscribe__submit" value="Подписаться">
            </form>
        </div>
        <div class="vending__preview_label">Created https://github.com/Turchanov-Denis</div>
    </footer>
    </section>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/slick.min.js"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/copy-image-clipboard/dist/index.browser.js"></script> -->
    <script src="js/index.browser.js"></script>
    <script src="js/script.js"></script>
</body>
</html>