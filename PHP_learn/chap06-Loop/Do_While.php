<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Image gallery</title>
        <link type="text/css" href="style.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <div class="Content3">
            <h1> Image gallery</h1>
            <div class="image">
                <?php
                    $i = 1;
                    do {
                        echo '<img src="image/space'.$i.'.jpg"/>';
                        $flag = 0;
                        if (isset($_GET["show"])) {
                            $flag = $_GET["show"];
                        }
                        ++$i;
                    } while ($i <= 4 && $flag == 1);
                ?>
                <a href="Do_While.php?show=1">Show All</a>
                <a href="Do_While.php?show=0">Show Demo</a>
            </div>
        </div>
    </body>
</html>